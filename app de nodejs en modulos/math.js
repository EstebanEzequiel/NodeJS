const math = {};

function add(n1, n2) 
{
    return n1 + n2;
}
function substract(n1, n2) 
{
    return n1 - n2;
}
function multiply(n1, n2)
{
    return n1 * n2;
}
function divide(n1, n2)
{
    if (n2 == 0) {
        console.log('No se puede dividir por 0')
    }else{
        return n1 / n2;
    }
}

// exports.add = add;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

// envio las funciones con exports, este exporta una propiedad de un objeto

math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;

// function hello(name) {
//     console.log('Hola ',name);
// }

module.exports = math;

// module.esports exporta objetos, funciones -hello-, variables, cualquier dato de javascript
