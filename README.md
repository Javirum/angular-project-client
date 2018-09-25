# Project Name

Floight

## Descriptions

The website for travel lovers

## User Stories

List of user stories in order of priority/importance.

404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
500 - As a user I want to see a nice error page when the server messes up so that I know that is not my fault
homepage - As a user I want to be able to access the homepage so that I can see what the app is about and login and signup
sign up - As a user I want to sign up on the site so that I can search for places to go.
login - As a user I want to be able to log in on the site so that I can plan my vacations.
logout - As a user I want to be able to log out from the site so that I can make sure no one will access my account
events list - As a user I want to be able to see all the events available on the site so that I can choose where to go
event details - As a user I want to be able to view detailed information about the event so that I can make sure it matches my tastes
event booking - As a user I want to book the tickets and the flight for the event so that I can enjoy an unique experience while traveling.
profile - As a user I want a profile that allows me to store my upcoming events so that I can return to them whenever I want


## Backlog

List of other features outside of the MVPs scope

User:
Change password
Forgot your password?

Search:

Search concerts by genre, band, title, year etc.

User profile:
see my profile
upload my profile picture
see other users profile
list of concerts created by the user
list concerts the user favourited

Recommendation engine:
Suggest concerts you might like based on your favourites and profile

Spotify:
Connect with your spotify account to get recommendations based on your favourite bands, genres etc.


Payments:
Paywall certain sections of the site (eg. flights and tickets)

## Routes

GET / 

GET /auth/signup
GET /auth/login
POST auth/signup - POST Body: email, password
POST auth/login - POST Body: email, password
POST auth/logout - POST Body: nothing

GET /user/profile - View & edit profile
POST /user/profile - POST Body: email, password, avatar
POST /user/remove - Delete account

GET /events - Events listings
GET /events/city/:id - id is a listing id


## Models

User:
Username
Password
Location

Events:
Title
Location
Date

Flight:
Date
Price


## DEPLOY:
https://floight.herokuapp.com/
