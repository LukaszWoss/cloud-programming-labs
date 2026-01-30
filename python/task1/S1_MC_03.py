# S1_MC_03

def calc(a, op, b):
    match op:
        case "+": return a + b
        case "-": return a - b
        case "*": return a * b
        case "/":
            if b == 0: return None
            return a / b
        case _: return None

print(calc(10, "+", 2))
print(calc(10, "/", 0))