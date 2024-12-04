from django.urls import path
from . import views
from django.contrib.auth.views import LoginView
from django.contrib.auth import views as  auth_views
from django.shortcuts import redirect
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# urlpatterns = [
    # path("token/", views.MyTokenObtainPairView.as_view()),
    # path("token/refresh/", TokenRefreshView.as_view()),
    # path("register/", views.RegisterView.as_view()),
    # path("dashboard/", views.dashboard),
    #  path("token/", views.MyTokenObtainPairView.as_view()),

# ]

urlpatterns = [
    path('', lambda request: redirect('login')),
    path('home', views.home, name='home'),
    path('sign_up', views.sign_up, name='sign_up'),
    path('logout', views.logout, name='logout'),
    path('login', auth_views.LoginView.as_view(), name='login'),
    path('create-project', views.create_project, name='create_project'),
    path('appoint-IA/<int:project_id>/', views.appoint_IA, name='appoint_IA'),
    # path('dashboard/', implementing_agency_dashboard, name='implementing_agency_dashboard'),
    path('login_ia/', views.ia_login, name='ia_login'),
    path('ia/logout/', views.ia_logout, name='ia_logout'),
    path('sign_up_ia/', views.ia_sign_up, name='ia_sign_up'),
    path('record-beneficiary/', views.record_beneficiary, name='record_beneficiary'),
    path('kpis/create/<int:project_id>/', views.create_kpi, name='create_kpi'),
    #  path('login/', LoginView.as_view(template_name='templates/rtm/registration/login.html'), name='login'),

]

# urlpatterns = [
#     # Existing URLs
#     path("projects/create/", views.create_project, name="create_project"),
#     path("projects/<int:project_id>/define-indicators/", views.define_key_indicators, name="define_key_indicators"),
#     path("projects/<int:project_id>/beneficiaries/", views.post_beneficiary, name="post_beneficiary"),
#     path("projects/<int:project_id>/proposals/", views.submit_proposal, name="submit_proposal"),
#     path("beneficiaries/<int:beneficiary_id>/indicators/", views.submit_performance_indicators, name="submit_performance_indicators"),
#     path("projects/<int:project_id>/feedback/", views.submit_feedback, name="submit_feedback"),
#     path("beneficiaries/onboard/", views.onboard_beneficiary, name="onboard_beneficiary"),
#     path('ia/signup/', views.ia_signup, name='ia_signup'),

#     # New Donor URLs
#     path('donor/signup/', views.donor_signup, name='donor_signup'),
#     path('donor/login/', views.donor_login, name='donor_login'),

#     # JWT authentication endpoints
#     path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
# ]
