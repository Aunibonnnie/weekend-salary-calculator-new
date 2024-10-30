console.log( 'js' );
function addSalary(){
    console.log( 'in addSalary' );
    let objectToSend ={
        firstName: document.getElementById( 'firstNameInput' ).value,
        lastName: document.getElementById( 'lastNameInput' ).value,
        id: document.getElementById( 'idInput' ).value,
        title: document.getElementById( 'titleInput' ).value,
        annualSalary: document.getElementById( 'annualSalaryInput' ).value,
    }
    document.getElementById( 'firstNameInput' ).value ='';
    document.getElementById( 'lastNameInput' ).value ='';
    document.getElementById( 'idInput' ).value ='';
    document.getElementById( 'titleInput' ).value ='';
    document.getElementById( 'annualSalaryInput' ).value ='';
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
            el.innerHTML += `<table><tr><th><th><th><tr><td>${thisSalary.firstName}<td>${ thisSalary.lastName }<td> ${ thisSalary.id}  ${ thisSalary.title }  ${ thisSalary.annualSalary }</td></td></td></tr></th></th></th></tr></table>`
        }
    })
}

getSalary();

// <table><tr><th><tr><td>Salary</td></tr></th></tr></table>
/* <table><tr><th><th><th><tr><td><td><td><tr></tr>Salary</td></td></td></tr></th></th></th></tr></table> */