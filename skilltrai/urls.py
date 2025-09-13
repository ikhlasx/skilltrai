from django.urls import path
from frontend import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),  # New about page route
    path('courses/', views.courses, name='courses'),
    path('trainers/', views.trainers, name='trainers'),
    path('register/', views.register, name='register'),
    path('api/register/', views.register_api, name='register_api'),
]