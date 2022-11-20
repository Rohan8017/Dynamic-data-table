const getName = document.getElementById('name');
const getEmail = document.getElementById('email');
const getContact = document.getElementById('contact');
const addBtn = document.getElementById('add-row');
const data = document.getElementById('data-div');
const inputArea = document.getElementById('input-area');
const msg = document.getElementById('message');

addBtn.addEventListener('click',()=>{
    addItem();
})

function addItem(){

    if(getName.value == "" || getEmail.value == "" || getContact.value == ""){
        alert('Please Fill The blanks');
        msg.innerText = 'Please Fill All The Blanks';
        return;
    }

    const divParent = document.createElement('div');
    const nameChild = document.createElement('p');
    const emailChild = document.createElement('p');
    const contactChild = document.createElement('p');
    const btnChild = document.createElement('button');
    divParent.className = 'data-output';
    nameChild.innerText = getName.value;
    nameChild.className = 'name-data-output';
    emailChild.innerText = getEmail.value;
    emailChild.className = 'email-data-output';
    contactChild.innerText = getContact.value;
    contactChild.className = 'contact-data-output';
    btnChild.innerText = 'Remove';
    btnChild.className = 'remove-btn';
    btnChild.addEventListener('click',()=>{
        divParent.remove();
    })
    divParent.appendChild(nameChild);
    divParent.appendChild(emailChild);
    divParent.appendChild(contactChild);
    divParent.appendChild(btnChild);
    data.appendChild(divParent);
}