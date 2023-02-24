"""
The alliance sends out groups to carry out missions. However, every group has a spy and we need your help in finding that spy. In a group, two members are assigned same positive number that allows them to pair up 🤝  and verify each other. If a person is a spy, they don't have someone to pair with in that group and so the group will have an odd number of members. Write a function with python to find the fake number assigned to the spy. Here are some examples:
print(odd_one_out([5, 6, 7, 6, 5])) # 7
print(odd_one_out((3, 3, 7, 7, 8, 8, 1, 9, 1))) # 9

Every group has at least 3 members including the spy and always have odd number of members.
"""

def odd_one_out(numbers):
    """
    Finds the odd number out in a list of positive integers.

    Args:
        numbers: A list of positive integers.

    Returns:
        The integer that occurs an odd number of times in the list.
    """
    counts = {}
    for number in numbers:
        if number in counts:
            counts[number] += 1
        else:
            counts[number] = 1

    for number, count in counts.items():
        if count % 2 == 1:
            return number

print(odd_one_out([5, 6, 7, 6, 5])) # 7
print(odd_one_out((3, 3, 7, 7, 8, 8, 1, 9, 1))) # 9

print(odd_one_out((1, 2, 3, 4, 1, 2, 3))) # 4