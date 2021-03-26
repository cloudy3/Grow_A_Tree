from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class recyclingInfo(models.Model):
	recyclingType = models.TextField()
	recyclingWeight = models.FloatField()
	location = models.TextField()
	date = models.DateTimeField(default = timezone.now)
	badge = models.IntegerField()
	impact = models.IntegerField()
	tree = models.IntegerField()
	user = models.ForeignKey(User, on_delete = models.CASCADE)

	def __str__(self):
		return self.recyclingType 
