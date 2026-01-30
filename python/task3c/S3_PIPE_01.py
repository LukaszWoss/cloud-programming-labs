# S3_PIPE_01
from functools import reduce

def pipe(*fns):
    return lambda x: reduce(lambda v, f: f(v), fns, x)

def inc(x): return x + 1
def double(x): return x * 2

# (5 + 1) * 2 = 12
pipeline = pipe(inc, double)
print(pipeline(5))