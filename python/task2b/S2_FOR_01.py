# S2_FOR_01

for i in range(1, 31):
    out = ""
    if i % 3 == 0: out += "Fizz"
    if i % 5 == 0: out += "Buzz"
    
    if out == "":
        print(i)
    else:
        print(out)