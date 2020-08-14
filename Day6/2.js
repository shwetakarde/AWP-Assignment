
let count = 0;
function commenthere() {

    let comment = document.querySelector('#id2').value;

    let newelement = document.createElement('div');
    newelement.style.display = "flex";
    newelement.style.justifyContent = "space-between";
    newelement.style.marginBottom = "8px";


    let child1 = document.createElement('div');
    child1.textContent = comment;

    let child2 = document.createElement('button');
    child2.textContent = 'Delete';

    newelement.appendChild(child1);
    newelement.appendChild(child2);

    let parent = document.querySelector('#id4');
    parent.insertBefore(newelement, parent.firstChild);

    document.querySelector('#id2').value = ' ';

}

function likehere() {

    count++;
    let likebtn = document.querySelector('#id3');
    likebtn.innerHTML = 'Like ' + count;
}

