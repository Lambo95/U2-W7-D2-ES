class Render {
  constructor() {
    this.arrayOfPerson = [];
  }

  //Devo iserire le persone in un array
  pushPerson() {
    let personAdd = new Person();
    this.arrayOfPerson.push(personAdd);
  }

  //2. metodo confronto tra le persone
  getConfronto() {
    for (const index of this.arrayOfPerson) {
      let person = arrayOfPerson[index];
      if (person.age[index] > person.age[index++]) {
        return this.name[index] + " è più vecchio di " + this.name[index++];
      }
    }
  }
}
