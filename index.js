// Add your code here
/*create a function called submitData. It has two args: a user's name and user's email.
Step1: write Post request using fetch()
Step2: if successful, recieve response Obj. Access response and parse body content with .json().
Step3: access new Obj to find new id and append to the DOM.
Step4: add a catch() to handle silent errors.
Step5: return fetch chain to ensure tests run correctly.*/

function submitData(name, email){
    const configurationObject = {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name, email})
    }
    
    return fetch("http://localhost:3000/users", configurationObject)
        .then((resp) => resp.json())
        .then((data) => {
            const body = document.querySelector("body");
            const p = document.createElement('p');
            p.textContent = JSON.stringify(data);
            body.appendChild(p)
        })
        .catch((error) => {
            alert('Error Occured');
            // const body = document.querySelector("body");
            // const p = document.createElement('p');
            p.textContent = error.message;
            body.appendChild(p) 
        })
}

