const sentence = "hello there from lighthouse labs";

timeOut = sentence.length;
let time = 0
  for(const value of sentence){
    setTimeout(() => {
    process.stdout.write(value);
    time +=500;
    },timeOut);
  }
setTimeout(() => {
  console.log("");
}, 50 * timeOut);