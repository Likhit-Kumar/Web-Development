const form = document.getElementById("form");
const first_name = document.getElementById("FirstName");
const last_name = document.getElementById("LastName");
const username = document.getElementById("Username");
const email = document.getElementById("Email");
const password = document.getElementById("Password");
const confirm_password = document.getElementById("Confirm Password");
const date = document.getElementById("Date");
var count1 = 0;
var email_count = 0;
var pwd_count = 0;
var c_pwd_count = 0;
var user_count = 0;
var name_count = 0;

form.addEventListener("submit", function(e) {
  e.preventDefault();

  validateDOB(date);
  Required_fn([first_name, last_name, username, email, password, confirm_password]);
  Length_fn(password, 6, 25);
  Email_fn(email);
  
  if(first_name.value || last_name.value !=="")
  {
    Name_fn(first_name, 3, 15);
    Name_fn(last_name , 1, 10);
  }
  if (confirm_password.value !== "") {
    Password_check(password, confirm_password);
  }

  if(username.value !== "") {
    UserName_fn(username,3, 15);
  }

  if(count1 >= 1 && email_count >= 1 && user_count >= 1 && pwd_count >= 1 && c_pwd_count >= 1 && name_count >= 1)
  {
    swal("Congrats!", "Your form has been submitted successfully!", "success");
    count1 = email_count = user_count = pwd_count = c_pwd_count = name_count = 0;
    this.reset();
    Reset_fn([first_name, last_name, username, date, email, password, confirm_password]);
  }
});

function Required_fn(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value === "") {
      Error_fn(input, `${input.id} is required`);
    } else {
      Success_fn(input);
      count1++;
    }
  });
}

function Name_fn(input, min, max) {
  var letters = /^[A-Za-z]+$/;
  if (input.value.length <= min) {
    Error_fn(
      input,
      `${input.id} must be more than ${min} characters`
    );
  } else if (input.value.length >= max) {
    Error_fn(
      input,
      `${input.id} must be less than ${max} characters`
    );
  } else if (!input.value.match(letters)) {
      Error_fn(input, `${input.id} contains Special Character`);
  } else {
    Success_fn(input);
    name_count++;
  }
}

function UserName_fn(input, min, max) {
  var re = /^[A-Za-z0-9 ]+$/
  var isValid = re.test(input.value);

  if (input.value.length <= min) {
    Error_fn(
      input,
      `${input.id} must be more than ${min} characters`
    );
  } else if (input.value.length >= max) {
    Error_fn(
      input,
      `${input.id} must be less than ${max} characters`
    );
  } else if (!isValid) {
      Error_fn(input, "User Name contains Special Character");
  } else {
    Success_fn(input);
    user_count++;
  }
}

function Length_fn(input, min, max) {
  if (input.value.length <= min) {
    Error_fn(
      input,
      `${input.id} must be more than ${min} characters`
    );
  } else if (input.value.length >= max) {
    Error_fn(
      input,
      `${input.id} must be less than ${max} characters`
    );
  } else {
    Success_fn(input);
    pwd_count++;
  }
}


function Password_check(password, confirm_password) {
  if (password.value !== confirm_password.value) {
    Error_fn(confirm_password, "Password did not match");
  }
  else c_pwd_count++;
}

function Email_fn(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    Success_fn(input);
    email_count++;
  } else {
    Error_fn(input, "Email is not valid");
  }
}

function Error_fn(input, message) {
	const formDiv = input.parentElement;
	const small = formDiv.querySelector('small');
	formDiv.className = 'form-cont error';
	small.innerText = message;
}

function Success_fn(input) {
	const formDiv = input.parentElement;
	formDiv.className = 'form-cont success';
  
}

function Reset_fn(inputArr) {
  inputArr.forEach(function(input) {
   	const formDiv = input.parentElement;
	  formDiv.className = 'form-cont reset';
  });
}

function validateDOB(input)
{
    var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    if (input.value == null || input.value == "" || !pattern.test(input.value)) {
      Error_fn(input, "Invalid Date of Birth");
    }
    else {
      Success_fn(input);
    }
}