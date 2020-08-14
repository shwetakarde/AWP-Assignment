function mousehandle() {
    /*alert("hi");*/
    let ele = document.querySelector('#id2');
    console.log(ele);
    ele.style.color = 'gold';
    ele.style.fontFamily = 'cursive';
    ele.style.backgroundColor = 'royalblue';
    ele.innerHTML = 'Marvelous';
}

function getback() {
    let ele = document.querySelector('#id2');
    console.log(ele);
    ele.style.color = 'white';
    ele.style.fontFamily = '';
    ele.style.backgroundColor = '';

    ele.innerHTML = 'Magic !!!!!!!!';

}