function mousehandle() {
    /*alert("hi");*/
    let ele = document.querySelector('body').children[0].children[0];

    console.log(ele);
    ele.style.color = 'Navy';
    ele.style.fontFamily = 'cursive';
    ele.style.backgroundColor = 'pink';
    ele.innerHTML = 'Marvelous';
}

function getback() {
    let ele = document.querySelector('body').children[0].children[0];

    console.log(ele);
    ele.style.color = 'white';
    ele.style.fontFamily = '';
    ele.style.backgroundColor = '';

    ele.innerHTML = 'Magic !!!!!!!!';

}