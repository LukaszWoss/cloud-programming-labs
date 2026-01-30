# S1_VAR_09

def add(a: int, b: int) -> int:
    return a + b

# calling with strings despite type hints saying int
result = add("hello", " world")
print(f"Result: {result}")

# comment: type hints are for tools/IDEs, python runtime ignores them