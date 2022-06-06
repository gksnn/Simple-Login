//DOM ELEMENTLERİNİ SEÇME

const loginForm = document.querySelector(".login-form");
const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector("#submit-btn");
const returnButton = document.querySelector(".return-btn");
const errorMessage = document.querySelector(".message");
const succesLogin = document.querySelector(".text-box");
const ChangeId = document.querySelector(".changeid");

//USER DATA BASE

const userDatabase = [
  {
    username: "ilayda",
    password: "123456",
  },
  {
    username: "göksenin",
    password: "123456",
  },
  {
    username: "sinan",
    password: "123456",
  },
  {
    username: "özalp",
    password: "123456",
  },
  {
    username: "furkan",
    password: "123456",
  }
];
//Event
loginButton.addEventListener("click", function (e) {
  let username = userNameInput.value;
  let password = passwordInput.value;

  //Empty field Handling
  if (username === "" || password === "") {
    errorMessage.style.display = "block";
  }
  setTimeout(function () {
    errorMessage.remove();
  }, 5000);

  correctLogin(username, password);

  e.preventDefault();
});

returnButton.addEventListener("click", function (e) {
  succesLogin.style.display = "none";
  loginForm.style.display = "flex";

  userNameInput.value = "";
  passwordInput.value = "";

  e.preventDefault();
});

//Function

function correctLogin(username, password) {
  for (let i = 0; i < userDatabase.length; i++) {
    if (
      
      username === userDatabase[i].username &&
      password === userDatabase[i].password
      
    ) {
      errorMessage.style.display = "none";
      return (
        (succesLogin.style.display = "block"),
        (loginForm.style.display = "none"),
        ChangeId.innerHTML=`Welcome ${username}`

        
      );
    } else {
  errorMessage.style.display = "block";
    }
    
  }
  
}


