const inputs = document.querySelectorAll(".input");
const avatars = document.querySelectorAll(".login-content img");
const style1 = document.getElementById('style1');
const style2 = document.getElementById('style2');
const button = document.getElementById('change-theme');
const path = document.querySelector('svg path');
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
const dots = document.querySelectorAll('.dot');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const popupText = document.querySelector('.popup-text');
const popupButton = document.querySelector('.popup-button');

style1.disabled = true

// Function to toggle the dropdown menu
function toggleDropdownMenu() {
	dropDownMenu.classList.toggle('open')
	const isOpen = dropDownMenu.classList.contains('open')
	toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
  }
  
  // Add event listener to close the menu when the screen width goes over a certain threshold
  window.addEventListener('resize', () => {
	if (window.innerWidth > 768 && dropDownMenu.classList.contains('open')) {
	  toggleDropdownMenu()
	}
  })
  
  // Add event listener to toggle the menu when the button is clicked
  toggleBtn.addEventListener('click', toggleDropdownMenu)

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}
function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

button.addEventListener('click', function() {
	if (style1.disabled) {
	  style1.disabled = false;
	  style2.disabled = true;
	  path.setAttribute('d', "M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13")
	}
	else {
	  style1.disabled = true;
	  style2.disabled = false;
	  path.setAttribute("d", "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z")
	}
  });


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
})

avatars.forEach((img) => {
	img.addEventListener('click', () => {
		img.setAttribute('tabindex', '0');
		img.focus();
	});
});
 

function validateForm() {
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirmPassword").value;
	if (password != confirmPassword) {
	  alert("Passwords do not match!");
	  return false;
	}
	return true;
  }

  
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
        popupText.textContent = dot.getAttribute('data-text');
        popup.style.display = 'block';
    });
});

window.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.style.display = 'none';
    }
});