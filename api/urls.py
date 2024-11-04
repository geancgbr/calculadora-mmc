from django.urls import path
from .views import calculate_lcm

urlpatterns = [
    path('calculate/', calculate_lcm, name='calculate_lcm'),
]