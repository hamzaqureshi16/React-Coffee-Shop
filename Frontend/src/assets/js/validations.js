export const verifyNumber = (number) => {//method to verify the mobile number
    var regex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;//regex gernated by chatGPT to test pakistani mobile numbers
    
    if(regex.test(number.value)){//testing the value against the regex to verify that the value conforms
         //show invalid input message
         number.style.backgroundColor = "white";
         number.setCustomValidity("");//sets the control's validity as valid

         return true;
    }
    else{
         
         //set field invalid
         number.setCustomValidity('Invalid Phone Number');//if the value does not conform then marks the control as invalid
         number.style.backgroundColor = "red";
         return false;
    
    }    
        
    }


export const verifyPassword = ()=>{

    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirm_password');
    console.log(password.value.length)
    if(password.value === confirmPassword.value){
        

        if(password.value.length > 8){
          password.style.backgroundColor = "white";
          password.setCustomValidity("");
          confirmPassword.setCustomValidity("");
          return true;
        }
        else{
          password.setCustomValidity("Password must be 8 characters long");
          confirmPassword.setCustomValidity("Password must be 8 characters long");
          password.style.backgroundColor = "red"
          return false;
        }
    }
    else{
        password.setCustomValidity("Passwords do not match");
        confirmPassword.setCustomValidity("Passwords do not match");
        password.style.backgroundColor = "red"
        return false;
    }

  }

export const VerifyCard= (cardInput)=>{//method to verfy the card entered by the user
    //remove all - from cardInput's value
    var card = cardInput.value.replace(/-/g,'');//remove all the '-' in the value
    if(typeof(parseInt(card)) ==  typeof(0)){//convert it to integer
         cardInput.setCustomValidity("");//mark the field as valid
         cardInput.style.backgroundColor = 'white';
         return true;
    }
    else{
        cardInput.setCustomValidity('Invalid Card Number');//mark the field as invalid
        cardInput.style.backgroundColor = 'red';
         return false;
    }

}


export const verifyExpiry = (expiry) =>{
    //check if the date of expiry has passed or not
    var date = new Date();
    if(date < new Date(expiry.value) ){//expiry date is later than today
        expiry.setCustomValidity("");//mark the field as valid
        expiry.style.backgroundColor = 'white';
          return true;
   }
    else{
         expiry.setCustomValidity('Your Card has Expired');//mark the field as invalid
         expiry.style.backgroundColor = 'red';
         console.log('red');
         return false;
    }

}


export const verifyCVV = (CVV) =>{
    //check if the CVV is valid or not
    if(CVV.value.length === 3){//check if the length of the CVV is 3
        CVV.setCustomValidity("");//mark the field as valid
        CVV.style.backgroundColor = 'white';
         return true;
    }
    else{
        CVV.setCustomValidity('Invalid CVV');//mark the field as invalid
        CVV.style.backgroundColor = 'red'; 
         return false;
    }
}

export const verifyAddres = () =>{
    var address = document.getElementById('address');
    if(address.value.length > 10){
      address.style.backgroundColor = "white";
      address.setCustomValidity("");
      return true;
  }
  else{
      address.setCustomValidity("Invalid Address");
      address.style.backgroundColor = "red"
      return false;
  }
  }


export const checkIfEmpty = ()=>{
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirm_password');
    var contact = document.getElementById('contact');
    var address = document.getElementById('address');
    var card = document.getElementById('card');
    var expiry = document.getElementById('expiry');
    var cvv = document.getElementById('cvv');
    if(expiry.value === '' || card.value === '' || cvv.value === '' || username.value === '' || email.value === '' || password.value === '' || confirmPassword.value === '' || contact.value === '' || address.value === ''){
      username.setCustomValidity("All fields are required");
      email.setCustomValidity("All fields are required");
      password.setCustomValidity("All fields are required");
      confirmPassword.setCustomValidity("All fields are required");
      contact.setCustomValidity("All fields are required");
      address.setCustomValidity("All fields are required");
      card.setCustomValidity("All fields are required");
      expiry.setCustomValidity("All fields are required");
      cvv.setCustomValidity("All fields are required");
      return false;
    }
    else{
      return true;
    }
  }