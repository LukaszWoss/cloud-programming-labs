# S2_FOR_04

def count_occurrences(values):
    counts = {}
    for v in values:
        if v in counts:
            counts[v] += 1
        else:
            counts[v] = 1
    return counts

print(count_occurrences(["apple", "banana", "apple"]))