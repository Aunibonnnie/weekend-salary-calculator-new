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
    // monthlySalary = monthlySalary + Number (document.getElementById( 'annualSalaryInput' ).value);
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
        let annualSalary = 0;
        console.log( response.data );
        // const monthlySalary = document.getElementById( 'annualSalaryInput').value 
        const el = document.getElementById( 'salaryTable' );
        el.innerHTML='';
        for( let i=0; i<response.data.length; i++)
            {
            console.log(annualSalary);
            const thisSalary = response.data[i];
            annualSalary = annualSalary + Number(thisSalary.annualSalary)
            el.innerHTML += `<tr><td>${thisSalary.firstName}<td>${ thisSalary.lastName }<td>${ thisSalary.id}<td>${ thisSalary.title }<td>${ thisSalary.annualSalary }<td><input type="button" value="Delete" onclick="deleteRow(this)"></td></td></td></td></td></td></tr>`
        }

        console.log("Monthly Salary:", annualSalary);
        document.getElementById('monthlyIncome').innerHTML = "Total Monthly: " + turnNumberRed(annualSalary / 12);
    })
}

getSalary();

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }

  function turnNumberRed(annualSalary) {
    if (annualSalary > 20000) {
      return '<span style="color: red;">' + annualSalary + '</span>';
    } else {
      return annualSalary;
    }
  }
