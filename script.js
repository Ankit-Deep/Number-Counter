const main = document.querySelector('.main');
const minus = document.querySelector('#minus');
const refresh = document.querySelector('#refresh');
const add = document.querySelector('#add');
const counting = document.querySelector('.counting');
let count = counting.value;
let globalCount = count;
let length_ = count.length;

// console.log(count);

//refresh the value to 0 feature
refresh.addEventListener('click', (e) => {
    counting.value = 0;
    count = counting.value;
    // globalCount = count;
});

//adding numbers feature
add.addEventListener('click', (e) => {
    count = Number(count);
    
    function adding(num) {
        let addNum = num + 1;
        count = addNum;
        // console.log(addNum);
    }

    adding(count);
    counting.value = count;
    globalCount = counting.value;
    console.log('The length = ', length_);

});


//reducing the numbers feature
minus.addEventListener('click', () => {
    count = Number(count);

    function minus(num) {
        let minusNum = num - 1;
        count = minusNum;
        // console.log(minusNum);
    }

    minus(count);
    counting.value = count;
    globalCount = counting.value;
    console.log('The length = ', length_);

})


// console.log(globalCount);
// let length_ = globalCount.length;
console.log(length_);