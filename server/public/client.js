console.log( 'js' );
function addSalary(){
    console.log( 'in addSalary' );
    let objectToSend ={
        firstName: document.getElementById( 'firstNameInput' ).value,
    }
    document.getElementById( 'firstNameInput' ).value ='';
    console.log( 'sending:',objectToSend );
    axios.post( '/salary', objectToSend ).then(function( response ){
        console.log( 'back from post:',  response);
        getSalary();
    })
}

function getSalary(){
    axios.get( '/salary' ).then( function (response ){
        console.log( response.data );
        const el = document.getElementById( 'salaryTable' );
        el.innerHTML='';
        for( let i=0; i<response.data.length; i++){
            const thisSalary = response.data[i];
            el.innerHTML += `<table>${thisSalary.firstName}: ${ thisSalary.lastName }, ${ thisSalary.id}  ${ thisSalary.title },  ${ thisSalary.annualSalary },</table>`
        }
    })
}

getSalary();