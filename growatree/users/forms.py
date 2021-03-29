from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile


class UserRegisterForm(UserCreationForm):
	"""
	Creates a User Register Form with username, email, password, and verify password fields
	"""
	email = forms.EmailField()

	class Meta:
		model = User
		fields = ['username', 'email', 'password1', 'password2']


class UserUpdateForm(forms.ModelForm):
	"""
	Creates a User Update Form to update username and email
	"""
	email = forms.EmailField()

	class Meta:
		model = User
		fields = ['username', 'email']


class ProfileUpdateForm(forms.ModelForm):
	"""
	Creates a Profile Update FOrm to update profile image
	"""
	class Meta:
		model = Profile
		fields = ['image']
