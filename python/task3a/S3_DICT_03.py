# S3_DICT_03

def pick(d, keys):
    return {k: d[k] for k in keys if k in d}

user = {"name": "Ali", "age": 30, "city": "NYC"}
print(pick(user, ["name", "city", "job"]))