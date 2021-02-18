'use strict';

document.querySelector('form').onsubmit = () => {
    document.querySelector('#nameForm').style.display = 'none';
    const nombre = document.querySelector('#name').value;

    document.querySelector('h1').innerHTML = "¡Hola " + nombre +"!";

    document.querySelector('h2').innerHTML = nombre + " te damos la bienvenida a  Preguntonapp."
    document.querySelector('#name').value = '';

    let longitud = document.createElement('p');
    longitud.innerHTML = `Tu nombre, "${nombre}" tiene una longitud de <strong>` + nombre.length + `  carácteres</strong>, nada más y nada menos. ¿Cómo te quedas?`;

    document.querySelector('body').append(longitud);

    const botonNext = document.createElement('button');
    botonNext.id = "next";
    botonNext.innerHTML = "Ya lo sabía";

    document.querySelector('body').appendChild(botonNext);

    document.querySelector('#next').onclick = function() {
        botonNext.style.display = 'none';
        const edadForm = document.createElement('form');
        document.querySelector('body').appendChild(edadForm);

        edadForm.innerHTML = `<label for="edad">Ok ${nombre} ¿Qué edad tienes?</label> <br>
        <input type="number" id="edad"> <br>
        <button id="enviarEdad">Enviar</button>`;   
        

        document.querySelector('#enviarEdad').onclick = () => {
            document.querySelector('#enviarEdad').style.display = 'none';
            const edad = parseInt(document.querySelector('#edad').value);
            let edadFrase = document.createElement('p');

            edadFrase.innerHTML = `Vale, tienes ${edad} ¿quieres saber cuántas horas llevas vividas? <br>
            <button id="yes">Venga, va!</button> <button id="no"</button>Uff, mejor no</button>`;

            document.querySelector('body').append(edadFrase);

            document.querySelector('#yes').onclick = () => {
                document.querySelector('#yes').style.display = 'none;';
                document.querySelector('#no').style.display = 'none;';
                edadFrase.innerHTML = '';
                let horas = edad * 8760;
                let horasMsg = document.createElement('p');
                horasMsg.innerHTML = `Flipa conmigo, llevas vividas ${horas} horas, wow.`;
                document.querySelector('body').append(horasMsg);
            } 

            document.querySelector('#no').onclick = () => {
                document.querySelector('body').innerHTML = '';
                let bye = document.createElement('p');
                bye.innerHTML = `Ok, taluego ${nombre}`;
                document.querySelector('body').append(bye);
            }


            return false;
        }
        
    }

    return false;
}



