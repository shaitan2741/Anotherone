from django.contrib import admin
from django.urls import path,include
from .views import UserView, TestView


urlpatterns = [
    path("api/test", TestView.as_view(),name="test"),
    path('api/register',UserView.as_view(),name='register'),
]

