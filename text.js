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


var term={};

term['T-1']=['CSE-201','CSE-202','CSE-203','CSE-204','CSE-205','CSE-206','EECE-269','EECE-270','MATH-245'];
term['T-2']=['CSE-211','CSE-212','CSE-214','CSE-215','CSE-216','CSE-217','CSE-220','CSE-224','MATH-247','HUM-237'];
var seldept,selterm,sellevel,selcourse;
var actList;
var index;

function ChangecatList() {
    var deptList = document.getElementById("dept");
    var levelList = document.getElementById("level");
    var termList = document.getElementById("term");
      actList = document.getElementById("course");
      seldept = deptList.options[deptList.selectedIndex].value;
      sellevel = levelList.options[levelList.selectedIndex].value;
      selterm = termList.options[termList.selectedIndex].value;

    while (actList.options.length) {
        actList.remove(0);
    }
    if(seldept=="CSE" && sellevel=="L-2")
    {
       // var course = catAndActs[selCat];


       var cats=term[selterm];

       //console.log(cats[cats.length-1]);
       if (cats) {
        var i;
        for (i = 0; i <cats.length; i++) {
            var cat = new Option(cats[i], i);

            actList.options.add(cat);



        }


        //var index=document.getElementById("course").selectedIndex;


        }


    }



}

var uploader=document.getElementById('uploader');
var filebutton=document.getElementById('fileButton');
filebutton.addEventListener('change',function(e){
    e.preventDefault();
    selcourse = actList.options[actList.selectedIndex].text;

    var file=e.target.files[0];
    console.log(seldept);
    console.log(sellevel);
    console.log(selterm);
    console.log(selcourse);
   var storageRef= firebase.storage().ref(seldept+'/'+sellevel+'/'+selterm+'/'+selcourse+'/'+file.name);

    var task=storageRef.put(file);
    task.on('state_changed',
    function progress(snapshot){
           var percentage=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
           uploader.value=percentage;
    },
    function error(err)
    {

    },
    function complete()
    {

    }

    );
});




function myFunction() {
  alert("Your file has been uploaded successfully.Thanks for using Note Share");
}
