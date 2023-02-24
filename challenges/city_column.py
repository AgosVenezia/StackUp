"""
The alliance sends out groups to carry out missions. Every group is given a positive number which tells them the location they have to go to. Imagine our world is like an excel sheet and every city is represented by a column. If the group is given number 2, they have to go to city 'B' . If they are given number 28, they have to go to city 'AB' . Write a function with python that helps the group decode the number to find the city they have to go. Here are some examples:
print(city_column(2)) # B
print(city_column(28)) # AB
"""

def city_column(number):
    """
    Converts a positive integer to its corresponding column name in an Excel sheet.

    Args:
        number: A positive integer representing the column number.

    Returns:
        A string representing the column name.
    """
    if number <= 0:
        raise ValueError("Number must be positive.")

    # Convert the number to base 26, using A=0, B=1, ..., Z=25.
    # Then convert each digit to its corresponding letter.
    column_name = ""
    while number > 0:
        digit = (number - 1) % 26  # Note that we subtract 1 to map A to 0, B to 1, etc.
        letter = chr(digit + ord("A"))
        column_name = letter + column_name
        number = (number - 1) // 26

    return column_name

# Examples:
print(city_column(2)) # B
print(city_column(28)) # AB

print(city_column(9)) # I
print(city_column(12)) # L
print(city_column(18)) # R