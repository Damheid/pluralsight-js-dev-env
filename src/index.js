import './index.css'
<<<<<<< HEAD
import numeral from 'numeral';
import { getUsers } from './api/userApi'

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);
=======
//import numeral from 'numeral';
import {getUsers, deleteUser} from './api/userApi';

// const courseValue = numeral(1000).format('$0,0.00');
// console.log(`I would pay ${courseValue} for this awesome course!`);
>>>>>>> d4929640e75291f06bbdd159266179a496d20964

getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
<<<<<<< HEAD
    <td><a href="#" data-id="${user.id}" class="deleteuser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;
});
=======
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
>>>>>>> d4929640e75291f06bbdd159266179a496d20964
