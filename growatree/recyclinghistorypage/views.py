from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.shortcuts import render
from users.models import RecyclingEntry
from django.db.models import Sum


def RecyclingHistory(request):
	"""
	Queries all the Recycling Entires and renders the Recycling History Page
	"""
	context = {
		'database_info' : RecyclingEntry.objects.filter(user__username= request.user.username),
		'total_impact' : RecyclingEntry.objects.filter(user__username= request.user.username).aggregate(Sum('impact'))['impact__sum']
	}

	return render(request, 'recyclinghistorypage/recyclinghistorypage.html', context)
