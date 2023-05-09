"""
Challenge to read dates from command line and find the zodiac of those birthdays with Python.
For example, if I run the command $ python test.py 28-02-2016 29-02-2002, I should get
Your birthday is on 28/02/2016
Your Zodiac is Pisces

29-02-2002 is an invalid Date! Your birthday does not exist ;-;

Here you can see that people whose birthday is on 28th Feb are Pisces. The birthday 29th Feb 2002 can not exist hence it is considered an invalid date.
Rules:
 - The arguments are always in the string format: day-month-year where year is always 4 characters with first character between 1 and 9.
 - You don't have to print out word-to-word statements same as mine but you must print a valid birthday in format of date/month/year and must print the original string if it's invalid
 - If the date is invalid, DO NOT print the zodiac so be careful while coding
 - If their birthday is today, you must print Happy Birthday!

Here are some test cases
$ python test.py 28-02-2016 29-02-2002 10-11-1998 13-14-2020 31-11-2009 7-5-2023

Your birthday is on 28/02/2016
Your Zodiac is Pisces

29-02-2002 is an invalid Date! Your birthday does not exist ;-;

Your birthday is on 10/11/1998
Your Zodiac is Scorpio

13-14-2020 is an invalid Date! Your birthday does not exist ;-;

31-11-2009 is an invalid Date! Your birthday does not exist ;-;

Your birthday is on 07/05/2023
Your Zodiac is Tauros
Happy Birthday!

Bonus: You can also implement a way to read dates from the files (filename as the only argument here)
"""

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
