// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC_PRfrIm3KLOkzYhQVHbWvUhVHJ5-e0lw",
    authDomain: "fifth-upgrade-295411.firebaseapp.com",
    databaseURL: "https://fifth-upgrade-295411-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fifth-upgrade-295411",
    storageBucket: "fifth-upgrade-295411.appspot.com",
    messagingSenderId: "507973723078",
    appId: "1:507973723078:web:5bfb6d12243d3f47e688c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();


function logout() {
    window.location = "index.html";
}
