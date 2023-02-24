const inputs = document.querySelectorAll(".input");
const avatars = document.querySelectorAll(".login-content img")


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

