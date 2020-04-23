var btnAdd = document.getElementById('btnAdd')
var txtUser = document.getElementById('txtUser')
var txtSenha = document.getElementById('txtSenha')



btnAdd.addEventListener('click', function () {

   firebase.auth().createUserWithEmailAndPassword(txtUser.value, txtSenha.value).then(function (result) {

      function writeUserData(txtNome, txtCep, txtNumero, txtEstado, txtCidade, txtLogradouro, txtBairro) {
         firebase.database().ref('login-a4afb' + txtNome).set({

            nome: txtNome,
            Cep: txtCep,
            Numero: txtNumero,
            Estado: txtEstado,
            cidade: txtCidade,

            Logradouro: txtLogradouro,
            Bairro: txtBairro

         });
      }


      console.log("Success!")

      window.location.replace("../page/navbar.html")

   }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...


      alert("Usuario Ja cadastrado")

      console.log("Failure!")


   });

})