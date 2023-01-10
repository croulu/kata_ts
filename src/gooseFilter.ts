
export function gooseFilter (birds:Array<string>) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    let filteredGeese:Array<string> = [];

    filteredGeese = birds.filter((element) => element !== "African");

    console.log(filteredGeese);

    return filteredGeese;
};
