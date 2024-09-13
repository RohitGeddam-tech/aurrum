
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



// validation

function validateName(element) {
  let inputValue = element.value;
  inputValue = inputValue.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
  element.value = inputValue;
}

function validateNumber(element) {
  let inputValue = element.value;
  inputValue = inputValue.replace(/[^0-9]/g, ''); // Allow only numbers
  if (inputValue.length > 10) {
    inputValue = inputValue.substring(0, 10); // Limit to 10 digits
  }
  element.value = inputValue;
}

function validateEmail(element) {

  let inputValue = element.value;
  
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

}


function handleSubmit(event) {
  event.preventDefault(); 
  const form = event.target; 
  const name = form.querySelector('.nameInput').value;
  const email = form.querySelector('.emailInput').value;
  const phone = form.querySelector('.numberInput').value;

  const isNameValid = checkName(form);
  const isNumberValid = checkNumber(form);
  const isEmailValid = checkEmail(form);

  if (!isNameValid || !isNumberValid || !isEmailValid) {
    alert('Please correct the errors before submitting the form.');
    return;
  }

  if (!name || !email || !phone) {
    alert('All fields are required!');
    return;
  }

  console.log("Form Data:", { name, email, phone });
  alert('Form submitted successfully!');

  event.target.reset();
}


function checkName(form) {
  const nameInput = form.querySelector('.nameInput');
  const nameLabel = form.querySelector('#span-name');
  const nameRegex = /^[a-zA-Z\s]{3,}$/;

  if (!nameRegex.test(nameInput.value)) {
    nameInput.classList.add("error");
    // nameLabel.classList.add("errorText");
    // nameLabel.textContent = "Invalid name. Minimum 3 characters required.";
    console.log("error at name");
    return false;
  } else {
    nameInput.classList.remove("error");
    // nameLabel.classList.remove("errorText");
    // nameLabel.textContent = ""; 
  }

  return true;
}

function checkNumber(form) {
  const numberInput = form.querySelector('.numberInput');
  const numberLabel = form.querySelector('#span-number');
  const numberRegex = /^[6-9]\d{9}$/;

  if (!numberRegex.test(numberInput.value)) {
    numberInput.classList.add("error");
    // numberLabel.classList.add("errorText");
    // numberLabel.textContent = "Invalid number. It must start with 6-9 and be 10 digits long.";
    console.log("error at number");
    return false;
  } else {
    numberInput.classList.remove("error");
    // numberLabel.classList.remove("errorText");
    // numberLabel.textContent = "";
  }

  return true;
}

function checkEmail(form) {
  const emailInput = form.querySelector('.emailInput');
  const emailLabel = form.querySelector('#span-email');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  if (emailInput.value === "") {
    return true; // Allow empty email
  } else if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("error");
    // emailLabel.classList.add("errorText");
    // emailLabel.textContent = "Please enter a valid Gmail address.";
    console.log("error at mail");
    
    return false;
  } else {
    emailInput.classList.remove("error");
    // emailLabel.classList.remove("errorText");
    // emailLabel.textContent = "";
  }

  return true;
}
