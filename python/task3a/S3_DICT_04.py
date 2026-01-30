# S3_DICT_04

def omit(d, keys):
    return {k: v for k, v in d.items() if k not in keys}

user = {"name": "Ali", "age": 30, "city": "NYC"}
print(omit(user, ["age"]))