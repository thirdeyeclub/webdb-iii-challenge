const server = require('./server');
const name = 'Independence';
const PORT = process.env.PORT || 4444;
server.listen(PORT, () => {
console.log(`Hello Welcome ${name}\n***SERVER UP ON ${PORT}***`)})