
const cards = document.querySelectorAll('.amenities-img-card');

function removeActiveClasses() {
  cards.forEach(card => {
    card.classList.remove('active');
  });
}


cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    removeActiveClasses(); 
    card.classList.add('active'); 
  });
});

cards[0].classList.add('active');

const closeBtn = document.getElementById("close-button");
const backdrop = document.querySelector(".screen-backdrop");
const enquire = document.querySelector(".enquire-now");
const form = document.querySelector(".pop-up-form");

function togglePopup(show) {
  if (show) {
    backdrop.style.display = "block";
    form.style.display = "flex";
  } else {
    backdrop.style.display = "none";
    form.style.display = "none";
  }
}

enquire.addEventListener("click", () => togglePopup(true));

backdrop.addEventListener("click", () => togglePopup(false));
closeBtn.addEventListener("click", () => togglePopup(false));



const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {

  const collapseTarget = document.querySelector(button.getAttribute('data-bs-target'));
  
  collapseTarget.addEventListener('shown.bs.collapse', () => {
    const img = button.querySelector('img');
    img.src = 'assets/mobile assests/amenities/minus icon.png';  
  });

  collapseTarget.addEventListener('hidden.bs.collapse', () => {
    const img = button.querySelector('img');
    img.src = 'assets/mobile assests/amenities/plus icon.png';  
  });
});


// navbar
function closeNavbar() {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  }
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function () {
    if (window.innerWidth < 768) {
      closeNavbar();
    }
  });
});
