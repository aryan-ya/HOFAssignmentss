const delayInSeconds = 3; 
let timeLeft = delayInSeconds;

const intervalId = setInterval(() => {
  timeLeft--;
  console.log(`Generating random number in ${timeLeft} seconds...`);
  if (timeLeft === 0) {
    clearInterval(intervalId);
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Random number generated: ${randomNumber}`);
  }
}, 1000);