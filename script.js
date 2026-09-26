/* =========================
   CAMBIO DE PANTALLAS
========================= */

function cambiarPantalla(id) {

    document
        .querySelectorAll(".pantalla")
        .forEach(pantalla => {
            pantalla.classList.remove("activa");
        });

    document
        .getElementById(id)
        .classList.add("activa");
}


/* =========================
   CARGA INICIAL
========================= */

const progreso =
    document.getElementById("progreso");

const estado =
    document.getElementById("estado");

const comenzar =
    document.getElementById("comenzar");

let porcentaje = 0;

const carga = setInterval(() => {

    porcentaje += 2;

    progreso.style.width =
        porcentaje + "%";

    if (porcentaje < 30) {

        estado.textContent =
            "Preparando información...";

    } else if (porcentaje < 60) {

        estado.textContent =
            "Analizando información...";

    } else if (porcentaje < 90) {

        estado.textContent =
            "Verificando datos...";

    } else {

        estado.textContent =
            "Acceso autorizado.";

    }

    if (porcentaje >= 100) {

        clearInterval(carga);

        comenzar.classList.remove("oculto");

    }

}, 50);


/* =========================
   COMENZAR
========================= */

comenzar.addEventListener("click", () => {

    cambiarPantalla(
        "pantalla-identificacion"
    );

});


/* =========================
   CONTINUAR
========================= */

document
    .getElementById("continuar")
    .addEventListener("click", () => {

        cambiarPantalla(
            "pantalla-pistas"
        );

    });


/* =========================
   PISTAS
========================= */

let pistaActual = 1;

document
    .getElementById("pista1")
    .addEventListener("click", () => {

        const mensaje =
            document.getElementById(
                "mensaje-pista"
            );

        const boton =
            document.getElementById(
                "pista1"
            );

        if (pistaActual === 1) {

            mensaje.textContent =
                "Pista 01: Existe un lugar al que alguna vez quisimos ir... pero el tiempo nunca estuvo de nuestro lado.";

            pistaActual = 2;

            boton.textContent =
                "DESCUBRIR PISTA 02";

        }

        else if (pistaActual === 2) {

            mensaje.textContent =
                "Pista 02: Nosotros le pusimos un nombre a ese lugar... y probablemente sabes exactamente cuál es.";

            pistaActual = 3;

            boton.textContent =
                "DESCUBRIR PISTA 03";

        }

        else if (pistaActual === 3) {

            mensaje.textContent =
                "Pista 03: Dicen que las oportunidades llegan una vez... así que esta vez no quiero dejar pasar la nuestra.";

            boton.style.display =
                "none";

            document
                .getElementById(
                    "continuar-pistas"
                )
                .classList.remove("oculto");

        }

    });


/* =========================
   CONTINUAR PISTAS
========================= */

document
    .getElementById("continuar-pistas")
    .addEventListener("click", () => {

        cambiarPantalla(
            "pantalla-pregunta"
        );

    });


/* =========================
   RESPUESTA SÍ
========================= */

document
    .getElementById("si")
    .addEventListener("click", () => {

        cambiarPantalla(
            "pantalla-destino"
        );

    });


/* =========================
   SEGUNDA RESPUESTA
========================= */

document
    .getElementById("tambien")
    .addEventListener("click", () => {

        cambiarPantalla(
            "pantalla-destino"
        );

    });


/* =========================
   DESBLOQUEAR DESTINO
========================= */

document
    .getElementById("desbloquear")
    .addEventListener("click", () => {

        const boton =
            document.getElementById(
                "desbloquear"
            );

        boton.style.display =
            "none";

        const mensaje =
            document.createElement("p");

        mensaje.className =
            "mensaje-coordenadas";

        mensaje.textContent =
            "LOCALIZANDO DESTINO...";

        document
            .querySelector(
                "#pantalla-destino .contenido"
            )
            .appendChild(mensaje);

        setTimeout(() => {

            mensaje.textContent =
                "COORDENADAS ENCONTRADAS.";

        }, 1500);

        setTimeout(() => {

            mensaje.textContent =
                "DESTINO CONFIRMADO.";

        }, 3000);

        setTimeout(() => {

            cambiarPantalla(
                "pantalla-final"
            );

        }, 4500);

    });
