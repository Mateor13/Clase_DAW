/* JS - Lado del Cliente
NODE + V8 = JS Lado del Servidor

Variables
Contenedir de Información

Tipos Simples*/
let data = 12           //entero
let data1 = 23.6        //float
let data2 = "hola"      //string
let data3 = '@'         //char
let data4 = false       //boolean
let data5 = undefined   //undefined
//Tipos Compuestos
let data6 =['hola',54,false] //array

let user = {
    name:"Mateo",       //objeto
    activo:true
}

/*No Usar var - hoisting :( 
let y const ;)
---------------------------------------

Strings - cadena de caracteres*/
let password = "Hola"

//Propiedades y Métodos
console.log(password.length);

//métodos
console.log(password.trim()) //trim -->eliminar espacios en blanco antes y después
console.log(password.includes('3')) //Devuelve true o false, si aparece el substring
console.log(password.toUpperCase()) // Devuelve un valor el mayusculas
console.log(password.toLocaleLowerCase()) // Devuelve un valor el minusculas

/*ES6 - nuevas características
Template Strings --> Mezcla texto con variables*/
console.log(`El password de Juan es: ${password}`);

//-------------------------------------

let gamPrice1 = "500.35"
let gamPrice2 = 500.35

// Casting - ES6
console.log(gamPrice1 + gamPrice2);
console.log(+gamPrice1 + gamPrice2);
/* Orden de operaciones ( * / + - ** () )

---------------------------------------*/

let userCardBalance = 500

let cardBalance = 1000

//ES6 Operador ternario

let result = cardBalance <= userCardBalance ? "Pay" : "Consuming"
console.log(result);

/*Valores verdaderos - truthy

Valores falsos - falsy*/
let email 
!email ? console.log("Provie an email") : console.log("Registre");

//Comparación estricta ===

let userID = 123

userID === 123 ? console.log("User found") : console.log("User does´t exist");

//-------------------------------------------------------------------

//Loops - bucles

const goals = ['Learn JS', "Play soccer", "Watching Netflix", "Enjoy the holiday"]

goals.forEach((goal)=>{
    console.log(goal);    
}) 
const newGoals = goals.map((goal)=>{goal.toUpperCase()})
//Summary
console.log(goals)
console.log(newGoals)

/*--------------------------------------------------------------------
(function(){
    console.log("Ejecución de una función");
})()*/

// Función Declarada
function getAvatar(){ //Siempre empieza con function
    console.log('/photo/user.png')
}
// Función Expresada
const connectionBDD = function(){ //Se define dentro de una variable
    console.log("Conexión exitosa")
}
connectionBDD()

//Argumentos
const validarEmailAndToken = function(email, token='555'){
    console.log(`El token es ${token} y su email es ${email}`);
}
validarEmailAndToken('juan@gmail.com')

//Retorno 
function tiposRetorno(){
    //lógica
    // return "Usuarios premium"
    // return 89
    // return true
    // return 88.5
    // return ['user1', 'user2']
    return {name:"Juan", id:854}
}
tiposRetorno()

//ES6
// ARROW FUNCTION
const connectionBBDMongo = () =>{
    console.log("Conexión exitosa")
}
connectionBBDMongo()

const registerUser = (email) => {console.log(`user ${email} registered`)}
const registerUser2 = email => console.log("user registered")
registerUser('pancho@gmail.com')

// -----------------------------------------------------------------------
//Objetos

const datosBananeritoGood = {
    name:"Bananerito",
    age: 1,
    address: {
        city: "Machala",
        telephone: 123
    },
    friends:['Rodrigo','Toreto'],
    status:true,
}
console.log(datosBananeritoGood.name)
console.log(datosBananeritoGood.friends)
console.log(datosBananeritoGood.status)

//ES6
//Desetructuración
const {name:nombre, friends, status:estado} = datosBananeritoGood
console.log(`${nombre} ${friends} ${estado}`)

//Propiedades 
// 
datosBananeritoGood.photo = 'banerito.png'
console.log(datosBananeritoGood)
//Eliminar un dato
delete datosBananeritoGood.age
console.log(datosBananeritoGood)
/* Value -> Devuelve un arreglo
Include -> Incluye ese termino
? tipo de if - "if" (si) - ":" (else)
*/
Object.values(datosBananeritoGood).includes("") ? console.log("Error") : console.log("OK")
datosBananeritoGood.hola = ""
Object.values(datosBananeritoGood).includes("") ? console.log("Error") : console.log("OK")

//Unir dos funciones - Operador Spread 
const lunch = {
    nameL: "Pollo Broaster",
    price:5
}
const drinks = {
    nameD: "Jugo de coco",
    sweet: false
}

const orderUser = {...lunch, ...drinks}
console.log(orderUser)

//ES6
// Nombres abreviados de propiedades
const nameVideoGame = "Mario Kart"
const priceVideoGame = 89 + 11
const VideoGame = {
    nameVideoGame, //Si se tiene una clavve y un valor con el mismo nombre solo se pone una vez
    priceVideoGame: priceVideoGame //Muestra anterior
}
console.log(VideoGame)



