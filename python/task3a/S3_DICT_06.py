# S3_DICT_06

def group_by(items, key):
    result = {}
    for item in items:
        val = item.get(key)
        if val not in result:
            result[val] = []
        result[val].append(item)
    return result

data = [{"id": 1, "role": "admin"}, {"id": 2, "role": "user"}, {"id": 3, "role": "admin"}]
print(group_by(data, "role"))