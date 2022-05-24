// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error. 

const nombrePizza = document.querySelector("#name");
const precioPizza = document.getElementById("price");
const buscar = document.getElementById("search");
const inputId = document.getElementById("id");


const listaPizzas = [
  {id:1, nombre:"Rucula", ingredientes: ["Rucula", "Panceta", "Reggianito"], precio:500},
  {id:2, nombre:"4 quesos", ingredientes: ["Roquefort", "Reggianito", "Provolone"], precio:600},
  {id:3, nombre:"Especial", ingredientes: ["Huevo", "Jamon", "Aceitunas"], precio:550},
  {id:4, nombre:"Palmitos", ingredientes: ["Palmitos", "Salsa golf"], precio:500},
  {id:5, nombre:"Anchoas", ingredientes: ["Anchoas", "Morron"], precio:650},
  {id:6, nombre:"Cebollada", ingredientes: ["Cebolla caramelizada", "Oregano"], precio:700}
];


const start = (e) => {
    const valorId = inputId.value;
    (e.target.id === "search") ? captureId(parseInt(valorId)) : null;
}

const messageError = (inputId) =>{
    precioPizza.textContent = '';
    precioPizza.classList.remove("price");
    nombrePizza.textContent = `No existe pizza con ID ${inputId} pruebe con otro`;
    nombrePizza.classList.add("error");

}

// Captura el Id ingresado
const captureId = (inputId) => {
    (validateId(inputId)) ? getObject(inputId) : messageError(inputId);
}

//Valida que el id coincida con el de la pizza
const validateId = (inputId) =>{
    return (inputId < 1 || inputId > listaPizzas.length) ? false : true;
}


// Corrobora el id del input con el de las pizzas
const getObject = (inputId) =>{
    listaPizzas.filter((pizza)=>{
        const {id, nombre, precio} = pizza;
        (inputId === id) ? writeHtml(nombre,precio) : messageError;
    });
}


const writeHtml = (nombre,precio) =>{
    nombrePizza.classList.remove("error");
    precioPizza.classList.add("price")
    precioPizza.textContent = precio;
    nombrePizza.textContent = nombre;
}






document.addEventListener("DOMContentLoaded", ()=> {
    document.addEventListener('click', start);
    console.log('DOM cargado');

});



