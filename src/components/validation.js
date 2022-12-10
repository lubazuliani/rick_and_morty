
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validate(userData) {
    let errors = {};
   
     if (!userData.username) {
       errors.username = 'El nombre de usuario no puede estar vacío';
     } else if (!regexEmail.test(userData.username)) {
       errors.username = 'El nombre de usuario tiene que ser un email';
     } else if (userData.username.length > 35){
       errors.username = "El nombre de usuario no puede tener más de 35 caracteres";
     }
     
     if (!regexPassword.test(userData.password)){
       errors.password = "La contraseña tiene que tener al menos un número";
     } else if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres";
     }
   
     return errors;
   }


   // if (!regexPassword.test(userData.passwor)) errors.password="la contraseña blabla"
   // Ver captura en email R&M Forms