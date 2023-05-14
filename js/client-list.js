
async function getUsers() {
    try {
      const response = await fetch('http://localhost:8000/api/clients');
      const data = await response.json();
      const clientData = document.getElementById("table");
      let table = ` <thead class="thead-light">
      <tr>
        <th scope="col">Jméno</th>
        <th scope="col">Bydliště</th>
        <th scope="col"></th>

      </tr>
    </thead>
    <tbody id="tbody" class="w-auto"> `;
      for (let i = 0; i < data.length; i++) {
        table += `
        

        <td data-label="Jméno a příjmeni"><a href="client-detail.html">${data[i].firstName} ${data[i].lastName}</a></td>
        <td data-label="telefon">${data[i].streetNumber}, ${data[i].posteNumber}, ${data[i].city}</td>
        <td data-label="button"><button type="button" class="mr-2 btn btn-danger">Odstranit</button><button type="button" class="  btn btn-warning">Editovat</button></td>
      </tr>

        `
      

    
     

      
      }
      table += `</tbody>
                  </table>`;
                  clientData.innerHTML = table;
      
    }

        

      
    catch (error) {
        console.log(error);
        }
    }
getUsers();

// async function deleteClient(id) {
//     try {
//       const response = await fetch(`http://localhost:8000/api/clients/${_id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

