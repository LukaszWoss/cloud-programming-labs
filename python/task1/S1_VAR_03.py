# S1_VAR_03

# list is mutable
lst = [1, 2, 3]
lst[0] = 99
print("List after mod:", lst)

# tuple is immutable
tup = (1, 2, 3)
try:
    tup[0] = 99
except TypeError as e:
    print("Error caught:", e)

# lists can be changed in place, tuples cannot (read-only)