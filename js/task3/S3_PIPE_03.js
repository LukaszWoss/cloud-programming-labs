// S3_PIPE_03

const normalize = str => {
    return str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " "); // multiple spaces to one
};

console.log(normalize("  HeLLo    WoRLD  "));