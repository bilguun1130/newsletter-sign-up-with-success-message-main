const form = $('form');
const mainPage = $('main');
const successPage = $('#success-page');
const inputField = $('#exampleInputEmail1');
const validEmail = $('.valid-email-required');
form.on('submit', (e) => {
    e.preventDefault();
    var nameValue = inputField.val();
    const boolean = ValidateEmail(nameValue);
    if(boolean) {
        mainPage.addClass('hide');
        successPage.removeClass('hide');
    }
    else {
        inputField.addClass('error-state');
        validEmail.removeClass('hide');
    }

    
});

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
      return true;
    } 
    else {
      return false;
    }
  
  }