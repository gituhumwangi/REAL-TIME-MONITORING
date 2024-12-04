# from rest_framework import status
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated, AllowAny
# from rest_framework.response import Response
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, render, redirect
from .forms import RegisterForm, CreateProject, Appoint_IA, ProjectIndicators, IARegistrationForm, BeneficiaryForm
from django.contrib.auth import login, logout, authenticate
from django.urls import reverse
from .models import Project, KeyPerformanceIndicator, Beneficiary
# # from .models import Project, KeyPerformanceIndicator, Beneficiary, Feedback, Proposal
# # from .serializers import ProjectSerializer, KeyProjectIndicatorSerializer, BeneficiarySerializer, IASignupSerializer, DonorSignupSerializer
# # from .permissions import IsDonor, IsImplementingAgency, IsBeneficiary
# from .models import Users, Profile
# from .serializers import UsersSerializer, MyTokenObtainPairSerializer, RegisterSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework import generics, status
# from django.contib.auth import login, logout, authenticate


@login_required(login_url='login')
def home(request):
    projects = Project.objects.all()  

    if request.method == "POST":
        project_id = request.POST.get("project-id")
        project = Project.objects.filter(id=project_id).first()
        if project and project.donor == request.user:
            project.delete()

    return render(request, 'donor/home.html', {'projects': projects})

