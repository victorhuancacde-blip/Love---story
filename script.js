// ==========================
// ELEMENTOS
// ==========================

const boton = document.getElementById("comenzar");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const musica = document.getElementById("musica");
const video = document.getElementById("video-fondo");

// ==========================
// COMENZAR EXPERIENCIA
// ==========================

boton.addEventListener("click", () => {

    // Ocultar bienvenida
    inicio.style.opacity = "0";

    setTimeout(() => {

        inicio.style.display = "none";

        contenido.style.display = "block";

        contenido.style.opacity = "0";

        setTimeout(() => {

            contenido.style.transition = "1.5s";
            contenido.style.opacity = "1";

        },100);

    },1000);

    // Música
    musica.volume = 0.35;

    musica.play().catch(()=>{});

    // Video

    video.play().catch(()=>{});

    // Mostrar carta

    mostrarCarta();

});

// ==========================
// EFECTO ESCRITURA
// ==========================

function mostrarCarta(){

    const parrafos=document.querySelectorAll("#carta p");

    parrafos.forEach((p,index)=>{

        p.style.opacity="0";
        p.style.transform="translateY(40px)";
        p.style.transition="1.5s";

        setTimeout(()=>{

            p.style.opacity="1";
            p.style.transform="translateY(0px)";

        },index*1800);

    });

}

// ==========================
// CORAZONES
// ==========================

setInterval(()=>{

    const corazon=document.createElement("div");

    corazon.innerHTML="❤";

    corazon.style.position="fixed";

    corazon.style.left=Math.random()*100+"vw";

    corazon.style.bottom="-50px";

    corazon.style.fontSize=(20+Math.random()*20)+"px";

    corazon.style.opacity=Math.random();

    corazon.style.color="#ff5f99";

    corazon.style.pointerEvents="none";

    corazon.style.transition="6s linear";

    document.body.appendChild(corazon);

    setTimeout(()=>{

        corazon.style.bottom="110vh";

        corazon.style.transform="rotate(360deg)";

    },100);

    setTimeout(()=>{

        corazon.remove();

    },6000);

},500);

// ==========================
// DESTELLOS
// ==========================

setInterval(()=>{

    const estrella=document.createElement("div");

    estrella.style.position="fixed";

    estrella.style.width="4px";

    estrella.style.height="4px";

    estrella.style.borderRadius="50%";

    estrella.style.background="white";

    estrella.style.left=Math.random()*100+"vw";

    estrella.style.top=Math.random()*100+"vh";

    estrella.style.opacity=Math.random();

    estrella.style.boxShadow="0 0 15px
