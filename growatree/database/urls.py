from django.urls import path
from .views import RecyclingListView, RecyclingCreateView
from . import views


urlpatterns = [
    path('', RecyclingListView.as_view(), name = 'database_home'),
    path('recyclingentry/new/', RecyclingCreateView.as_view(), name = 'recyclingentry_create'),
]
