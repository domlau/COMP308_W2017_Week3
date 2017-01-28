//server goes here
//import connect module and assign it as reference to connect variable
let connect = require('connect');
//instance of the connect server
let app = connect();
//declare port constant
const port = 2000;

//routing
//hello world route
app.use('/hello', (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    next();
});

//forward slash = root of folder
app.use('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome');
    next();
});




//listener for port]
app.listen(port);

console.log(`Server started at http:/localhost:${port}`);