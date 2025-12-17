import fs from "fs/promises";
import { question, questionInt } from "readline-sync";

export async function searchPeopleByName() {
    const read = await fs.readFile("../DB/PEOPLE.json", "utf8", (err) => { })
    const data = await JSON.parse(read)
    const choice = question(`please enter a Name: `)
    const objPerson = data.filter(person => choice === person.name)    
    objPerson.length != 0 ? console.log(objPerson) : console.log(`The person was not found!`);
};
export async function searchPeopleByAge() {
    const read = await fs.readFile("../DB/PEOPLE.json", "utf8", (err) => { })
    const data = await JSON.parse(read)
    const choice = questionInt(`please enter a Age: `)
    const objPerson = data.filter(person => choice === person.age)    
    objPerson.length != 0 ? console.log(objPerson) : console.log(`The person was not found!`);
};