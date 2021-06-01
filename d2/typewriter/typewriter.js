const typewriter = (str) => {
  let time = 1000;
  for(let value of str){
    setTimeout(() => {
    process.stdout.write(value);
    },time)
    time += 300;
  }
  };

  const sentence = "Hello there from lighthouse labs";
  typewriter(sentence);
