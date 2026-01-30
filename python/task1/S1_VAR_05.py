# S1_VAR_05

def is_truthy(v):
    return bool(v)

tests = [0, 1, "", "0", [], [0], {}, None]

for t in tests:
    print(f"Value: {repr(t):<10} -> {is_truthy(t)}")