const data = JSON.parse(localStorage.getItem('lista')) || [];

if (data.length > 0) {
	const Nuevo = CrearArticulo(data);
	
}

function CrearArticulo(data) {
	
	data.forEach((element) => {
        const articulo = document.createElement('div');
        articulo.setAttribute('id','articulo');
        const boton = document.createElement('button')
		for (const key in element) {
			const h2 = document.createElement('h2');
			if (key == 'titulo') {
				h2.textContent = element[key];
				articulo.appendChild(h2);
				console.log('paso1');
			} else if (key == 'descripcion') {
				const P = document.createElement('p');
				P.textContent = element[key];
				articulo.appendChild(P);
			} else if (key == 'precio') {
				const P2 = document.createElement('p');
				P2.textContent = element[key];
				articulo.appendChild(P2);
			}else if(key == 'puertas'){
                const icono1 = document.createElement('img');
                icono1.setAttribute('src', './image/icono-puerta.png');
                icono1.setAttribute('id', 'iconos');
                articulo.appendChild(icono1);
                const P3 = document.createElement('p');
                P3.textContent = element[key];
                articulo.appendChild(P3);     
            }else if(key == 'kms'){
                const icono1 = document.createElement('img');
                icono1.setAttribute('src', './image/icono-velocímetro.png');
                icono1.setAttribute('id', 'iconos');
                articulo.appendChild(icono1);
                const P4 = document.createElement('p');
                P4.textContent = element[key];
                articulo.appendChild(P4);     
            }else if(key == 'potencia'){
                const icono1 = document.createElement('img');
                icono1.setAttribute('src', './image/icons-motor.png');
                icono1.setAttribute('id', 'iconos');
                articulo.appendChild(icono1);
                const P5 = document.createElement('p');
                P5.textContent = element[key];
                articulo.appendChild(P5);     
            }                
            articulo.appendChild(boton); 
            boton.textContent = "Ver Vehiculo";           
            document.getElementById('divArticulo').appendChild(articulo);
		}
        
	});
	//return articulo;
}

//console.log(data);
// function handlerLoadArticulo() {
//     renderizarSeccion(crearTabla(Anuncios), document.getElementById("divTabla"));
//   }

//   function renderizarSecciona(seccion, contenedor) {
//     while (contenedor.hasChildNodes()) {
//       contenedor.removeChild(contenedor.firstChild);
//     }
//     if (Seccion) {
//       contenedor.appendChild(Seccion);
//     }
//   }
