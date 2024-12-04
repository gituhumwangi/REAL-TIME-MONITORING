from django.db import models
# from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save

# Create your models here.


from django.db import models

# class DonorManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('Email must be provided')
#         email = self.normalize_email(email)
#         donor = self.model(email=email, **extra_fields)
#         donor.set_password(password)
#         donor.save(using=self._db)
#         return donor

#     def create_superuser(self, email, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)
#         return self.create_user(email, password, **extra_fields)


# class Proposal(models.Model):
#     implementing_agency = models.ForeignKey(ImplementingAgency, on_delete=models.CASCADE, related_name='proposals')
#     donor = models.ForeignKey(Donor, on_delete=models.CASCADE, related_name='proposals')
#     project_name = models.CharField(max_length=255)
#     target_population = models.CharField(max_length=255)
#     concept = models.TextField()
#     status = models.CharField(max_length=50, default='Submitted')  # Status: Submitted, Approved, Rejected
#     created_at = models.DateTimeField(auto_now_add=True)

# class Feedback(models.Model):
#     beneficiary = models.ForeignKey(Beneficiary, on_delete=models.CASCADE, related_name='feedback')
#     project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='feedback')
#     text_feedback = models.TextField(null=True, blank=True)
#     voice_feedback = models.FileField(upload_to='voice_feedback/', null=True, blank=True)
#     video_feedback = models.FileField(upload_to='video_feedback/', null=True, blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)

# class Analytics(models.Model):
#     project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='analytics')
#     success_rate = models.DecimalField(max_digits=5, decimal_places=2)
#     comparison_with_other_projects = models.TextField()  # JSON or structured data
#     comparison_with_other_ias = models.TextField()  # JSON or structured data
#     created_at = models.DateTimeField(auto_now_add=True)

# class CustomUser(AbstractUser):
#     ROLE_CHOICES = [
#         ('donor', 'Donor'),
#         ('ia', 'Implementing Agency'),
#         ('beneficiary', 'Beneficiary'),
#     ]
    
#     role = models.CharField(max_length=20, choices=ROLE_CHOICES)

# class Users(AbstractUser):
#     username = models.CharField(max_length=100)
#     email = models.EmailField(unique=True)
#     # password = models.CharField(max_length=255, default='password12345')

#     USERNAME_FIELD = "email"
#     REQUIRED_FIELDS = ["username"]

#     def __str__(self):
#         return self.username
    
# class Profile(models.Model):
#     user = models.OneToOneField(Users, on_delete=models.CASCADE)
#     full_name = models.CharField(max_length=250)
#     password = models.CharField(max_length=255, default="password123")
#     password2 = models.CharField(max_length=255, default="password123")
#     strategic_focus = models.TextField()
#     annual_donation_capacity = models.DecimalField(max_digits=10, decimal_places=2, default=0, null=True, blank=True)
#     headquarters_location = models.CharField(max_length=255)
#     geographical_focus = models.CharField(max_length=255)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.full_name
    
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)


# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()


# post_save.connect(create_user_profile, sender=Users)
# post_save.connect(save_user_profile, sender=Users)


from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings
from django.utils import timezone

class CustomUser(AbstractUser):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)

    first_name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    def __str__(self):
        return f"{self.first_name}, {self.last_name}"
    
class Project(models.Model):
    donor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='projects_as_donor')
    implementing_agency = models.ForeignKey('ImplementingAgency', on_delete=models.SET_NULL, null=True, blank=True, related_name='projects_as_implementing_agency')
    name = models.CharField(max_length=255)
    target_location = models.CharField(max_length=255)
    funding_duration = models.IntegerField()  # Duration in months or years
    funding_amount = models.DecimalField(max_digits=15, decimal_places=2)
    objectives = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    completed_date = models.DateTimeField(null=True, blank=True)  


    def __str__(self):
        return self.name + ", " + str(self.funding_amount) + ", " + self.objectives + ", " +  self.target_location + ", " + str(self.funding_duration)
    

class Donor(CustomUser):
    # firstname = models.CharField(max_length=255, default="john")
    # lastname = models.CharField(max_length=255, default="doe")
    # email = models.EmailField(unique=True, max_length=255, default="default@gmail.com")
    strategic_focus = models.TextField()
    annual_donation_capacity = models.DecimalField(max_digits=15, decimal_places=2)
    headquarters_location = models.CharField(max_length=255)
    geographical_focus = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    
    # # Authentication Fields
    # is_active = models.BooleanField(default=True)
    # is_staff = models.BooleanField(default=False)

    # objects = DonorManager()

    def __str__(self):
        return self.username



class ImplementingAgency(CustomUser):
    # customuser_ptr = models.OneToOneField(CustomUser, on_delete=models.CASCADE, default=None, null=True, blank=True)
    registration_status = models.CharField(max_length=100)  # NGO, Limited company, etc.
    registration_certificate = models.FileField(upload_to='certificates/')
    area_of_focus = models.TextField()
    headquarters_location = models.CharField(max_length=255)
    geographical_coverage = models.TextField()
    number_of_donors = models.IntegerField()
    annual_turnover = models.DecimalField(max_digits=15, decimal_places=2)
    number_of_beneficiaries = models.IntegerField()
    number_of_employees = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name}, {self.last_name} - Beneficiaries: {self.number_of_beneficiaries}, Annual Turnover: {self.annual_turnover}"



class Beneficiary(models.Model):
    implementing_agency = models.ForeignKey(ImplementingAgency, on_delete=models.CASCADE, related_name='beneficiaries')
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='beneficiaries')
    username = models.CharField(max_length=255)
    identification = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    age = models.IntegerField()
    location = models.CharField(max_length=255)
    nationality = models.CharField(max_length=100)
    contact_mobile = models.CharField(max_length=15)
    contact_email = models.EmailField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(unique=True, default="")
    first_name =  models.CharField(max_length=255, default="")
    last_name = models.CharField(max_length=255, default="")

    def __str__(self):
        return f"{self.first_name}, {self.last_name}, {self.project}, {self.nationality}, {self.contact_mobile}"



class KeyPerformanceIndicator(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='kpis')
    indicator_name = models.CharField(max_length=255)
    baseline_value = models.DecimalField(max_digits=10, decimal_places=2)
    target_value = models.DecimalField(max_digits=10, decimal_places=2)
    actual_value = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Updated over time
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.project + "," + self.indicator_name + "," + str(self.target_value) + "," + str(self.baseline_value) + "," + str(self.actual_value)