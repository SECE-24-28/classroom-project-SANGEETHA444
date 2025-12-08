console.log("One");
setTimeout(() => {
  console.log("Two");
  
},2000);
console.log("Three");
console.log("Four");
console.log("Five");
console.log("Process 1");
setTimeout(() => {
  console.log("Process 2");
  setTimeout(() => {
    console.log("Process 3");
  }, 2000);
}, 2000);