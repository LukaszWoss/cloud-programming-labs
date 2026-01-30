# S3_LAM_06

def map_values(d, fn):
    return {k: fn(v) for k, v in d.items()}

prices = {"apple": 2, "orange": 3}
doubled = map_values(prices, lambda p: p * 2)
print(doubled)