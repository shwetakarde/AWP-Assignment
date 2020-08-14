let count = 0;

function commenthere() {

    let comment = document.querySelector('#id3').value;            //fetch the comment from inputt box

    let newelement = document.createElement('div');            // create new div from comment

    newelement.style.backgroundColor = 'beige';
    newelement.style.marginBottom = '5px';
    newelement.style.marginTop = '5px';

    let par = document.querySelector('#parent');                    //div where comment will be added
    newelement.innerHTML = comment;                                  //assign comment from input box to comment div

    //par.appendChild(newelement);                              //Append comment at last
    par.insertBefore(newelement, par.firstChild);               //append comment before latest one

    document.querySelector('#id3').value = '  ';            //after click on comment , clean the input box 

}


function likehere() {
    count++;

    document.querySelector('#id2').innerHTML = 'Like' + count;

}
