# from rest_framework import serializers
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate
# from .models import Project, KeyPerformanceIndicator, Beneficiary, ImplementingAgency, Donor
# from rest_framework_simplejwt.tokens import RefreshToken
# from .models import Users, Profile
# from django.contrib.auth.password_validation import validate_password
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework import serializers
# from .models import Users, Profile


# # Serializer for Users model
# class UsersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = ['id', 'username', 'email']

# Serializer for Profile model
# class ProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Profile
#         fields = ['full_name', 'annual_donation_capacity', 'headquarters_location', 'created_at', 'geographical_focus']

# # Custom Token serializer to include additional fields
# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)

#         # Safely access profile fields
#         if hasattr(user, 'profile'):
#             token['full_name'] = user.profile.full_name
#             token['annual_donation_capacity'] = str(user.profile.annual_donation_capacity)
#             token['headquaters_location'] = user.profile.headquaters_location
#             token['created_at'] = str(user.profile.created_at)
#             token['geographical_focus'] = user.profile.geographical_focus

#         else:
#             token['full_name'] = ''
#             token['annual_donation_capacity'] = ''
#             token['headquaters_location'] = ''
#             token['created_at'] = ''
#             token['geographical_focus'] = ''

#             token['email'] = user.email
#             token['username'] = user.username

#             return token
        
# # Registration Serializer for Users and Profile
# class RegisterSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
#     password2 = serializers.CharField(write_only=True, required=True)
#     strategic_focus = serializers.CharField(required=True)
#     full_name = serializers.CharField(required=True)
#     annual_donation_capacity = serializers.DecimalField(max_digits=10, decimal_places=2, required=True)
#     headquarters_location = serializers.CharField(required=True)
#     geographical_focus = serializers.CharField(required=True)

#     class Meta:
#         model = Users
#         fields = ['email', 'username', 'password', 'password2','full_name', 
#                   'strategic_focus', 'annual_donation_capacity', 'headquarters_location', 
#                   'geographical_focus']

#     def validate(self, attrs):
#         if attrs['password'] != attrs['password2']:
#             raise serializers.ValidationError({"password": "Passwofields do not match."})
#         return attrs
#     def validate_annual_capacity(self, value):
#         if value <= 0:
#             raise serializers.ValidationError("Annual Donation capacity should be a positive number")

#     def create(self, validated_data):
#         # Extract profile-related fields
#         validated_data.pop('password2')
#         profile_data = {
#             'full_name': validated_data.pop('full_name'),
#             'strategic_focus': validated_data.pop('strategic_focus'),
#             'annual_donation_capacity': validated_data.pop('annual_donation_capacity'),
#             'headquarters_location': validated_data.pop('headquarters_location'),
#             'geographical_focus': validated_data.pop('geographical_focus'),
#         }

#         # Create the user
#         user = super().create(validated_data)
#         user.set_password(validated_data['password'])
#         user.save()

#         #Create Profile
#         Profile.objects.create(user=user, **profile_data)

#         return user

    

# class ProjectSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Project
#         fields = '__all__'

# class KeyProjectIndicatorSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = KeyPerformanceIndicator
#         fields = '__all__'

# class BeneficiarySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Beneficiary
#         fields = '__all__'

# class IASignupSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True)

#     class Meta:
#         model = ImplementingAgency  # Assuming IA has its own model linked with User
#         fields = ['name', 'registration_status', 'hq_location', 'geo_coverage', 'number_of_employees', 
#                   'annual_turnover', 'email', 'password']

#     def create(self, validated_data):
#         # Create the User
#         user = User.objects.create_user(
#             username=validated_data['email'],
#             email=validated_data['email'],
#             password=validated_data['password']
#         )
        
#         # Create the IA profile
#         ia = ImplementingAgency.objects.create(
#             user=user,
#             name=validated_data['name'],
#             registration_status=validated_data['registration_status'],
#             hq_location=validated_data['hq_location'],
#             geo_coverage=validated_data['geo_coverage'],
#             number_of_employees=validated_data['number_of_employees'],
#             annual_turnover=validated_data['annual_turnover']
#         )
#         return ia
    
# class DonorSignupSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Donor
#         fields = ['firstname', 'lastname', 'email', 'password', 'strategic_focus', 'annual_donation_capacity', 'headquarters_location', 'geographical_focus']
        
#     def create(self, validated_data):
#         # Hash the password before saving
#         donor = Donor(
#             firstname=validated_data['firstname'],
#             lastname=validated_data['lastname'],
#             email=validated_data['email'],
#             strategic_focus=validated_data['strategic_focus'],
#             annual_donation_capacity=validated_data['annual_donation_capacity'],
#             headquarters_location=validated_data['headquarters_location'],
#             geographical_focus=validated_data['geographical_focus']
#         )
#         donor.set_password(validated_data['password'])  # Ensure to hash the password
#         donor.save()
#         return donor
    
# class DonorLogininSerializers(serializers.ModelSerializer):
#     email = serializers.EmailField()
#     password = serializers.CharField()

#     def check_user(self, validate_data):
#         user = authenticate(username=validate_data['email'], password=validate_data['password'])
#         if not user:
#             raise ValidatorError('user not found')
#         return user
# class DonorSerializer(serializers.ModelSerializer):
#     class Meta:
#        models: Donor
#        fields = ('email', 'username')

