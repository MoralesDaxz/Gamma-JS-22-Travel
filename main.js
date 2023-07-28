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

divPrincipal.id='divPrincipal'
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
tituloTotal.id='tituloTotal'
btn.id='btn'

body.appendChild(divPrincipal)
divPrincipal.appendChild(divImg)
divPrincipal.appendChild(divContent)
divContent.appendChild(form)
form.appendChild(tituloAgencia)
form.appendChild(tituloCiudad)
form.appendChild(divSelect)
form.appendChild(tituloNoche)
form.appendChild(inputNoche)
form.appendChild(tituloCoche)
form.appendChild(inputCoche)
form.appendChild(btn)
form.appendChild(tituloTotal)

body.style = `display:flex; flex-direction:column; align-items:center;background-color:black;`
divPrincipal.style=`display:flex;flex-direction:column; align-items:center;`
divImg.style = `width:900px;height:150px; background-color:#3A4E48;margin-top:2%`
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
//Marcos ... hasta el conso.log(city)
let  select = createSelect(options) //sera igual a retorno de funcion
select.id='select'
divSelect.appendChild(select) //Contenedor de select

// let optionValue = 90 // Valor default 
let optionValue=90

//Evento para retornar valor de select -> option

city=select.addEventListener('change',()=>{
    optionValue = document.querySelector('select').value
 
    return optionValue
 })
console.log(city);







let nCoches = 4;
let nNoches = 2;
let nDias = 10;
let alqCoche = 40;
let diasCoche = 6
let valorNoche = 140;
let descuentoViaje = 90 * 0.10
console.log(descuentoViaje);
//Funcion 1
const calcularCoste = () => {

    //Funcion 2
    const costeHotel = (nNoches, valorNoche) => {
        let costeNoche = nNoches * valorNoche
        return costeNoche
    }
    let totalNoche = costeHotel(nNoches, valorNoche)

    //funcion3
    const costeAvion = (city, nNoches) => {
        let costeViaje = 90
        let promocion
        if (city === 'Barcelona' && nNoches > 3) {
            promocion = costeViaje - descuentoViaje
            return costeViaje, descuentoViaje, promocion
        } else {

            return costeViaje = 90
        }
    }
    let totalViaje = costeAvion(city, nDias);


    //funcion 4
    const costeCoche = (alqCoche, diasCoche) => {

        let pagoDiario = alqCoche * diasCoche

        if (diasCoche >= 7) {
            pagoDiario -= 50
            return pagoDiario
        }
        else {
            pagoDiario -= 20
            return pagoDiario
        }
    }
    let totalCoche = costeCoche(alqCoche, diasCoche)
    if (nNoches > 3) {
        console.log(`total por noche ${totalNoche}, total del Viaje con promocion del 10% ${descuentoViaje} en Avion ${totalViaje} ,total del coche ${totalCoche}`);
    } else { console.log(`total por noche ${totalNoche}, Total en Avion ${totalViaje} ,total del coche ${totalCoche}`); }


}
calcularCoste()
//#endregion
