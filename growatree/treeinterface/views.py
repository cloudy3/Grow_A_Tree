from django.shortcuts import render

# Create your views here.
def TreeInterface(request):
	return render(request, 'treeinterface/treeinterface.html')