# S3_DICT_02

def merge_defaults(defaults, overrides):
    # standard python merge (overrides win)
    return {**defaults, **overrides}

defs = {"theme": "dark", "notifications": True}
user = {"theme": "light"}

print(merge_defaults(defs, user))

# shallow merge means nested objects are not merged recursively, just replaced