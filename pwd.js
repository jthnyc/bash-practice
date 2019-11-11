process.stdout.write("prompt > ");

const pwd = process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    process.stdout.write(`Current directory: ${process.cwd()}`);
    process.stdout.write("\nprompt > ");
})

module.exports = pwd;