const initialMemoryUsage = process.memoryUsage();
const yourName = process.argv[2];
const environment = process.env;

for(let i =0;i<=10000;i++){

}
const currentMemoryUsage = process.memoryUsage();

console.log(`Hai, ${yourName}`);
console.log(`Mode env : ${environment}`);
console.log(`Memory usage: ${currentMemoryUsage} dari ${initialMemoryUsage}`);
