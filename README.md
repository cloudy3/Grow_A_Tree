# Grow A Tree :deciduous_tree:
A Django Project for our Software Engineering module.

---

* Uses the Google Maps Geolocation API to display the recycling locations on Google Maps. The location pins are loaded using kml data from data.gov.sg.
* User selects a pin to input a recycling entry
* A garden of trees will start to grow the more the user recycles
* User is able to view the recycling history

---

## Installing dependencies
- Please input this into your terminal in the project's root directory to install all dependencies<br>
`pip install -r requirements.txt`

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
