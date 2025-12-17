import { questionInt } from "readline-sync";
import { getPeopleList, getCallRecords } from "./utils/getFromApi.js";
import { searchPeopleByName, searchPeopleByAge } from "./utils/search.js";

async function main() {
    let run = true
    while (run) {
        const choice = questionInt(` 1.Get People \n 2.Get Call Records \n 3.Search People by Name \n 4.Search People by Age \n 5.Exit \n choice: `)
        switch (choice) {
            case 1:
                await getPeopleList()
                break;
            case 2:
                await getCallRecords()
                break;
            case 3:
                await searchPeopleByName()
                break;
            case 4:
                await searchPeopleByAge()
                break;
            case 5:
                run = false
        };
    };
};
main()