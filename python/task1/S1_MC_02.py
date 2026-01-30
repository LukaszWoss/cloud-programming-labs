# S1_MC_02

def run_command(cmd):
    match cmd:
        case "start": return "Starting system..."
        case "stop": return "Stopping system..."
        case "status": return "System OK"
        case _: return "UNKNOWN_COMMAND"

print(run_command("start"))
print(run_command("dance"))