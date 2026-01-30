// S1_SW_02

function runCommand(cmd) {
    switch (cmd) {
        case "start":
            return "System starting...";
        case "stop":
            return "System stopped";
        case "status":
            return "All systems go";
        default:
            return "Unknown command";
    }
}

console.log(runCommand("start"));
console.log(runCommand("xyz"));