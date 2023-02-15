# Draw a triangle of height given by the user, but only outlined, not full. Example:
# Input: 6
# Output:
#     *
#    * *
#   *   *
#  *     *
# *       *
#***********

height = int(input("Enter the height of the triangle: "))

for i in range(height):
    if i == 0:
        print(" " * (height - 1) + "*")
    elif i == height - 1:
        print("*" * (2 * height - 1))
    else:
        print(" " * (height - i - 1) + "*" + " " * (2 * i - 1) + "*")