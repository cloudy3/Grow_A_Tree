from django.db import models
from django.db.models import Count, Q
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import User
from PIL import Image

class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	image = models.ImageField(default='default.jpg', upload_to='profile_pics')

	def __str__(self):
		return f'{self.user.username} Profile'

	def save(self, *args, **kwargs):
		super().save(*args, **kwargs)

		img = Image.open(self.image.path)

		if img.height > 300 or img.width > 300:
			output_size = (300, 300)
			img.thumbnail(output_size)
			img.save(self.image.path)

class RecyclingDB(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	impact = models.PositiveSmallIntegerField(default=0)
	tree = models.PositiveSmallIntegerField(default=0)
	#metal = models.PositiveSmallIntegerField(default=0)
	#paper = models.PositiveSmallIntegerField(default=0)
	#plastic = models.PositiveSmallIntegerField(default=0)

	#def metal(self):
	#	return RecyclingEntry.objects.annotate(num_metal=Count(filter=Q(recyclingType="Metal")))

	def __str__(self):
		return f'{self.user.username} Recycling DB'


class RecyclingEntry(models.Model):
	user = models.ForeignKey(User, on_delete = models.CASCADE, null=True)
	recyclingdb = models.ForeignKey(RecyclingDB, on_delete = models.CASCADE, null=True)
	location = models.TextField(default = "City Hall")
	date = models.DateTimeField(default = timezone.now)
	recyclingType = models.TextField()
	recyclingWeight = models.PositiveSmallIntegerField()	
	
	def get_absolute_url(self):
		return reverse('database_home')
