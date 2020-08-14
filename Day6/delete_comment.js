
let count = 0;
function commenthere() {

    let comment = document.querySelector('#id2').value;

    const newelement = document.querySelector('#referenceid').cloneNode(true);
    //  newelement.style.display = "flex";
    //newelement.style.justifyContent = "space-between";
    //newelement.style.marginBottom = "8px";
    newelement.removeAttribute('id');
    newelement.style.visibility = "visible";

    newelement.children[0].innerHTML = comment;

    let parent = document.querySelector('#id4');
    parent.insertBefore(newelement, parent.firstChild);

    document.querySelector('#id2').value = ' ';

}

function likehere() {

    count++;
    let likebtn = document.querySelector('#id3');
    likebtn.innerHTML = 'Like ' + count;
}

function deletehere(currelement) {
    currelement.parentElement.remove();

}