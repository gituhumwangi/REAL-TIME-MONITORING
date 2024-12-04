from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import CustomUser, Project, ImplementingAgency, KeyPerformanceIndicator, Donor, Beneficiary

# Donor Registration Form
class DonorRegisterationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = Donor
        fields = [
            'username', 
            'email', 
            'password1', 
            'password2', 
            'first_name', 
            'last_name',  
            'strategic_focus', 
            'annual_donation_capacity', 
            'geographical_focus'
        ]

# Implementing Agency Registration Form
class IARegistrationForm(UserCreationForm):
    class Meta:
        model = ImplementingAgency
        fields = [
            'username', 
            'email', 
            'password1', 
            'password2', 
            'first_name', 
            'last_name', 
            'registration_status', 
            'registration_certificate', 
            'area_of_focus', 
            'headquarters_location', 
            'geographical_coverage', 
            'number_of_donors', 
            'annual_turnover', 
            'number_of_beneficiaries'
        ]

# General User Registration Form
class RegisterForm(UserCreationForm):
    class Meta:
        model = CustomUser  
        fields = ['username', 'email', 'first_name', 'last_name']

# Create Project Form
class CreateProject(forms.ModelForm):
    class Meta:
        model = Project
        fields = [
            "name", 
            "funding_amount", 
            "objectives", 
            "target_location", 
            "funding_duration", 
            "implementing_agency"
        ]

# Appoint Implementing Agency Form
class Appoint_IA(forms.ModelForm):
    class Meta:
        model = ImplementingAgency
        fields = [
            "first_name", 
            "last_name", 
            "registration_status", 
            "area_of_focus", 
            "annual_turnover", 
            "geographical_coverage"
        ]

# Project Indicators Form
# class ProjectIndicators(forms.ModelForm):
#     class Meta:
#         model = KeyPerformanceIndicator
#         fields = [
#             "project", 
#             "indicator_name", 
#             "baseline_value", 
#             "target_value", 
#             "actual_value"
#         ]

# Beneficiary Form for Implementing Agency to record new beneficiaries
class BeneficiaryForm(forms.ModelForm):
    class Meta:
        model = Beneficiary
        fields = [
            'implementing_agency',
            'project',
            'username',
            'identification',
            'gender',
            'age',
            'location',
            'nationality',
            'contact_mobile',
            'contact_email',
            'first_name',
            'last_name',
        ]


class ProjectIndicators(forms.ModelForm):
    class Meta:
        model = KeyPerformanceIndicator
        fields = ['project', 'indicator_name', 'baseline_value', 'target_value', 'actual_value']
        
        # Optional: Customize labels and widgets if needed
        labels = {
            'indicator_name': 'Indicator Name',
            'baseline_value': 'Baseline Value',
            'target_value': 'Target Value',
            'actual_value': 'Actual Value (if applicable)',
        }
        
        widgets = {
            'indicator_name': forms.TextInput(attrs={'class': 'form-control'}),
            'baseline_value': forms.NumberInput(attrs={'class': 'form-control'}),
            'target_value': forms.NumberInput(attrs={'class': 'form-control'}),
            'actual_value': forms.NumberInput(attrs={'class': 'form-control', 'placeholder': 'Optional'}),
        }
