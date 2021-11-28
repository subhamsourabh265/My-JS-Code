class Human {
    constructor() {
        this.gender = 'male';
    }

    showGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
     constructor() {
         super();
         this.name = 'myName';
     }

     showName() {
         console.log(this.name);
     }
 }