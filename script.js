
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

function validateName() {
  var inputElement = document.getElementById('nameInput');
  var inputValue = inputElement.value;
  inputValue = inputValue.replace(/[^a-zA-Z\s]/g, '');
  inputElement.value = inputValue;
}


function validateNumber() {
  var inputElement = document.getElementById('numberInput');
  var inputValue = inputElement.value;
  inputValue = inputValue.replace(/[^0-9]/g, '');
  if (inputValue.length > 10) {
    inputValue = inputValue.substring(0, 10);
  }
  inputElement.value = inputValue;
}

function validateEmail() {
  var inputElement = document.getElementById('emailInput');
  var inputValue = inputElement.value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(inputValue)) {
    inputElement.value = '';
  }
}


// form submit 
const form1 = document.getElementById('idForm');
form1.addEventListener('submit', function (event) {
  event.preventDefault();
  if (checkName(form1) && checkNumber(form1)  && checkEmail(form1)) {
    const name = form1.querySelector('#nameInput');
    const number = form1.querySelector('#numberInput');
    const email= form1.querySelector('#emailInput');

    sendData(name.value, number.value,email.value,message)
  }
});

function clearForm(form1) {
  form1.reset();
}
 
function sendData(name, number,email,message) {

    const emailToSend =email.trim() === '' ? 'dummy@gmail.com' : email;

    const apiUrl = "https://api.sugarlogger.com/contact_us";
    const requestBody = JSON.stringify({
      email:emailToSend,
      mobile: number,
      name: name,
      type: "wb_home"
    });

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
  })
    .then(response => response.json())
    .then(data => {
      handleApiResponse(data);
    })
    .catch(error => console.error("Error:", error));
}

function handleApiResponse(response) {
  const nameInput = form.querySelector('#nameInput');
  const nameLabel = form.querySelector('#span-name');
  const numberInput = form.querySelector('#numberInput');
  const numberLabel = form.querySelector('#span-number');
  if (response.success) {
    clearForm(form1);
    closeForm();
    showThankYouDialog();

  } else {
    nameInput.classList.remove("error");
    nameLabel.classList.remove("errorText");
    numberInput.classList.remove("error");
    numberLabel.classList.remove("errorText");
  }
}
function checkName(form) {
  const nameInput = form.querySelector('#nameInput');
  const nameLabel = form.querySelector('#span-name');
  const nameRegex = /^[a-zA-Z\s]{3,}$/;

  if (!nameRegex.test(nameInput.value)) {
  
    nameInput.classList.add("error");
    nameLabel.classList.add("errorText");

    return false;
  } else {
    nameInput.classList.remove("error");
    nameLabel.classList.remove("errorText");

  }

  return true;
}

function checkNumber(form) {
  const numberInput = form.querySelector('#numberInput');
  const numberLabel = form.querySelector('#span-number');
  const numberRegex = /^[6-9]\d{9}$/;

  if (!numberRegex.test(numberInput.value)) {

    numberInput.classList.add("error");
    numberLabel.classList.add("errorText");

    return false;
  } else {
    numberInput.classList.remove("error");
    numberLabel.classList.remove("errorText");
  }

  return true;
}
function checkEmail(form){
  const emailInput=form.querySelector("#emailInput");
  const emailLabel=form.querySelector("#span-email");
  const  emailRegex=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@gmail.com)$/gmi;

if(emailInput.value==""){
  return true;
} else if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("error");
    emailLabel.classList.add("errorText");

    return false;
  } else {
    emailInput.classList.remove("error");
    emailLabel.classList.remove("errorText");
  }
return true;
}
