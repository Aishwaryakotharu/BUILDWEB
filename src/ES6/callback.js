//complete es5 promise
//if else call back is there or not and it is function or not
//in es6 defualt argument only works from last in function

const fileSystemWrite = (text, completeCallback=()=>null) => {
  setTimeout(() => {
    console.log("file is being written");
    console.log(text);
    completeCallback("success");
  });
};

//call back hell
const textToWrite = "hello world!";

fileSystemWrite(textToWrite, status => {
  console.log(`file write operation :${status}!`);
  fileSystemWrite(textToWrite, status => {
    console.log(`file write operation :${status}!`);
    fileSystemWrite(textToWrite, status => {
      console.log(`file write operation :${status}!`);
    
    });
  });
});