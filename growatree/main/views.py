from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from onemapsg import OneMapClient


def home(response):
    return render(response, "main/home.html", {})


Client = OneMapClient("ENTER_EMAIL", "ENTER_PASSWORD")


def search(location_name):
    return Client.search(location_name)


def get_route(start_coordinates, end_coordinates, route_type):
    return Client.get_route(start_coordinates, end_coordinates, route_type)
    