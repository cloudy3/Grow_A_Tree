from django.shortcuts import render
from django.http import HttpResponse
from database.models import recyclingInfo
from django.http.response import JsonResponse
from django.shortcuts import render
# from .models import RecyclingInfo


recycling_info = [
{
	'index': '1',
	'date' : '20 Apr 2020',
	'location' : 'Woodlands Ave',
	'weight': '10kg',
	'waste_category': 'Plastic',
},
{
	'index': '2',
	'date' : '20 Jun 2020',
	'location' : 'Bukit Batok East',
	'weight': '5kg',
	'waste_category': 'Wood',
},
{
	'index': '3',
	'date' : '15 Apr 2020',
	'location' : 'Changi Airport',
	'weight': '7kg',
	'waste_category': 'Metal',
},]

def RecyclingHistory(request):
	context = {
		'recycling_info': recycling_info,
		'database_info' : recyclingInfo.objects.all()
	}
	return render(request, 'recyclinghistorypage/recyclinghistorypage.html', context)
