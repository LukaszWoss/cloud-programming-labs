# S2_LIST_06

def process_users(users):
    # filter active, map to name upper, sort
    names = [u["name"].upper() for u in users if u["active"]]
    return sorted(names)

data = [
    {"id": 1, "name": "Bob", "active": True},
    {"id": 2, "name": "Alice", "active": True},
    {"id": 3, "name": "John", "active": False}
]
print(process_users(data))