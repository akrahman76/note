var config = {
  apiKey: "AIzaSyDGOthVIjYm6DJ9M_s53QVTrCWeRhamry0",
  authDomain: "note-share-f4c73.firebaseapp.com",
  databaseURL: "https://note-share-f4c73.firebaseio.com",
  projectId: "note-share-f4c73",
  storageBucket: "note-share-f4c73.appspot.com",
  messagingSenderId: "728024973153",
  appId: "1:728024973153:web:228c12b15c59d1cf2e0f20",
  measurementId: "G-HW01CVZT4E"
};

firebase.initializeApp(config);
var passwordsRef = firebase.database().ref('info');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var id = getInputVal('id');
  var email = getInputVal('email');
  var department = getInputVal('department');
  var password = getInputVal('password');


  // Save password


      savepassword(name, id, email, department, password);
    

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}




};

// Save password to firebase
function savepassword(name, id, email, department, password){
  var newpasswordRef = passwordsRef.push();
  newpasswordRef.set({
    name: name,
    id:id,
    email:email,
    department:department,
    password:password
  });
}
