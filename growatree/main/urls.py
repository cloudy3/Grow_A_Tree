from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path('e-waste/', views.map, name="map"),
]
