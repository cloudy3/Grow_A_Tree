# Grow A Tree

## Installing dependencies
- Please type this into your terminal in your IDE before starting
`pip install django-crispy-forms`
`pip install djangorestframework`
`pip install djangorestframework-gis`

## Make Migrations
- Make Migrations only on first run, and every time the models.py is edited. Else don't have to migrate.
- This is to update the Database
`py manage.py makemigrations`
`py manage.py migrate`

## Running the server
- Runs the webpage on your local host. Click on the IP address on your terminal to open the webpage.
`py manage.py runserver`

## Superuser account (http://127.0.0.1:8000/admin/)
> Use this superuser account to log in.
- username: admin
- email: admin@example.com
- password: 123456
