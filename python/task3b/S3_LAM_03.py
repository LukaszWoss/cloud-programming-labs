# S3_LAM_03

def make_adder(x):
    return lambda y: x + y

add10 = make_adder(10)
print(add10(5))