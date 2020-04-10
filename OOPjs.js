/*

var student = { 
    firstName:'Kishor',
    lastName:'Phawade',
    MathMarks:70,
    ScienceMarks:80,
    ComputerMarks:90,
     calMarks : function()
    {
       var x=(student.MathMarks+student.ScienceMarks+student.ComputerMarks)/3;
       document.write(this.firstName + ' ' +this.lastName + '</br>'); 
       document.write("Avg Marks of 3 Subject is " + x);
    }         
};

student.calMarks();
*/
/*

function Student(first, last, id, english, maths, science)
        {
          this.fName = first;
          this.lName = last;
          this.id = id;
          this.markE = english;
          this.markM = maths;
          this.markS = science;
          this.calculateAverage = function()
          {
         	 return (this.markE + this.markM + this.markS)/3;
          }
		  this.displayDetails = function()
		  {
            document.write("Student Id: " + this.id + "<br />");
            document.write("Name: " + this.fName + " " + this.lName + "<br />");
            var avg = this.calculateAverage();
            document.write("Average Marks: " + avg + "<br /><br />");
		  }
		}
        var st1 = new Student("John", "Smith", 15, 85, 79, 90);
        var st2 = new Student("Hannah", "Turner", 23, 75, 80, 82);
        var st3 = new Student("Kevin", "White", 4, 93, 89, 90);
        var st4 = new Student("Rose", "Taylor", 11, 55, 63, 45);
        st1.displayDetails();
        st2.displayDetails();
        st3.displayDetails();
        st4.displayDetails();
        */

/*
       var student = new Object();
       student.fName = "John";
       student.lName = "Smith";
       student.id = 5;
       student.markE = 76;
       student.markM = 99;
       student.markS = 87;
       student.calculateAverage = function()
       {
           return (student.markE + student.markM + student.markS)/3;
       };
       student.displayDetails = function()
       {
         document.write("Student Id: " + student.id + "<br />");
             document.write("Name: " + student.fName + " " + student.lName + "<br />");
         var avg = student.calculateAverage();
         document.write("Average Marks: " + avg);
       };
         student.displayDetails();
*/
//=========================================================================================
// Constructor Function

 var Person= function(firstName,lastName,DOB,job)
 {
     this.firstName=firstName;
     this.lastName=lastName;
     this.DOB=DOB;
     this.job=job;
     //this.calage=function()
     //{
       //document.write("Current Age of " +firstName + " is ", 2020 - this.DOB + '</br>');
     //}
 }
         
Person.prototype.calage = function()
{
  console.log( 2020 - this.DOB);
  //document.write(2020-this.DOB);
};
Person.prototype.FatherName='Shripati';

 var kishor= new Person('Kishor','Phawade',1996,'IT');
 var Aniket = new Person('Aniket','Kale',1995,'Web Developer');
kishor.calage();
Aniket.calage();
console.log(kishor.FatherName);


//========================================================================================


