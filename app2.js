/**
 * По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
 *
 */
const btn = document.querySelector('.change');

btn.addEventListener('click', e => {
    const text = document.querySelector('#btn-generate');

   alert(text.innerText);

   // console.dir(text);

});


/**
 *  При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

 */


btn.addEventListener('mouseout', e => {


    e.currentTarget.style.backgroundColor = "";

});


btn.addEventListener('mouseover', e => {


       e.currentTarget.style.backgroundColor = "green";



});




/**
 * При клике на текст Tag появляется tagName <strong id="tag">Tag:</strong>
 */
const tage = document.querySelector('#tag');



tage.addEventListener('click', e =>{


    const div = document.createElement('div');

    const textTag = document.querySelector('p');



    div.textContent = textTag.innerHTML;

    textTag.appendChild(div);



});


/**
 * При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
 *
 */

const item = document.querySelector('#btn-generate');


let x = 2;

item.addEventListener ('click', e =>{




    if (x <= 1000) {

    x++;

    const textUl = document.querySelector('ul');


    const li = document.createElement("li");

    textUl.appendChild(li);

    li.textContent = "Item " + x;


    // console.log(e);
    // console.log(textUl);
    // console.log(li);


}

});


