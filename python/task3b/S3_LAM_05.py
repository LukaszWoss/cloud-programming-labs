# S3_LAM_05

def at_least(min_val):
    return lambda x: x >= min_val

nums = [10, 5, 20, 2]
filtered = list(filter(at_least(10), nums))
print(filtered)