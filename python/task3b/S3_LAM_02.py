# S3_LAM_02

people = [{"name": "B", "age": 30}, {"name": "A", "age": 20}]

# sort by age
sorted_people = sorted(people, key=lambda p: p["age"])
print(sorted_people)