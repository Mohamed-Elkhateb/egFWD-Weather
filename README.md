# Weather-Journal App Project

## Overview
this app is to get and update async weather data from OpenWeatherMap website using zip code. 

## Instructions
just add a zip code to the input field and click on generate and the weather data will display,
to post a new weather data you should post on /weather rout using three inputs (
* emperature
* date
* userresponse
).
in x-www-urlencoded format 
Example : http://localhost:2021/weather

using this raw json object
[
    {
        "temperature": "50",
        "date": "01/10/2021",
        "userresponse": "testing my user input"
    }
]

if so the userresponse attribute will be added to the displayed data on screen.


