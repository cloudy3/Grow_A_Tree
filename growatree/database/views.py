from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import ListView, CreateView
from users.models import RecyclingEntry


class RecyclingListView(ListView):
	model = RecyclingEntry
	template_name = 'database/home.html' # app/model_viewtype.html
	context_object_name = 'RecyclingEntry' 
	ordering = ['-date']


class RecyclingCreateView(LoginRequiredMixin, CreateView):
	model = RecyclingEntry
	fields = ['recyclingType', 'recyclingWeight']

	def form_valid(self, form):
		form.instance.user = self.request.user
		return super().form_valid(form)
