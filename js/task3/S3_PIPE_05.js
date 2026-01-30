// S3_PIPE_05

const logs = [
    "INFO: user=100 login success",
    "ERROR: db connection failed",
    "INFO: user=101 logout"
];

const extractUserIds = lines => {
    return lines
        .filter(line => line.startsWith("INFO:"))
        .map(line => {
            const parts = line.split(" ");
            const userPart = parts.find(p => p.startsWith("user="));
            return userPart ? userPart.split("=")[1] : null;
        });
};

console.log(extractUserIds(logs));