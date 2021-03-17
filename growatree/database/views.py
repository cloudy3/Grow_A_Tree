from django.shortcuts import render
from django.http import HttpResponse
from .models import recyclingInfo

def home(request):
	info = {
		'title': 'Home',
		'recyclingInfo': recyclingInfo.objects.all()
	}
	return render(request, 'database/home.html', info)
