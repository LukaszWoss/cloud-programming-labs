# S1_VAR_10

def inspect(v):
    is_iter = False
    try:
        iter(v)
        is_iter = True
    except TypeError:
        is_iter = False

    return {
        "type_name": type(v).__name__,
        "is_none": v is None,
        "is_callable": callable(v),
        "is_iterable": is_iter,
        "truthy": bool(v)
    }

print(inspect(10))
print(inspect("abc"))
print(inspect(None))
print(inspect([1,2]))