# S3_DICT_05

def invert(d):
    result = {}
    for k, v in d.items():
        if v in result:
            # collision handling
            if not isinstance(result[v], list):
                result[v] = [result[v]]
            result[v].append(k)
        else:
            result[v] = k
    return result

print(invert({"a": 1, "b": 2, "c": 1}))