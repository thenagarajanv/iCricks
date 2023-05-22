  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDkQdoj-T0R-zLI_feI-5iK4AQw322QYGI",
    authDomain: "cricstats-db.firebaseapp.com",
    databaseURL: "https://cricstats-db.firebaseio.com",
    projectId: "cricstats-db",
    storageBucket: "cricstats-db.appspot.com",
    messagingSenderId: "53202060574",
    appId: "1:53202060574:web:064edcf3fd910c0a2f750f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));

    alert("Signed Up");
}

    function signIn(){
        var email = document.getElementById("email");
		    var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        alert("Signed In " + email);
        document.location.href="home.html";
    }

    function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
		}else{
			
      alert("No Active User");
      
		}
			
	});
