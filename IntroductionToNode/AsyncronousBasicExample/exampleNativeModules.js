const os = require('os');

console.clear();

console.log(os.freemem()); // Returns the amount of free system memory in bytes as an integer.
console.log(os.hostname()); // Returns the host name of the operating system as a string.
// console.log(os.networkInterfaces()); //containing network interfaces that have been assigned a network address
console.log(os.platform()); // Returns a string identifying the operating system platform.
console.log(os.uptime());
