function initlogin() {
  document.title = "Page de Connexion";

  elemdivloginheader.style.display  = "block";
  elemdivloginbody.style.display    = "block";
  elemdivloginfooter.style.display  = "block";
  
  elemdivloginheader.className = "loginheader";
  elemdivloginheader.innerHTML = "Connexion";
  
  document.getElementById("spanusername").style.display = "none";
  document.getElementById("inputusername").className = "logininputname";
  document.getElementById("inputusername").placeholder = "Nom d'Utilisateur";
  
  document.getElementById("spanpassword").style.display = "none";
  document.getElementById("inputpassword").className = "logininputpassword";
  document.getElementById("inputpassword").placeholder = "Mot de Passe";

  document.getElementById("buttonlogin").className = "loginbutton";
  document.getElementById("buttonlogin").value = "Se Connecter";

  document.getElementById("buttonpasswordchange").className = "loginchangepassword";
  document.getElementById("buttonpasswordchange").innerHTML = "Changer de Mot de Passe";

  document.getElementById("spannewpassword").style.display = "none";
  document.getElementById("inputnewpassword").className = "loginnewpassword";
  document.getElementById("inputnewpassword").placeholder = "Nouveau Mot de Passse";

  document.getElementById("spannewpasswordconfirm").style.display = "none";
  document.getElementById("inputnewpasswordconfirm").className = "loginnewpasswordconfirm";
  document.getElementById("inputnewpasswordconfirm").placeholder = "Confirmer Nouveau Mot de Passse";

  messagelogin[0] = "!! Mot de passe manquant !!";
  messagelogin[1] = "!! Cet utilisateur n'existe pas !!";
  messagelogin[2] = "!! Les mots de passe ne correspondent pas !!";
}

function initadmin() {
  document.getElementById("idbuttonadd").innerHTML = "Ajouter Un Nouvel Utilisateur";
  document.getElementById("idbuttondel").innerHTML = "Retirer Utilisateur";
  document.getElementById("idbuttonresetpassword").innerHTML = "Réinitailiser Mot de Passe";
  document.getElementById("idbuttonaddconfirm").innerHTML = "Ajouter";

  document.getElementById("idinputusername").placeholder = "Nom d'utilisateur";

  document.getElementById("idpassword").placeholder = "Mot de Passe";

  document.getElementById("idpasswordconfirm").placeholder = "Confirmation du Mot de Passe";
}

function init404() {
  document.title = "Probème d'Accès";

  elemdiv404header.style.display  = "block";
  elemdiv404body.style.display    = "block";
  elemdiv404footer.style.display  = "block";
  
  document.getElementById("divheader").style.display="none";
  document.getElementById("divbody").innerHTML = "<h1>Erreur d'accès</h1>";
  document.getElementById("divfooter").innerHTML = "<a href='/'>Acceuil</a>";
}
