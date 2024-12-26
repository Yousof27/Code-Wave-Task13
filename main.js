// Variables repeated in all tasks.
let form = document.forms[0];
let input1 = document.querySelector('input.input1');
let input2 = document.querySelector('input.input2');
let result = document.querySelector('p.result');

// Repeated in all tasks except the first one.
const isInputEmpty = (input) => {
    let value = input.value.trim();
    let notEmpty = true;
    if (value === '') {
        input.classList.add('wrong');
        notEmpty = false;
    } else input.classList.remove('wrong');
    return [value, notEmpty];
}

/*

Task 1
-------
Write a script to determine whether the entered string is palindrome or not.
Ask the user whether to consider case of the entered string or not, handle
both cases in your script i.e. RADAR NOON MOOM are palindrome.

Note: raDaR is not a palindrome if user requested considering case of entered string.

*/



// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let text = input1.value.trim();
//     let len = text.length;
//     let last = text.slice(Math.ceil(len / 2), len).split('').reverse().join('');
//     let isPal = last === text.slice(0, Math.floor(len / 2));
//     let span = `<span class='${isPal}'>${text}</span>`
//     let message = text === '' ?
//         "Enter The Text :(" :
//         `${isPal ? '✅ ' + span + ' Is' : '❌ ' + span + ' Is Not'} Palindrome`;
//     result.innerHTML = message;
// });






//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////








/*

Task 2
-------
write a script that accepts a string from user through prompt
and count the number of ‘e’ characters in it.

*/



// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let [text, valid1] = isInputEmpty(input1);
//     let [sub, valid2] = isInputEmpty(input2);

//     if (!(valid1 && valid2)) {
//         result.innerHTML = '';
//         return;
//     }

//     let count = 0;

//     for (let i = 0; i < text.length - sub.length + 1; i++) {
//         let sample = text.toLowerCase().slice(i, i + sub.length);
//         sub.toLowerCase() === sample ? count++ : null;
//     }

//     let span1 = `<span class='${count > 0}'>'${sub}'</span>`;
//     let span2 = `<span class='${count > 0}'>${count}</span>`;
//     let message = `${span1} repeted ${span2} Time${count > 1 ? 's' : ''}`;
//     result.innerHTML = message;
// });




//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////







/*

Task 3
-------
Write a script that reads from the user his info.
validates and displays it with a welcoming message.

*/




// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let [name1, valid1] = isInputEmpty(input1);
//     let [name2, valid2] = isInputEmpty(input2);

//     if (!(valid1 && valid2)) {
//         result.innerHTML = '';
//         return;
//     }

//     let span = `<span class="task3">${name1} ${name2}</span>`;
//     let message = `Welcome ${span} 😂`;
//     result.innerHTML = message;
// });








//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////







/*

Task 4
-------
Write a script that ask the user to Enter the value of a circle’s radius
in order to calculate its area.

*/




// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let [radius, valid] = isInputEmpty(input1);

//     if (!valid) {
//         result.innerHTML = '';
//         return;
//     }

//     let area = (Math.PI * (+radius) ** 2).toFixed(2);

//     let span = `<span class="${area > 0}">${area}</span>`;
//     let message = `The Circle Area = ${span}`;
//     result.innerHTML = message;
// });







//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////






/*

Task 5
-------
Enter another value to calculate its square root and alert the result.

*/



form.addEventListener('submit', (e) => {
    e.preventDefault();
    let [number, valid] = isInputEmpty(input1);

    if (!valid) {
        result.innerHTML = '';
        return;
    }

    let area = (Math.sqrt(+number)).toFixed(2);

    let span1 = `<span class="${area > 0}">${area}</span>`;
    let span2 = `<span class="${area > 0}">${number}</span>`;
    let message = `Square Root of ${span2} = ${span1}`;
    result.innerHTML = message;
});
