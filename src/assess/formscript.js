document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
      
      // Obtener los valores del formulario
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('correo').value;
      const empaqueFavorito = document.getElementById('modo-aprendizaje').value;
      const comentario = document.getElementById('floatingTextarea').value;

      // Validaciones de los campos
      if (!nombre) {
        alert('El campo nombre es obligatorio.');
        return;
      }

      if (!email) {
        alert('El campo correo electrónico es obligatorio.');
        return;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('El correo electrónico no es válido.');
        return;
      }

      if (!empaqueFavorito) {
        alert('Seleccione una opción de: Elige tu empaque favorito.');
        return;
      }

      if (!comentario) {
        alert('El campo comentario es obligatorio.');
        return;
      }

      const datos = {
        nombre: nombre,
        email: email,
        modoAprendizaje: empaqueFavorito,
        comentario: comentario
      };

      // Enviar los datos a Firebase (POST)
      fetch('https://recursos-6f043-default-rtdb.firebaseio.com/Mods-Plattform.json', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('Respuesta del servidor:', data);
          alert('¡Tu reseña ha sido enviada correctamente!');
        })
        .catch(error => console.error('Error:', error));
    });
  });