var btnAdd = document.getElementById('btnAdd')
var txtUser = document.getElementById('txtUser')
var txtSenha = document.getElementById('txtSenha')


btnAdd.addEventListener('click', function () {

   firebase.auth().createUserWithEmailAndPassword(txtUser.value, txtSenha.value).then(function (result) {

      console.log("Success!")

      window.location.replace("navbar.html")

   }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...


      alert("Usuario Ja cadastrado")

      console.log("Failure!")


   });

})