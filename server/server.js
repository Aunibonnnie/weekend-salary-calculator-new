// requirements for server to work
const express = require( 'express' );
const app = express();
app.use( express.json() );
app.use( express.urlencoded( { extended: true} ) );
// tell the server to receive your public files (index.html and client.js)
app.use( express.static( 'server/public' ) );
// globals
let salary = [ {firstName: '', lastName: '', id: '', title: '', annualSalary: '' } ];
const port = 5001;
// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port ); 
})
// routes
app.get( '/salary', (req, res)=>{
    console.log( '/salary GET' );
    res.send( salary );
})
// create new pet
app.post( '/salary', (req, res)=>{
    console.log( '/salary POST:', req.body );
    salary.push( req.body );
    res.sendStatus( 201 );
})