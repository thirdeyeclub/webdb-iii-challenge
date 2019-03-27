const server = require('./server');
const name = 'Independence';
const PORT = process.env.PORT || 4444;
server.listen(PORT, () => {
console.log(`Welcome Home ${name}\n***SERVER UP ON ${PORT}***`)})