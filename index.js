let katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return (`Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
 if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

function currentLine(katzDeliLine) {
  let newLine = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    let i = 0;
    while (i < katzDeliLine.length) {
      newLine.push(` ${[i + 1]}. ${katzDeliLine[i]}`);
      i++;
    }
  }
  return (`The line is currently:${newLine}`);
}

let totalNumber = 0;

function redWheel() {
  totalNumber++;
  return totalNumber;
}