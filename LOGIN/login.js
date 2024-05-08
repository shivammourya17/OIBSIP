const loginLink = document.querySelector('.switchToLogin a');
const signupLink = document.querySelector('.para-2 a');

document.querySelector(".signupF").addEventListener("click" , ()=>{
    console.log("hi")
    signup()

})
document.querySelector(".loginF").addEventListener("click" , ()=>{
    console.log("helo")
    login()

})

loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.signup').style.display = 'none';
});

signupLink.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.signup').style.display = 'block';
});



let users = [
  ];
  
  function signup() {
    const firstname = document.getElementById('signup-firstname').value;
    const lastname = document.getElementById('signup-lastname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmpassowrd= document.getElementById("signup-confirmpassword").value

    if(password!==confirmpassowrd){
        alert("Password and confirm password doesn't match")
    }
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert('Email already exists. Please login.');
      return false;
    }
  
    users.push({ firstname,lastname, email, password });
    alert('Signup successful. Please login.');
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.signup').style.display = 'none';
    return true;
  }
  
  function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      alert('Login successful.');
      return true;
    } else {
      alert('Invalid credentials. Please try again or signup.');
      return false;
    }
  }
