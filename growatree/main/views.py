from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect


def map(response):
    return render(response, "main/map.html", {})
    