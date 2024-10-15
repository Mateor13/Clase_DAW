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

const boys = ["Peter", "Juan", "Luisa", "Anahi", "Matheus"]

const costumers = [
    {
        name: "Luis",
        order: 45,
        place: "Floresta"
    },
    {
        name: "Janneth",
        order: 45,
        place: "Villaflora"
    },
    {
        name: "Luis",
        order: 45,
        place: "Floresta"
    },
]

boys.forEach((b,i)=>{console.log(`${i+1}.- ${b}`)})
costumers.forEach((c,i)=> console.log(`${i+1}.- 
    ${c.order}-
    ${c.name}`))

const services =[
    {
        name: "Basic",
        mount: 5,
        image: "photo/service1.png",
        details: ["Atención familiar", "Grupo social"]
    },
    {
        name: "Plus",
        mount: 25,
        image: "photo/service2.png",
        details: ["Atención diaria", "Seguro médicos"]
    }
]

const newService = services.map((s)=>{
    return {
        name: s.name,
        image: s.image
    }
})
console.log(newService);

const newService2 = services.map(s=>(
    {
        name: s.name,
        image: s.image
    }
))
console.log(newService2);

const equipments = ["Tubo de Oxigeno", "Camilla", "Termometros", "Medidores de P."]

//ES6
//Desestructuración
const [equipment1, equipment2, , equipment4] = equipments
console.log(equipment4)

const categories = ["Camas", "Balanceados", "Juguetes", "Accesorios", "Ropa"]

categories.length <= 5 ? console.log("Registrar categoria"): console.log("No se puede registrar")

categories.push("Medicamentos") //Agregar elemento al final
categories.unshift("Adopciones") //Agregar elemento al inicio

categories.pop() //Elimina el último elemento
categories.shift() //Elimina el primer elemento 
console.log(categories)

let resultCategorie = categories.find(c=>(c === "Camas"))
console.log(resultCategorie)
resultCategorie ? console.log("Mostrar subcategorías"): console.log("No existe esa categoría")

let resultCategorieFilter = categories.filter(c=>(c.startsWith('B')))
console.log(resultCategorieFilter)

//ES6 
const servicesCharge = ["Grúa", "Material", "Herramientas"] 
const servicesMachines = ["Volqueta", "Trailer", "Tractores", "Excavadora"]

// ...Rest (Agrupar) //Almacena todos los valores restantes
const [machine1, machine2, ...machines] = servicesMachines
console.log(machines)

// ...Spread (Expandir) //Une todos los elementos restantes
let allServices = []
allServices = [...servicesCharge, ...servicesMachines]
console.log(allServices)

/*--------------------------------------------------------------------------------------------
Intermedio

DOM - API PARA MANIPULAR LOS ELEMENTOS EN HTML
HTML - Se puede considerar como un leguaje de programación cuando ocupa un motor de plantillas*/

//Programación imperativa
// JS PURO - Vanilla-JS
//Programación

//Programación declarativa
//REACT

const hola = "" 