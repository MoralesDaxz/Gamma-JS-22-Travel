//#region ---- Estructura
const body = document.querySelector('body')

const divPrincipal = document.createElement('div')
const divImg = document.createElement('div')

const divContent = document.createElement('div')
const form = document.createElement('form')
const tituloAgencia = document.createElement('h1')
const tituloCiudad = document.createElement('h3')
const divSelect = document.createElement('div')
const tituloNoche = document.createElement('h3')
const inputNoche = document.createElement('input')
const tituloCoche = document.createElement('h3')
const inputCoche = document.createElement('input')
const tituloTotal = document.createElement('h2')
const btn = document.createElement('button')

divPrincipal.id = 'divPrincipal'
divImg.id = 'divImg'
divContent.id = 'divContent'
form.id = 'form'
tituloAgencia.id = 'tituloAgencia'
tituloCiudad.id = 'tituloCiudad'
divSelect.id = 'divSelect'
tituloNoche.id = 'tituloNoche'
inputNoche.id = 'inputNoche'
tituloCoche.id = 'tituloCoche'
inputCoche.id = 'inputCoche'
tituloTotal.id = 'tituloTotal'
btn.id = 'btn'



body.appendChild(divPrincipal)
divPrincipal.appendChild(divImg)
divPrincipal.appendChild(divContent)
divContent.appendChild(form)
form.appendChild(tituloAgencia)
form.appendChild(tituloCiudad)
form.appendChild(divSelect)
form.appendChild(tituloNoche)
form.appendChild(inputNoche)//
form.appendChild(tituloCoche)
form.appendChild(inputCoche)//
form.appendChild(btn)
form.appendChild(tituloTotal)

btn.setAttribute = ('type', 'submit')
inputNoche.type = 'number'
inputCoche.type = 'number'


body.style = `display:flex; flex-direction:column; align-items:center;background-color:black;`
divPrincipal.style = `display:flex;flex-direction:column; align-items:center;`
divImg.style = `width:900px;height:120px; background-color:#3A4E48;margin-top:2%`
divContent.style = `display:flex; flex-direction:column; align-items:start;width:500px;height:430px;background-color:#6A7B76;margin-top:1%`

tituloAgencia.innerText = `Agencia de viajes Morales S.L.`
tituloCiudad.innerText = `Ciudad - Destino`
tituloNoche.innerText = `Noches - Cuantas te hospedaras?`
tituloCoche.innerText = `Coches - numero de dias a alquilar`
btn.innerText = `Consultar`
tituloTotal.innerText = `Total a pagar  €`


//#endregion
//#region ---- Funcionalidad

let options = [
    { value: 90, text: "Barcelona" },
    { value: 90, text: "Madrid" },
    { value: 50, text: "Sevilla" },
    { value: 40, text: "Valencia" },

];

function createSelect(optionsList) {
    let select = document.createElement("select");

    for (let i = 0; i < optionsList.length; i++) {
        const element = optionsList[i];
        let option = document.createElement("option");
        option.setAttribute("value", element.value);
        option.innerText = element.text;
        select.appendChild(option);
    }
    return select;
}
let select = createSelect(options) //sera igual a retorno de funcion
select.id = 'select'
divSelect.appendChild(select) //Contenedor de select


let optionValue = 90
//Evento para retornar valor de select -> option
select.addEventListener('change', () => {
    optionValue = document.querySelector('select').value
    calcularCoste(optionValue)
});


    //Funcion 1
    const calcularCoste = (vCiudad,) => {
    let diasCoche = inputCoche.value;
    let nNoches = inputNoche.value ;    
    let city = vCiudad
    let alqCoche = 40;
    let valorNoche = 140;
    let descuentoViaje = city * 0.10
    let promocion = 0
    console.log(n);

    //Funcion 2
    const costeHotel = (n, vNoche) => {
        return vNoche * n
    }
    let totalNoche = costeHotel(nNoches, valorNoche)

    //funcion3
    const costeAvion = (valorDestino, noche) => {
        if (noche >= 3) {
            promocion = valorDestino - descuentoViaje
             valorDestino, descuentoViaje, promocion
        } else {

             valorDestino
        }
    }
    let totalViaje = costeAvion(city, nNoches, promocion);

    //funcion 4
    const costeCoche = (alquiler, dias) => {
        let pagoDiario = alquiler * dias
        if (dias >= 7) {
            pagoDiario -= 50
            return pagoDiario
        }
        else if (dias >= 3 && dias < 7) {
            pagoDiario -= 20
            return pagoDiario
        }
    }
    let totalCoche = costeCoche(alqCoche, diasCoche)
   /*  
   console.log(`----------FUERA----------`);
    console.log(`total x Noche`, totalNoche);
    console.log(`total  coche x dia 40 (>7 -50), (>3 <7 -20)`, totalCoche);
    console.log(`total x viaje`, totalViaje); 
    */

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(`-------DENTRO--------`);
        console.log(`total x Noche `+ totalNoche);
        console.log(`total  coche x dia 40 (>7 -50), (>3 <7 -20) `+ totalCoche);
        console.log(`total x viaje `+ totalViaje) 
        console.log(nNoches,valorNoche);
    })

        /* 
                if (nNoches > 3) {
                    console.log(`total por noche ${totalNoche}, total del Viaje con promocion del 10% ${descuentoViaje} en Avion ${totalViaje} ,total del coche ${totalCoche}`);
                } else { console.log(`total por noche ${totalNoche}, Total en Avion ${totalViaje} ,total del coche ${totalCoche}`); } */
    

}



//#endregion
