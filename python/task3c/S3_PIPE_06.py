# S3_PIPE_06

def pipe_safe(*fns):
    def wrapper(x):
        val = x
        try:
            for f in fns:
                val = f(val)
            return {"ok": True, "value": val}
        except Exception as e:
            return {"ok": False, "error": str(e)}
    return wrapper

def safe_div(x):
    return 10 / x

pipeline = pipe_safe(lambda x: x - 2, safe_div)

print(pipeline(4)) # (4-2)=2 -> 10/2=5 -> OK
print(pipeline(2)) # (2-2)=0 -> div error -> Fail