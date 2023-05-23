document.querySelector('ul').addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentNode.remove();
    }
});
listArr = JSON.parse(localStorage.getItem('items'));
console.log(listArr[0]);

document.getElementById('addNewTextBox')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            document.querySelector('form').submit();
        }
    });

window.onload = function() {
    JSON.parse(localStorage.getItem('items') || '[]').forEach(addItem);
}

function addItem(item) {
    let container = document.querySelector('ul');
    container.innerHTML += `<li>${item} <img src="./trash.png" id="trash"></li>`;
}

function saveItem(item) {
    var items = JSON.parse(localStorage.getItem('items') || '[]');
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
}

function postItem() {
    var item = document.getElementById('addNewTextBox').value.trim();
    
    if (item.length > 0) {
        addItem(item);
        saveItem(item);
    }

    document.getElementById('addNewTextBox').value = '';
}

function clearTasks() {
    localStorage.clear();
    location.reload();
}

/*function addToComplete(completed) {
    let newli = document.createElement('li');
    newli.innerHTML = `${completed} <img src="./trash.png" id="trash">`;
    document.querySelectorAll('ul')[1].appendChild(newli);
}*/