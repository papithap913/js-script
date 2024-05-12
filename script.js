
function simpleInterest(principle, time, rate) {
    const si = (principle * time * rate) / 100;
    return si;
  }
  
  const result = simpleInterest(1000, 1, 10);
  
  console.log(result);