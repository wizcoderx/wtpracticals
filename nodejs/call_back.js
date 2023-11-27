function displayR(parameter) {
    console.log(parameter);
    }
    function cal(x,y, myCallback) {
    let sum = x +y;
    myCallback(sum);
    }
    cal(10,10,displayR)
//the below is callback function with a timeline

const message = function() {
    console.log("Hi , I am wizcoderX");
    };
    setTimeout(message,3000);
    setTimeout(() =>{
    console.log("Calling arrow function.");
    }, 5000 );