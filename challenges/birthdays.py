import sys
from datetime import datetime

# define the zodiac signs
zodiac_signs = {
    "Aries": [(3, 21), (4, 19)],
    "Taurus": [(4, 20), (5, 20)],
    "Gemini": [(5, 21), (6, 20)],
    "Cancer": [(6, 21), (7, 22)],
    "Leo": [(7, 23), (8, 22)],
    "Virgo": [(8, 23), (9, 22)],
    "Libra": [(9, 23), (10, 22)],
    "Scorpio": [(10, 23), (11, 21)],
    "Sagittarius": [(11, 22), (12, 21)],
    "Capricorn": [(12, 22), (1, 19)],
    "Aquarius": [(1, 20), (2, 18)],
    "Pisces": [(2, 19), (3, 20)],
}

# get the birthdays from the command line arguments
birthdays = sys.argv[1:]

# loop through the birthdays and find the zodiac sign
for birthday in birthdays:
    try:
        # convert the string to a datetime object
        date = datetime.strptime(birthday, "%d-%m-%Y")
        
        # check if it's the person's birthday today
        today = datetime.now().date()
        if date.date() == today:
            print("Happy Birthday!")
        
        # get the month and day of the date
        month = date.month
        day = date.day
        
        # find the zodiac sign for the date
        zodiac = ""
        for sign, (start, end) in zodiac_signs.items():
            if (month == start[0] and day >= start[1]) or (month == end[0] and day <= end[1]):
                zodiac = sign
                break
        
        # print the birthday and zodiac sign
        print(f"Your birthday is on {date.strftime('%d/%m/%Y')}")
        if zodiac:
            print(f"Your Zodiac is {zodiac}")
        
    except ValueError:
        print(f"{birthday} is an invalid Date! Your birthday does not exist ;-;")
