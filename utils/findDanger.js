import fs from "fs/promises";

const read = await fs.readFile("../DB/TRANSCRIPTIONS.json", "utf8", (err) => { })
const dataCalls = await JSON.parse(read)
dataCalls.forEach(call => {
    const sum = 0
    call.content.includes(`death` || `knife` || `bomb` || `attack`)
});
