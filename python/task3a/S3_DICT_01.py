# S3_DICT_01

def get_path(obj, path, fallback):
    keys = path.split(".")
    current = obj
    for k in keys:
        if isinstance(current, dict) and k in current:
            current = current[k]
        else:
            return fallback
    return current

data = {"a": {"b": {"c": 100}}}
print(get_path(data, "a.b.c", 0))
print(get_path(data, "a.x.y", 0))