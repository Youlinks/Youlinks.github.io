function toggleForm() {
  const form = document.getElementById('formulario');
  form.classList.toggle('open'); // Si está cerrado, lo abre, si está abierto lo cierra
}

function filterLinks() {
  const searchQuery = document.getElementById('search-bar').value.toLowerCase();
  const category = document.getElementById('category-filter').value;
  const links = document.querySelectorAll('#enlaces-list li');
  
  links.forEach(link => {
    const title = link.querySelector('h3').textContent.toLowerCase();
    const description = link.querySelector('p').textContent.toLowerCase();
    const categoryMatches = category ? link.classList.contains(category) : true;
    const searchMatches = title.includes(searchQuery) || description.includes(searchQuery);
    
    if (categoryMatches && searchMatches) {
      link.style.display = '';
    } else {
      link.style.display = 'none';
    }
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Ajuste de visibilidad del formulario
const toggleThemeButton = document.getElementById("toggle-theme");
toggleThemeButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});

// Mostrar la notificación (si es necesario)
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000); // Desaparece después de 3 segundos
}

