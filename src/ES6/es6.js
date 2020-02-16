const marks = [20, 50, 60, 20];

const increasedMarks = marks.map(mark => {
  return mark + 5;
});
console.log("increased marks ", increasedMarks);

//simplified   MAP es6
const simplifiedIncrease = marks.map(mark => mark + 5);

//filtering es5
const filteredMarks = marks.map(mark => {
  if (mark > 30) {
    return true;
  }
  return false;
});

//es6 FILTER
const simplifiedFilter = marks.filter(mark => mark > 30);

console.log("filtered marks", simplifiedFilter);

//find es5
/* 
const findMark=marks.find((mark)=>{
if (mark === 22){
return true;
}
return false;
});
console.log("found marks",findMark);
*/

//ES6

const simplifiedFind = marks.find(mark => mark === 20);

console.log("found mark", simplifiedFind);

//reduce es5
const reducer = (accumulator, mark) => {
  return accumulator + mark;
};
const totalMarks = marks.reduce(reducer, 0);

//es6
//const simplifiedTotal = marks.reduce((acc, mark) => acc + mark, 0);

//console.log(`total marks ${simplifiedTotal}`);

console.log(`total marks ${marks.reduce((acc, mark) => acc + mark, 0)} `);

const myHtmlGenerator = text =>
  "\
<div>\
  <p>\
  <span>i</span>" + text + "\n" + "\
</p>\
</div>";

const myTemplateHtml = text => `
<div>
<p>
<span>i</span>
${text}
</p>
</div>
`;

console.log("normal string", myHtmlGenerator("hello world"));
console.log("template string ", myTemplateHtml("hello world"));

//destructuring

const [
  english = 30,
  tamil = 30,
  maths = 30,
  science = 30,
  physics = 30
] = marks;

console.log(english, tamil, maths, science, physics);

//objects
const myObject = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5
};

//destrucuring object
const {
  one,
  two,
  three,
  ...otherProps //spread operator
} = myObject;

console.log(one, two, three, otherProps);

//enhanced object lietrals
console.log({ one: one, two: two, three: three });
console.log({ one, two, three });

//block scoped function variables

function uselessFunction() {
  var myVariable = "hi";
}

if (true) {
  //block
  var myVariable = "hi var";

  let mySecondVariable = "hi let";

  const myThirdVariable = "hi const";
}
console.log(myVariable);
//console.log(mySecondVariable); bcz error
//console.log(myThirdVariable); bcz error

//CLASS
