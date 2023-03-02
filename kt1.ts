function readFromKeyBoard(message: string): void {
  console.log(`Read some from keyboard ${message}`)
};
function readFromFile(message: string): void {
  console.log(`Read some from file ${message}`)
};
function sendFromKeyBoard(): string {
  return "send some from keyboard"
};
function sendFromFile(): string {
  return "send some from file"
}
function recordFromKeyBoard(from, to) {
  let message = "";
  if (from == "file") {
    message = sendFromKeyBoard();
  }
  if (to == "terminal") {
    readFromKeyBoard(message)
  }
}
recordFromKeyBoard("file", "terminal")
function printFromCloud(from) {
  let message = ''
  if (from == "file") {
    readFromFile(message)
  } else if (from == "keyboard") {
    readFromKeyBoard(message)
  }
}
printFromCloud('file')
function recoordfromKeyBoard(from) {
  let message = ''
  if (from == "file") {
    message = sendFromFile()
  } else if (from == "keyboard") {
    message = sendFromKeyBoard()
  }
}
