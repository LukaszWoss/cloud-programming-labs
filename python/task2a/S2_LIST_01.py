# S2_LIST_01

def clean_numbers(values):
    result = []
    for v in values:
        cleaned = v.strip()
        try:
            num = float(cleaned)
            result.append(num)
        except ValueError:
            continue # skip bad values
    return result

print(clean_numbers([" 1 ", "x", "2.5"]))