# Generated by Django 3.1.7 on 2021-04-03 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recyclinghistory', '0002_auto_20210403_1618'),
    ]

    operations = [
        migrations.AddField(
            model_name='recyclingentry',
            name='tree',
            field=models.IntegerField(default=0),
        ),
    ]