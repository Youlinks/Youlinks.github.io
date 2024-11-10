<script>
  // Función para obtener los enlaces desde el Google Apps Script y agregarlos a la página
  function loadLinks() {
    var url = 'https://script.google.com/macros/s/AKfycbxBP7J3ZTPuL2Mk8FeUkAtnHKcGMZpA57TmvJNojEQNZXEVdnWqoPuXpbEcWW7wlpbD/exec'; // Reemplaza con tu URL del Apps Script
    fetch(url)
      .then(response => response.json())  // Suponiendo que tu Apps Script devuelve los datos en formato JSON
      .then(data => {
        var enlacesList = document.getElementById("enlaces-list");
        enlacesList.innerHTML = ''; // Limpiar enlaces anteriores
        data.forEach(function(enlace) {
          var enlaceDiv = document.createElement("li");
          enlaceDiv.classList.add("enlace-item");
          
          var enlaceHTML = '<h3><a href="' + enlace.url + '" target="_blank">' + enlace.titulo + '</a></h3>';
          enlaceHTML += '<p>' + enlace.descripcion + '</p>';
          enlaceDiv.innerHTML = enlaceHTML;
          
          enlacesList.appendChild(enlaceDiv);
        });
      })
      .catch(error => console.error('Error al cargar enlaces:', error));
  }

  // Llama a la función para cargar los enlaces cuando la página se carga
  window.onload = loadLinks;
</script>
