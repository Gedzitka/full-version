
export function postData(){
    fetch('http://localhost:8000/api/clients', {
             method: 'POST',
             body: data,
             headers: {
                 'Content-Type': 'application/json'      
             }
         })


     
         .then(response => response.json())
         .then(data => console.log(data))
         .catch(error => console.error(error))
 

}