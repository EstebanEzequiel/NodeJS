// const os = require('os');// este modulo nos permite trabajar con el sistema operativo.

// console.log(os.platform());
// console.log(os.release());
// console.log('total memory ',os.totalmem(),' bytes');
// console.log('free memory ',os.freemem(),' bytes');
// console.log(os.cpus());
// console.log('arch ',os.arch(),'bits');

const fs = require('fs');


//este codigo es asincrono, es decir que recibira todas las peticiones del usuario pero delegara los procesos, 
//como a la base de datos o al sistema operativo u otros , es decir que no sera el quien cumpla con todos los precesos.
//gracias al codigo asincrono node puede manejar multiples solicitudes de usuarios al mismo tiempo

fs.writeFile('./texto.txt','Ari te AMOOO', function(err){
    // callbacks es una funcion que se ejecutará cuando haya terminado el proceso anterior(creacion del archivo)
    if(err){
        console.log(err);
    }else{
        console.log('Archivo Creado');
    }
})

console.log('ultima linea terminada')

//como el codigo anterior es asincrono se creara el archivo y al terminar seguira con la funcion, pero a la vez seguira ejecutandose el codigo que sigue, mostrando el mensaje 'ultima linea terminada'.

//const result = fs.writeFile('','')//codigo bloqueante  

// ------------------------------------------------------------------

// const users = query('SELECT * FROM users')

// query('SELECT * FROM users', function(err, users){

//     if (err){
//         console.log(err)
//     }
//     if (users) {
//         //
//     }
// })

// fs.readFile('./texto.txt',function(err, data){

//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())

// })