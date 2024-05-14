class Storage {
    #iteams;
    constructor(iteams){
        this.#iteams = iteams;
    }

    getItems(){
        return this.#iteams;
    }

    addItem(newItem){
        this.#iteams.push(newItem);
    }
    removeItem(itemToRemove){
        if (this.#iteams.includes(itemToRemove)){
            this.#iteams.splice(this.#iteams.indexOf(itemToRemove),1);
        } 
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