def sign_up(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = RegisterForm()
    return render(request, 'registration/sign_up.html', {"form": form})

def logout_view(request):
    if request.method == "POST":
        logout(request)
        return redirect('login')

@login_required(login_url="login")   
def create_project(request):
    if request.method == "POST":
        form = CreateProject(request.POST)
        if form.is_valid():
            project = form.save(commit=False)
            project.donor = request.user
            project.save()
            return redirect('home')
    else:
        form = CreateProject()
    return render(request, "donor/create_projects.html", {"form": form})

@login_required(login_url="login")
def appoint_IA(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    if request.method == "POST":
        form = Appoint_IA(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = Appoint_IA(instance=project)
    return render(request, 'donor/assign_agency.html', {'form': form, 'project': project})

@login_required(login_url="login")
def create_kpi(request, project_id):
## Fetch the related project instance 
    project = get_object_or_404(Project, id=project_id)

    if request.method == "POST":
        form = ProjectIndicators(request.POST)
        if form.is_valid():
            kpi = form.save(commit=False) ## prevents from the kpis from being saved immediately
            kpi.project = project
            kpi.save()
            return redirect('home')
    else:
        form = ProjectIndicators()

    kpis = KeyPerformanceIndicator.objects.all()
    return render(request, 'donor/kpis.html', {'form': form, 
    'kpis': KeyPerformanceIndicator.objects.all(),
    'project': project,  #Pass project to the context
    })
    

def ia_sign_up(request):
    if request.method == 'POST':
        form = IARegistrationForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('ia_dashboard')
    else:
        form = IARegistrationForm()
    return render(request, 'registration/sign_up_ia.html', {'form': form})

def ia_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('ia_dashboard')
        else:
            return render(request, 'registration/login_ia.html', {'error': 'Invalid credentials'})
    return render(request, 'registration/login_ia.html')

@login_required(login_url='ia_login')
def ia_logout(request):
    logout(request)
    return redirect('ia_login')

@login_required(login_url='ia_login')
def record_beneficiary(request):
    if request.method == 'POST':
        form = BeneficiaryForm(request.POST)
        if form.is_valid():
            beneficiary = form.save(commit=False)
            beneficiary.recorded_by = request.user
            beneficiary.save()
            return redirect('ia_dashboard')
    else:
        form = BeneficiaryForm()
    return render(request, 'rtm/record_beneficiary.html', {'form': form})

@login_required(login_url='ia_login')
def implementing_agency_dashboard(request):
    # Fetch data for beneficiaries, KPIs, and projects
    beneficiaries = Beneficiary.objects.all()
    kpis = Kpi.objects.all()
    projects = Project.objects.all()
    
    # Handle the form submission for recording a beneficiary
    if request.method == 'POST':
        form = BeneficiaryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('implementing_agency_dashboard')  # Redirect to the same page after successful submission
    else:
        form = BeneficiaryForm()

    # Render the dashboard template with context
    context = {
        'beneficiaries': beneficiaries,
        'kpis': kpis,
        'projects': projects,
        'form': form,
    }
    
    return render(request, 'rtm/implementing_agency_dashboard.html', context)
    

# Custom Token View
# class MyTokenObtainPairView(TokenObtainPairView):
#     serializer_class = MyTokenObtainPairSerializer  # Fixed typo here

# # Registration View
# class RegisterView(generics.CreateAPIView):
#     queryset = Users.objects.all()
#     permission_classes = [AllowAny]
#     serializer_class = RegisterSerializer

# # Dashboard View
# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def dashboard(request):
#     if request.method == "GET":
#         context = f"Hey {request.user}, You are seeing a GET response"
#         return Response({"response": context}, status=status.HTTP_200_OK)
    
#     elif request.method == "POST":
#         text = request.data.get("text")  # Fixed for Django REST Framework
#         response = f"Hey {request.user}, your text is {text}"
#         return Response({'response': response}, status=status.HTTP_200_OK)
    
#     return Response({}, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# @permission_classes([IsDonor])  # Custom permission for donors
# def create_project(request):
#     serializer = ProjectSerializer(data=request.data)
#     if serializer.is_valid():
#         project = serializer.save(donor=request.user)  # Attach the donor to the project
#         return Response({'message': 'Project created successfully'}, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# @permission_classes([IsDonor])  # Only donors can define key indicators
# def define_key_indicators(request, project_id):
#     project = get_object_or_404(Project, pk=project_id)
#     serializer = KeyProjectIndicatorSerializer(data=request.data, many=True)
    
#     if serializer.is_valid():
#         serializer.save(project=project)
#         return Response({'message': 'Indicators created successfully'}, status=status.HTTP_201_CREATED)
    
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# @permission_classes([IsImplementingAgency])  # Only implementing agencies can post beneficiaries
# def post_beneficiary(request, project_id):
#     project = get_object_or_404(Project, pk=project_id)
#     beneficiary_data = request.data
    
#     beneficiary = Beneficiary.objects.create(
#         name=beneficiary_data['name'],
#         ia=request.user,
#         project=project,
#         location=beneficiary_data['location']
#     )
    
#     return Response({'message': 'Beneficiary created successfully'}, status=status.HTTP_201_CREATED)


# @api_view(['POST'])
# @permission_classes([IsImplementingAgency])  # Only implementing agencies can submit proposals
# def submit_proposal(request, project_id):
#     project = get_object_or_404(Project, pk=project_id)
#     proposal_data = request.data
    
#     Proposal.objects.create(
#         project=project,
#         ia=request.user,
#         target_population=proposal_data['target_population'],
#         concept=proposal_data['concept'],
#         ia_profile=proposal_data['ia_profile']
#     )
    
#     return Response({'message': 'Proposal submitted successfully'}, status=status.HTTP_201_CREATED)


# @api_view(['POST'])
# @permission_classes([IsBeneficiary])  # Only beneficiaries can submit performance indicators
# def submit_performance_indicators(request, beneficiary_id):
#     beneficiary = get_object_or_404(Beneficiary, pk=beneficiary_id)
#     indicators_data = request.data
    
#     for indicator_id, actual_value in indicators_data.items():
#         indicator = get_object_or_404(KeyPerformanceIndicator, pk=indicator_id, project=beneficiary.project)
#         if not isinstance(actual_value, (int, float)):
#             return Response({'error': 'Invalid value for indicator'}, status=status.HTTP_400_BAD_REQUEST)
        
#         indicator.actual_value = actual_value
#         indicator.save()

#     return Response({'message': 'Performance indicators submitted successfully'}, status=status.HTTP_200_OK)


# @api_view(['POST'])
# @permission_classes([IsBeneficiary])  # Only beneficiaries can submit feedback
# def submit_feedback(request, project_id):
#     feedback_data = request.data
#     Feedback.objects.create(
#         project_id=project_id,
#         beneficiary=request.user,
#         feedback=feedback_data['feedback'],
#         video=feedback_data.get('video', None),  # Optional video field
#         audio=feedback_data.get('audio', None)   # Optional audio field
#     )
    
#     return Response({'message': 'Feedback submitted successfully'}, status=status.HTTP_201_CREATED)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def onboard_beneficiary(request):
#     # Ensure the user is part of an implementing agency
#     if not hasattr(request.user, 'implementingagency'):
#         return Response({'error': 'Only implementing agencies can onboard beneficiaries.'}, status=status.HTTP_403_FORBIDDEN)

#     data = request.data
#     agency = request.user.implementingagency  # Assuming the user is linked to an agency

#     # Validate the project
#     try:
#         project = Project.objects.get(id=data['project_id'], implementing_agency=agency)
#     except Project.DoesNotExist:
#         return Response({'error': 'Invalid project or you are not authorized for this project.'}, status=status.HTTP_403_FORBIDDEN)

#     # Create and save the new beneficiary
#     beneficiary_data = {
#         'implementing_agency': agency.id,
#         'project': project.id,
#         'name': data['name'],
#         'identification': data['identification'],
#         'gender': data['gender'],
#         'age': data['age'],
#         'location': data['location'],
#         'nationality': data['nationality'],
#         'contact_mobile': data['contact_mobile'],
#         'contact_email': data.get('contact_email')  # Optional
#     }

#     serializer = BeneficiarySerializer(data=beneficiary_data)

#     if serializer.is_valid():
#         serializer.save()
#         return Response({'message': 'Beneficiary onboarded successfully'}, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# def ia_signup(request):
#     serializer = IASignupSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()  # This will call the create method in the serializer
#         return Response({"message": "Implementing Agency created successfully."}, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# def donor_signup(request):
#     serializer = DonorSignupSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response({"message": "Donor created successfully."}, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# def donor_login(request):
#     email = request.data.get('email')
#     password = request.data.get('password')

#     if not email or not password:
#         return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

#     user = authenticate(email=email, password=password)
    
#     if user is None:
#         return Response({'error': 'Invalid email or password.'}, status=status.HTTP_401_UNAUTHORIZED)
    
#     # Create JWT tokens
#     refresh = RefreshToken.for_user(user)
