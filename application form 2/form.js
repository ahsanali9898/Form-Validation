function validateForm(){

// validation fo name
var Name=document.getElementById("FirstName").value;
if(Name=="" || Name==null){
    alert("name is required");
}

// validation fo last name
var Lastname=document.getElementById("LastName").value;
if(Lastname=="" || Lastname==null){
    alert("Last name is required");
}


//validation for selection
var Job=document.getElementById("job").value;
// var Job=document.forms ["regForm"]["jobType"].value;
if(Job==null || Job==""){
    alert("please select your job");
}

  //validation for city
  var city=document.forms ["regForm"]["city"].value;
if(city==null || city==""){
    alert("please select your city");
}

//validation for file
var File=document.forms ["regForm"]["choosenFile"].value;   
if(!File){
    alert("Please choose a file");
    return false;
}

// validation for password
var password=document.forms["regForm"]["password"].value;
if(!password){
    alert("Passwod is required");
}
if(password.length<8){
alert("password's length should be at least 8 characters");
}

//validation for Email
var EMAIL=document.forms["regForm"]["mail"].value;
if(!EMAIL){
  alert("EMAIL is required");
}

//validation for Gender
var gn=document.getElementById("Gn").value;
// if((gn[0].checked==false) && (gn[1].checked==false)){
 if((gn.gender[0].checked == false ) &&(gn.gender[1].checked == false )){
    alert("Select your gender please");
    }

}

//     var DOB=document.forms["regForm"]["DateOfBirth"].value;
//   //  var currentDate= new Date();
//     var fixedDate = new Date("01/01/2023");
//     var age = currentDate.getFullYear() - fixedDate.getFullYear();
//     var month= currentDate.getMonth() - fixedDate.getMonth();

//     if (month < 0 || (month === 0 && currentDate.getDate() < fixedDate.getDate())) {
//         age--;
//     }

//     if(age>22){
//         alert("you are over age");;
//     }
//     else{
//         alert("you are elgible thank  you");
//     }





