const btn = document.querySelector('button');
const link = document.querySelector('a');



link.addEventListener("click", function (e) {
  e.preventDefault();  // метод позволяет при клике не перезагружать страницу (тоесть метот console.log(e) будет виден в консоле)
  console.log(e);

});


const container = document.querySelector('.container');


let min = 0;
let max = 10;


btn.addEventListener("click", e => {


    const div = document.createElement("div");
  div.textContent = Math.floor((min + max)*10000/2);
  container.appendChild(div);


  const nestedBtn = document.createElement("button");
   nestedBtn.textContent = 'button';
   div.appendChild(nestedBtn);

  nestedBtn.addEventListener('click', e=>{     //При клике на button будет появляться таргет в консоле
    console.dir(e.target);

     if(e.target.tagName === 'BUTTON') {     //действие после клика
       open('https://github.com/andreiesin96159');

     }


  });



});



const isEven = num => num % 2 === 0;
console.log(isEven());
// функция увеличивает полученное число num на 10
const increaseNum = num => num + 10;

const num = 6;

const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;

console.log (result);