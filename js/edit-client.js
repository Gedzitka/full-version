export class EditClient {
  constructor() {
    this._editClient()
  }
    _editClient() {
   const clientForm = document.getElementById('client-form')
   console.log(clientForm);
   clientForm.addEventListener('submit', (e) => {
        e.preventDefault()
        ;
        const formData = new FormData(clientForm);
        console.log(formData);
        const data = JSON.stringify(Object.fromEntries(formData));
        console.log(data)
       
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
    )
    }
    }

    
    
 
 


   
//         fetch('http://localhost:8000/api/clients', {
//                 method: 'POST',
//                 body: data,
//                 headers: {
//                     'Content-Type': 'application/json'      
//                 }
//             })


        
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(error => console.error(error))
//     })

    
    

       
    
  
   
// }
// }

