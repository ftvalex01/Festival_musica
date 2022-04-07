document.addEventListener('DOMContentLoaded' ,function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria=document.querySelector('.galeria-imagenes');

    for(let i = 1 ; i <=12 ; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;
        galeria.appendChild(imagen)
        imagen.onclick = function(){
            mostrarImagen(i)
        }
        function mostrarImagen(id){
            const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria">
        `;
        //Crea el overlay con la imagen
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        overlay.onclick = function (){
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove()
        }
        //boton para cerrar foto
        const cerrarModal = document.createElement('P');
        cerrarModal.textContent = 'X';
        cerrarModal.onclick = function(){
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove()
        }
        
        cerrarModal.classList.add('btn-cerrar');

        overlay.appendChild(cerrarModal)
        //añadirlo al HTML
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');
    }
    }
}

