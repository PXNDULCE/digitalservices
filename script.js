// Smooth scroll para los enlaces ancla
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = this.getAttribute('href');
    if(target.length>1){
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior:'smooth' });
      document.getElementById('mainNav').classList.remove('show'); // cerrar menú al hacer clic
    }
  });
});

// Actualizar año en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle menú
function toggleMenu() {
  var nav = document.getElementById('mainNav');
  nav.classList.toggle('show');
}

// Funciones de especificaciones
function showSpecs(model) {
  var modal = document.getElementById('specModal');
  var img = document.getElementById('specImg');
  var text = document.getElementById('specText');
  if(model === 'MP C3004') {
    img.src = 'imagenes/mpc3004.jpg';
    img.alt = 'Ricoh MP C3004 Especificaciones';
    text.innerHTML = `
      <h4>Ricoh MP C3004</h4>
      <ul>
        <li>Impresión color y blanco/negro</li>
        <li>Alto rendimiento</li>
        <li>Velocidad: 30 ppm</li>
        <li>Resolución: 1200x1200 dpi</li>
        <li>Conectividad: USB, Red</li>
        <li>Volumen mensual recomendado: Alto</li>
      </ul>
    `;
  } else if(model === 'MP C4501') {
    img.src = 'imagenes/MP_C4501_specs.jpg';
    img.alt = 'Ricoh MPC 4501 Especificaciones';
    text.innerHTML = `
      <h4>Ricoh MPC 4501</h4>
      <ul>
        <li>Impresión color y blanco/negro</li>
        <li>Velocidad: 45 ppm</li>
        <li>Resolución: 1200x1200 dpi</li>
        <li>Conectividad: USB, Red</li>
        <li>Volumen mensual recomendado: Muy alto</li>
      </ul>
    `;
  } else if(model === 'MP 5002') {
    img.src = 'imagenes/MP_5002_specs.jpg';
    img.alt = 'Ricoh MP 5002 Especificaciones';
    text.innerHTML = `
      <h4>Ricoh MP 5002</h4>
      <ul>
        <li>Impresión blanco/negro</li>
        <li>Velocidad: 50 ppm</li>
        <li>Resolución: 1200x1200 dpi</li>
        <li>Conectividad: USB, Red</li>
        <li>Ideal para oficinas de alto volumen</li>
      </ul>
    `;
  }
  modal.style.display = 'block';
}
function closeSpecs() {
  document.getElementById('specModal').style.display = 'none';
}
window.onclick = function(event) {
  var modal = document.getElementById('specModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
