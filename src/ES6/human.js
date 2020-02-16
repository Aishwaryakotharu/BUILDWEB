//in es6 only classes were created
//no private,protected only public
//in es9 or 10 may have private

class Human {
  //static
  static someMethod() {
    console.log("it has nothing to do with the instance");
  }

  //constructor
  constructor(firstName, lastName) {
    this._firstName = firstName; //assume private
    this._lastName = lastName; //property
    this._spokenWords = [];
  }

  get name() {
    //method acting as a property
    return this._firstName + " " + this._lastName;
  }

  set name(humanName) {
    const [firstName = "", lastName = ""] = humanName.split(" ");
    this._firstName = firstName;
    this._lastName = lastName;
  }
  speakr(word) {
    this._spokenWords.push(word);
    console.log(word);
  }
}

const imran = new Human("md", "imran");
console.log(imran);
imran.speakr("hello");

imran.name = "Aishwarya Kotharu";
console.log(imran.name);

//static
Human.someMethod();
