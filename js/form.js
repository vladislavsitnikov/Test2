const openModalBtns = document.querySelectorAll('#openModalBtn');

openModalBtns.forEach(function(button) {
  button.addEventListener('click', function() {
    document.getElementById('customOpenModal').style.display = 'block';
  });
});

document.querySelector('.custom-form-zakazat').addEventListener('submit', function(event) {
  event.preventDefault(); 
  document.getElementById('customOpenModal').style.display = 'none';
});


function validateForm() {
  var nameInput = document.getElementById('name');
  var phoneInput = document.getElementById('phone');
  
  var nameError = document.getElementById('nameError');
  var phoneError = document.getElementById('phoneError');
  
  var isValid = true;
  
  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    nameInput.classList.add("error-border");
    isValid = false;
  } else {
    nameError.style.display = "none";
    nameInput.classList.remove("error-border");
  }
  
  if (phoneInput.value.trim() === "") {
    phoneError.style.display = "block";
    phoneInput.classList.add("error-border");
    isValid = false;
  } else {
    phoneError.style.display = "none";
    phoneInput.classList.remove("error-border");
  }
  
  if (isValid) {
    document.getElementById('contactForm').submit(); // Submit form if valid
  }
}
