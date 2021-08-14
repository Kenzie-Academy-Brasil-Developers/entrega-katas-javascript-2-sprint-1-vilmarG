// comece a criar a sua função add na linha abaixo

function add(x, y){
return (x + y)
}


// descomente a linha seguinte para testar sua função
//console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){
    let x = 0
    for(let i = 0; i<b; i++)
       x += add(a, 0);
    return x;
  }
  multiply(8,12)
  

// descomente a linha seguinte para testar sua função
 //console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x,n){
    let t = 1;
    for(let i = 1; i<=n; i++)
      t *= multiply(x,x)/x;
    return t
  }
  power(3,4)
  

// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(a){
    let n = 1;
    for(let i = 1; i<=a; i++)
      n *= multiply(i, 1);
    return n;  
  }
  factorial(6)
  
// descomente a linha seguinte para testar sua função
//console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
