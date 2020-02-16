const fileSystemWrite = text => {
  return new Promise((resolve, reject) => {
    console.log("file is being written");
    console.log(text);
    //undefined();

    //any exception will be automatically rjected ->invoking catch
    reject("failed");//manually call reject will also invoke catch
    resolve("sucess");
  });
};
fileSystemWrite("mytext")
  .then(status => {
    console.log(`file write operation :${status}!`);
  })
  .catch(error => {
    console.error("error operation ", error);
  });