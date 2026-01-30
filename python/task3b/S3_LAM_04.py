# S3_LAM_04
from functools import reduce

nums = [1, 2, 3, 4, 5, 6]

# sum of squares of even numbers
result = reduce(
    lambda a, b: a + b,
    map(lambda x: x**2, filter(lambda x: x % 2 == 0, nums))
)
print(result)