const form = document.getElementById('form');
const email = document.getElementById('email');
const meno = document.getElementById('meno');
const text = document.getElementById('text');
form.addEventListener('submit', (e) => {
  e.preventDefault;
  valid();
})

function success(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function errorExclamation(input){ 
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
}

function valid(){
  const menoHodnota = meno.value.trim(); //prevencia zadaniu whitespace
  const	emailHodnota = email.value.trim();
  const textHodnota = text.value;
  if(menoHodnota === ''){
    errorExclamation(meno);
  }else {
    success(meno);
  }

  if(textHodnota === ''){
    errorExclamation(text);
  }else {
    success(text);
  }

  if(emailHodnota === ''){
    errorExclamation(email);
  }else if (!emailCheck(emailHodnota)) {
    errorExclamation(email);
  }else {
    success(email);
  }

  if(menoHodnota === ''){return false;
  }else if (textHodnota === ''){return false;
  }else	if (emailHodnota === ''){return false;
  }else if (!emailCheck(emailHodnota)){return false;
  }else {
     return true;
  }
}

function emailCheck(email){ //regex vygenerovaný z internetu na kontrolu emailu
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


