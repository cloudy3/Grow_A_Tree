from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class RecyclingInfo(models.Model):
	"""
	Stores all the Recycling Infomation to the Database
	"""
	recyclingType = models.TextField()
	recyclingWeight = models.FloatField()
	location = models.TextField()
	date = models.DateTimeField(default=timezone.now)
	impact = models.IntegerField(default=0)
	tree = models.IntegerField()
	user = models.ForeignKey(User, on_delete=models.CASCADE)

	def __str__(self):
		return self.recyclingType 
