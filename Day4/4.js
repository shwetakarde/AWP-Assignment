//let count = 1;
function increment() {
    /* alert('Inc');*/
    // let num = document.querySelector('.main').children[0];
    //count = count + 1;

    //num.innerHTML = count;
    let cur_val = parseInt(document.querySelector('.main').children[0].innerHTML);
    let ele = document.querySelector('.main').children[0];
    console.log(cur_val);
    cur_val = cur_val + 1;
    ele.innerHTML = cur_val;

}

function decrement() {
    /* alert('decr');
    let num = document.querySelector('.main').children[0]
    count = count - 1;
    if (count < 0) {
        return;
    }
    num.innerHTML = count;*/
    let cur_val = parseInt(document.querySelector('.main').children[0].innerHTML);
    let ele = document.querySelector('.main').children[0];
    console.log(cur_val);
    cur_val = cur_val - 1;
    if (cur_val < 0) {
        return;
    }
    ele.innerHTML = cur_val;

}