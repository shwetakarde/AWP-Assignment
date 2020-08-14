let count = 1;
let likecount = 0;


/*Create Element and apppend in commentbox id*/
function commenthere() {

    let newele = document.createElement('div');
    newele.textContent = 'Comment' + count;

    newele.style.backgroundColor = 'pink';
    newele.style.fontSize = '15px';
    newele.style.margin = '10px';

    let parent = document.querySelector('#commentbox');             //return commenbox id
    parent.appendChild(newele);

    count++;
}

function likehere() {

    likecount++;
    document.querySelector('#likeid').innerHTML = 'Like ' + likecount;

}
