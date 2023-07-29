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
divImg.appendChild(tituloAgencia)
divContent.appendChild(form)

form.appendChild(tituloCiudad)
form.appendChild(divSelect)
form.appendChild(tituloNoche)
form.appendChild(inputNoche)
form.appendChild(tituloCoche)
form.appendChild(inputCoche)
form.appendChild(btn)
form.appendChild(tituloTotal)

btn.setAttribute = ('type', 'submit')
inputNoche.type = 'number'
inputCoche.type = 'number'

body.style = `min-width: 1000px;display:flex; flex-direction:column; align-items:center;background-image: url('img2.jpg');background-repeat:no-repeat;background-size:cover; background-position: center;`
divPrincipal.style = `display:flex;flex-direction:column; align-items:center;`
divImg.style = `text-align:center;width:900px;height:100px;margin-top:3%`
divContent.style = `display:flex; flex-direction:column; align-items:start;width:500px;height:430px;background-color:transparent;margin-top:1%`

tituloAgencia.innerText = `Agencia de viajes Morales S.L.`
tituloCiudad.innerText = `Ciudad - Destino`
tituloNoche.innerText = `Noches - Cuantas te hospedaras?`
tituloCoche.innerText = `Coches - numero de dias a alquilar`
btn.innerText = `Consultar`
tituloTotal.innerText = `Calcula tu viaje`

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
});


//Funcion 1
const calcularCoste = (vCiudad) => {

    let diasCoche = inputCoche.value;
    let nNoches = inputNoche.value;
    let city = vCiudad
    let descuentoViaje = city * 0.10


    //Funcion 2
    const costeHotel = () => {
        return nNoches * 140
    }
    let totalNoche = costeHotel()

    //funcion3
    const costeAvion = () => {
        if (nNoches >= 3) {
            return city - descuentoViaje
        } else {
            return city
        }
    }
    let totalViaje = costeAvion();

    //funcion 4
    const costeCoche = () => {
        let pagoDiario = 40 * diasCoche
        if (diasCoche >= 7) {
            return pagoDiario -= 50 * 1
        }
        else if (diasCoche >= 3 && diasCoche < 7) {
            return pagoDiario -= 20 * 1
        }
    }
    let totalCoche = costeCoche()
    let totalGastos = totalNoche + totalCoche + totalViaje

    console.log(totalNoche)
    console.log(totalCoche)
    console.log(totalViaje)
    tituloTotal.innerText = `Total a pagar ${totalGastos * 1} €`

}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    calcularCoste(optionValue)

})



//#endregion

//#region Debate en clase
 /* const costeHotel = (nNight) => {
 return nNight * 140;
};

console.log(costeHotel(5));

const costeAvion = (city, nNight) => {
    cityCoste = 0;
    switch (city) {
        case "Madrid":
        case "Barcelona":
            cityCoste = 90;
            break;
        case "Sevilla":
            cityCoste = 50;
            break;
        case "Valencia":
            cityCoste = 40;
            break;
    }

    if (nNight > 3) {
        cityCoste -= cityCoste * 0.1;
    }

    return cityCoste;
};

console.log(costeAvion("Valencia", 5));

const costeCoche = (rentalDays) => {
    let carRentalCoste = rentalDays * 40;

    if (rentalDays >= 3 && rentalDays < 7) {
        carRentalCoste -= 20;
    }

    if (rentalDays >= 7) {
        carRentalCoste -= 50;
    }
    return carRentalCoste;
};

console.log(costeCoche(5));

let totalCoste = 0;

const calcularCoste = (nNight, city, rentalDays) => {
    totalCoste =
        costeHotel(nNight) + costeAvion(city, nNight) + costeCoche(rentalDays);
    return totalCoste;
};

console.log(calcularCoste(5, "Valencia", 5));

objeto.addEvenListener("event", () => {
    h1.innerText = `Coste: ${calcularCoste(a, b, c)} €`;
});
 */
//#endregion
