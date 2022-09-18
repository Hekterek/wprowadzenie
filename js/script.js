'use strict';

// DOM
const btn = document .querySelector('header a');

const h1 = document.querySelector('header h1');

    let counter = 0;
 
btn.addEventListener ('click', () => {

    counter++;
    console.log(counter);

    if(counter % 2 === 0)
    { 
        h1.innerHTML = 'Salon samochodowy w Krakowie';
    }
    else 
    {
        h1.innerHTML = 'Zapraszamy do odwiedzin';
    }
    
})