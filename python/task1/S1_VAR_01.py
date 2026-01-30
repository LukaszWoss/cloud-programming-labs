# S1_VAR_01
# creating variables of different types
val_int = 10
val_float = 3.14
val_str = "hello"
val_bool = True
val_none = None
val_list = [1, 2]
val_tuple = (1, 2)
val_dict = {"a": 1}
val_set = {1, 2}
def my_func(): pass

all_vars = [
    ("int", val_int),
    ("float", val_float),
    ("str", val_str),
    ("bool", val_bool),
    ("none", val_none),
    ("list", val_list),
    ("tuple", val_tuple),
    ("dict", val_dict),
    ("set", val_set),
    ("func", my_func)
]

print(f"{'NAME':<10} {'VALUE':<20} {'TYPE':<20}")
print("-" * 50)

for name, val in all_vars:
    t = type(val)
    t_name = t.__name__
    print(f"{name:<10} {str(val):<20} {t_name:<20}")