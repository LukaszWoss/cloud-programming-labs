# S1_VAR_04

a = [1, 2, 3]
b = [1, 2, 3]

print(f"a == b: {a == b}") # true, values are same
print(f"a is b: {a is b}") # false, different objects in memory

c = None
print(f"c is None: {c is None}") # correct check for None

# Use 'is' for identity (same object), '==' for equality (same value)