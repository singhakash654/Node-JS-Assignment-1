
const fs = require('fs/promises')
// console.log("Hello");

const myFileWriter = async (fileName, fileContent) => {
	const data= await fs.writeFile(fileName, fileContent);
	
}

const myFileReader = async (fileName) => {
	const data= await fs.readFile(fileName, "utf-8");
	console.log(data);
	
}


const myFileUpdater = async (fileName, fileContent) => {
	const data= await fs.appendFile(fileName, fileContent);
	console.log(data);
	
}

const myFileDeleter = async (fileName) => {
	const data= await fs.unlink(fileName);
	
}


myFileWriter("file1.txt", "Hello");
myFileReader("file1.txt");
myFileUpdater("file1.txt", " World");
myFileDeleter("file1.txt");
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }