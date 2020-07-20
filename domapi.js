let listItem = document.getElementById('listItem');
let addButton = document.querySelector('#listItem + input');
let ul = document.querySelector('ul');

addButton.onclick = (e) => {
    //prevent default behaviour of event handler
    e.preventDefault();
    let li = document.createElement('li');
    let delButton = document.createElement('button');

    let item = listItem.value;
    li.textContent = item;
    delButton.textContent = 'Got It!';

    li.appendChild(delButton);
    ul.appendChild(li);

    delButton.onclick = deleteIt;
};

function deleteIt(e) {
    alert('Are you Sure You Want To Delete?');
    let deleteItem = e.target.closest('li');
    deleteItem.remove();
}