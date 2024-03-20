// Handle the load event 

window.addEventListener('load', init);
function init(){
    //Create an event listener that handles the form’s submission

    let form = document.getElementById("empForm");
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
         // Get the dom element
        let id = document.getElementById('id').value;
        let name = document.getElementById('name').value;
        let ext = document.getElementById('ext').value;
        let email = document.getElementById('email').value;
        let select = document.getElementById('select').value;
       console.log(`ID : ${id}`);
       console.log(`Name : ${name} `);
       console.log(`Ext : ${ext}`);
       console.log(`Email : ${email}`);
       console.log(`Department : ${select}`)
       
    })
    

}