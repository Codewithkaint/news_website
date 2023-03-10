const firebaseConfig = {
    apiKey: "AIzaSyB77_QBr0-q7hbN9YdDWkOtoTCJlthMn3E",
    authDomain: "studentinformation-c39aa.firebaseapp.com",
    databaseURL: "https://studentinformation-c39aa-default-rtdb.firebaseio.com",
    projectId: "studentinformation-c39aa",
    storageBucket: "studentinformation-c39aa.appspot.com",
    messagingSenderId: "239881028775",
    appId: "1:239881028775:web:7eb58767b379feb852c782"
  };
  firebase.initializeApp(firebaseConfig);

  var studentInfoDB = firebase.database().ref("studentInfo");
  document.getElementById("studentInfo").addEventListener("submit",submitForm)

function submitForm(e) {
        e.preventDefault()
var name=getElementVal("name_inp")
var pass=getElementVal("pass_inp")
if(name && pass){
// saveMessages(name, pass);
c=0
var fireb=firebase.database().ref("studentInfo")
fireb.on("value",function(snapshot){
    var data=snapshot.val()
    for(let i in data){

        if(name==data[i].name && pass==data[i].password){
          window.location.href = "./teacher_ask.html"

        c=1
        break
        }    
    }
    
    if(c!=1){
      document.querySelector(".aaslert").style.display="block"
      setTimeout(() => {
      
        
          document.querySelector(".aaslert").style.display='none'
        }, "2000")
    }
    
})
}
else{    document.querySelector(".aaslert").style.display="block"
    setTimeout(() => {
    
      
        document.querySelector(".aaslert").style.display='none'
      }, "2000")
      
  };
  document.getElementById("studentInfo").reset();
}
  const saveMessages = (name, pass) => {
    var newSubmission = studentInfoDB.push();
  
    newSubmission.set({
      name: name,
      password:pass,
    });

  }
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

