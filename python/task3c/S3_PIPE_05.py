# S3_PIPE_05

def parse_logs(lines):
    ids = []
    for line in lines:
        if "INFO:" not in line:
            continue
            
        parts = line.split()
        for p in parts:
            if p.startswith("user="):
                try:
                    uid = int(p.split("=")[1])
                    ids.append(uid)
                except:
                    pass
    return ids

logs = [
    "INFO: user=100 login",
    "ERROR: fail",
    "INFO: user=101 logout"
]
print(parse_logs(logs))