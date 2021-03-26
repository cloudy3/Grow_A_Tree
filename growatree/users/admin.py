from django.contrib import admin
from .models import Profile, RecyclingDB, RecyclingEntry

class ProfileAdmin(admin.ModelAdmin):
	list_display = ('user', 'image')

class RecyclingDBAdmin(admin.ModelAdmin):
	list_display = ('user', 'impact', 'tree')

class RecyclingEntryAdmin(admin.ModelAdmin):
	list_display = ('user', 'recyclingdb', 'location', 'date', 'recyclingType', 'recyclingWeight')

admin.site.register(Profile, ProfileAdmin)
admin.site.register(RecyclingDB, RecyclingDBAdmin)
admin.site.register(RecyclingEntry, RecyclingEntryAdmin)

