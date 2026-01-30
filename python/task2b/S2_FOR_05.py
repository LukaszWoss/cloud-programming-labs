# S2_FOR_05

for i in range(1, 11):
    row = ""
    for j in range(1, 11):
        val = i * j
        row += f"{val:4}" # align columns
    print(row)