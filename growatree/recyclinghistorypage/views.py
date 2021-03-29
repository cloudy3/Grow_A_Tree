from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.shortcuts import render
from users.models import RecyclingEntry


def RecyclingHistory(request):
	"""
	Queries all the Recycling History and renders teh Recycling History Page
	"""
	context = {
		'database_info' : RecyclingEntry.objects.filter(user__username= request.user.username)
	}

	return render(request, 'recyclinghistorypage/recyclinghistorypage.html', context)

