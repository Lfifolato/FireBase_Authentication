var btnLogin = document.getElementById('btnLogin')
var txtUser = document.getElementById('txtUser')
var txtSenha = document.getElementById('txtSenha')


btnLogin.addEventListener('click', function () {

   firebase.auth().signInWithEmailAndPassword(txtUser.value, txtSenha.value).then(function (result) {

      console.log("Success!");
      window.location.replace('navbar.html');

   }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...


      alert("Usuario ou Senha Invalidos")

      console.log("Failure!")


   });

});