# S3_PIPE_04

def process_data(items):
    # generator pipeline
    for item in items:
        cleaned = item.strip()
        try:
            val = float(cleaned)
            yield val * 2
        except ValueError:
            continue

data = ["1", " 2 ", "bad", "3"]
# sum the generator directly
result = sum(process_data(data))
print(result) # 1->2, 2->4, 3->6. Sum = 12