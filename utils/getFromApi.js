import fs from "fs";

export async function getPeopleList() {
    const res = await fetch(`https://spiestestserver-8l55.onrender.com/people`);
    const data = await res.text()
    fs.writeFile(`../DB/PEOPLE.json`, data, 'utf8', () => { })
};

export async function getCallRecords() {
    const res = await fetch(`https://spiestestserver-8l55.onrender.com/transcriptions`);
    const data = await res.text()
    fs.writeFile(`../DB/TRANSCRIPTIONS.json`, data, 'utf8', () => { })
};