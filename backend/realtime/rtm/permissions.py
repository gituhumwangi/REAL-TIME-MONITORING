# from rest_framework.permissions import BasePermission

# class IsDonor(BasePermission):
#     def has_permission(self, request, view):
#         return request.user.is_authenticated and request.user.role == 'donor'

# class IsImplementingAgency(BasePermission):
#     def has_permission(self, request, view):
#         return request.user.is_authenticated and request.user.role == 'ia'

# class IsBeneficiary(BasePermission):
#     def has_permission(self, request, view):
#         return request.user.is_authenticated and request.user.role == 'beneficiary'
