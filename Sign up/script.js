const form = document.querySelector("form");
const username = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("Cpassword");
const tel = document.getElementById("tel");
const btn = document.getElementById("signUp-btn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay")
const valUsername = document.getElementById("list-one");
const valTel= document.getElementById("list-two");
const valPassword= document.getElementById("list-four");
const valCpassword= document.getElementById("list-seven");
const valUsernameCount = document.getElementById("list-nine")
const valTelCount = document.getElementById("list-three");
const valPswdCount = document.getElementById("list-five");
const valPswdChar = document.getElementById("list-six");
const valPswdMatch = document.getElementById("list-eight");
const redirect = document.getElementById("redirect")
const countDown = document.getElementById("count");
let count = Number(countDown.innerText);


/* Adding event Listener to button */
btn.addEventListener("click",function () {
				if(username.value.length >= 3 && password.value.length  >= 8 &&  confirmPassword.value.length >= 8 && tel.value.length >= 10 && password.value === confirmPassword.value) {
								modal.classList.remove("hidden")
								overlay.classList.remove("hidden")
								setTimeout(function () {
											let myInterval =	setInterval(function () {
																count--
																if(count == 0) {
																				clearInterval(myInterval)
																}
																countDown.innerHTML = count;
												}, 1000)
								}, 3000)
				}
				/* Validation for empty and invalid inputs  */
				if(username.value.length < 3) {
								if(username.value.length == 0) {
												valUsername.classList.remove("hidden")
								}else {
												valUsernameCount.classList.remove("hidden")
								}
								setTimeout(function () {
								valUsername.classList.add("hidden")
								valUsernameCount.classList.add("hidden")
				}, 5000)
				}
				/*  */
				if(tel.value.length < 10) {
								if(tel.value.length == 0) {
												valTelCount.classList.remove("hidden")
												valTel.classList.remove("hidden")
								}else {
												valTelCount.classList.remove("hidden")
								}
								setTimeout(function () {
								valTelCount.classList.add("hidden")
								valTel.classList.add("hidden")
				}, 5000)
				}
				/*  */
				if(password.value.length < 8) {
								if(password.value.length == 0) {
												valPassword.classList.remove("hidden")
												valPswdCount.classList.remove("hidden")
								}else {
												valPswdCount.classList.remove("hidden")
								}
								setTimeout(function () {
								valPassword.classList.add("hidden")
								valPswdCount.classList.add("hidden")
				}, 5000)
				}
				/*  */
				if(confirmPassword.value.length < 8) {
								if(confirmPassword.value.length == 0) {
												valCpassword.classList.remove("hidden")
												
								}
								setTimeout(function () {
								valCpassword.classList.add("hidden")
				}, 5000)
				}
				/*  */
				if(password.value !== confirmPassword.value) {
								valPswdMatch.classList.remove("hidden")
								setTimeout(function () {
								valPswdMatch.classList.add("hidden")
								
				}, 5000)
				}
				
				/* End of event listener function  */
})
/* End of event listener */
/* Redirecting CountDown  */
redirect.addEventListener("click",function () {
				alert("I am not redirecting you to anywhere Turkey butt! ")
})
form.addEventListener("submit", function (e) {
				e.preventDefault()
})
