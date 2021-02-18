'use strict';

document.addEventListener('DOMContentLoaded', function() {

    

    document.querySelector('form').onsubmit = () => {
    
        const edadPerruna = parseInt(document.querySelector('#edadPerruna').value);

        if (edadPerruna === 1) {
            
            let respuestaEdad = document.querySelector('#respuesta');
            let edadHumana = 15;
            respuestaEdad.innerHTML = `Con ${edadPerruna} año, la edad de tu perrete es de ${edadHumana} añazos humanos ¡feliz pubertad! <br>
            <img src="https://i1.wp.com/revista.weepec.com/wp-content/uploads/2017/01/perro-travieso.jpg">`;
            document.querySelector('body').append(respuestaEdad);

        } else if (edadPerruna === 2) {

            let respuestaEdad = document.querySelector('#respuesta');
            let edadHumana = 15 + 9;
            respuestaEdad.innerHTML = `Con ${edadPerruna} años, la edad de tu perrete es de ${edadHumana} añazos humanos`;
            document.querySelector('body').append(respuestaEdad);

        } else if (edadPerruna > 2 && 1 !== 0) {

            let respuestaEdad = document.querySelector('#respuesta');
            let edadHumana = ((edadPerruna - 2) * 5) + 15 + 9;
            respuestaEdad.innerHTML = `Con ${edadPerruna} años, la edad de tu perrete es de ${edadHumana} añazos humanos`;
            document.querySelector('body').append(respuestaEdad);
        } else {

            let respuestaEdad = document.querySelector('#respuesta');
            respuestaEdad.innerHTML = `Si tu perro tiene 0 añicos, tranqui, sigue siendo un bebé.
            <img src="https://i.pinimg.com/originals/d7/a8/6e/d7a86e23a3c41f0423f8783c30c42657.jpg">`;
            document.querySelector('body').append(respuestaEdad);
        }

        return false;
    }





});