# S1_VAR_07
import math

nan1 = float("nan")

try:
    nan2 = 0.0 / 0.0
except ZeroDivisionError:
    nan2 = float("nan")

print(f"nan1: {nan1}, nan2: {nan2}")
print(f"nan1 == nan2: {nan1 == nan2}") # always False for NaNs
print(f"isnan(nan1): {math.isnan(nan1)}") # correct way to check