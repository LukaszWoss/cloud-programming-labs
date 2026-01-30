# S3_PIPE_02
from functools import reduce

def compose(*fns):
    # apply right to left
    return lambda x: reduce(lambda v, f: f(v), reversed(fns), x)

def inc(x): return x + 1
def double(x): return x * 2

# 5 * 2 + 1 = 11
pipeline = compose(inc, double)
print(pipeline(5))