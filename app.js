var student1= {
    name: "ALI",
    fatherName: "NADEEM",
    rollNo:10,
    result: "75%",
    contactNo: "03244656798",
};

var student2= {
    name: "HASSAN",
    fatherName: "BAIG",
    rollNo:91,
    result: "80%",
    contactNo: "03243545443",
};
var student3= {
    name: "MUHAMMED",
    fatherName: "HAFEEZ",
    rollNo:12,
    result: "60%",
    contactNo: "056546546546",
};
var student4= {
    name: "MOIZ",
    fatherName: "TARIQ",
    rollNo:29,
    result: "99%",
    contactNo: "054543654362",
};
var student5= {
    name: "SALMAN",
    fatherName: "KHAN",
    rollNo:40,
    result: "50%",
    contactNo: "065768787777",
};

var studentList = [student1,student2,student3,student4,student5];
var studentDataTable = document.getElementById("studentData");
for(var i=0; i<studentList.length; i++){
    var obj = studentList[i]
    studentDataTable.innerHTML += "<tr><td>"+obj.name+"</td><td>"+obj.fatherName+"</td><td>"+obj.rollNo+"</td><td>"+obj.result+"</td><td>"+obj.contactNo+"</td></tr>";
};



function searchStd(){
    var inpVal = document.getElementById("inpVal");
    var showRollNumber = document.getElementById("showRollNumber");
    var showName = document.getElementById("showName");
    var showFatherName = document.getElementById("showFatherName");
    var showContact = document.getElementById("showContact");
    var showResult = document.getElementById("showResult");

    for(var i=0; i<studentList.length; i++){
        var std =studentList[i];
        if(inpVal.value == std.rollNo){
            console.log(std);
            showRollNumber.innerHTML = std.rollNo;
            showName.innerHTML = std.name;
            showFatherName.innerHTML = std.fatherName;
            showContact.innerHTML = std.contactNo;
            showResult.innerHTML = std.result;
        }
    }
}
