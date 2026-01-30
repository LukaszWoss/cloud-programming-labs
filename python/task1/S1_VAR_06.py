# S1_VAR_06

def to_int_or_none(s):
    try:
        if s is None:
            return None
        return int(s)
    except ValueError:
        return None

print(to_int_or_none("12"))
print(to_int_or_none(" 12 "))
print(to_int_or_none("12x"))
print(to_int_or_none(""))
print(to_int_or_none(None))