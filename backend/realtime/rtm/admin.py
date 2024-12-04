from django.contrib import admin
from .models import Donor, ImplementingAgency, Beneficiary, Project, KeyPerformanceIndicator, CustomUser
# from .models import Users, Profile

# Register your models here.
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["name", "donor", "implementing_agency", "target_location", "funding_amount", "created_at", "completed_date"]

# class ProfileAdmin(admin.ModelAdmin):
#     list_display = ['full_name', 'strategic_focus', 'annual_donation_capacity', 'headquarters_location', 'geographical_focus', 'user', 'created_at' ]

# admin.site.register(Users, UserAdmin)
# admin.site.register(Profile, ProfileAdmin)

# admin.site.register(Donor)
# admin.site.register(ImplementingAgency)
# admin.site.register(Beneficiary)
# admin.site.register(Project)
# admin.site.register(Feedback)
# admin.site.register(KeyPerformanceIndicator)
# admin.site.register(Analytics)
# admin.site.register(Proposal)
# admin.site.register(CustomUser)



