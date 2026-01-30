# S1_VAR_08

# huge integer
big_num = 10**100
print(f"Type: {type(big_num)}")
print(f"Digits: {len(str(big_num))}")

# huge float loses precision
big_float = float(big_num)
print(f"Float representation: {big_float}")
print("Precision lost in float representation")