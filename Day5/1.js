function mousehandle() {
    /*alert("hi");*/
    let ele = document.querySelectorAll('div')[1];
    console.log(ele);
    ele.style.color = 'green';
    ele.style.fontFamily = 'cursive';
    ele.style.backgroundColor = 'pink';
    ele.innerHTML = 'Marvelous';
}

function getback() {
    let ele = document.querySelectorAll('div')[1];
    console.log(ele);
    ele.style.color = 'white';
    ele.style.fontFamily = '';
    ele.style.backgroundColor = '';

    ele.innerHTML = 'Magic !!!!!!!!';

}