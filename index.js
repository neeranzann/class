
 let fruit1 = "apple"
fruit1= "apple"


let fruitPrice = 100

let instock = true
console.log(fruit1); 






console.log(fruitPrice);


let fruit2 ="orange"
let fruit3 = "pearls"
let fruit4 = "grapes"
console.log("fruit-4 after", fruit4)
fruit4 = "kiwi"


let fruits = ["apple" , "orange" , "banana", "kiwi"]

console.log("fruits", fruits)



let evenNumbers = [2,4, 6, 8, 10] 
let oddNumbers = [1, 3 , 5 , "seven", 9]

/* TODO convert seven to 7 */
console.log("4th index", oddNumbers[3]);
oddNumbers[3] = 7
console.log(oddNumbers);

let courses = ["mern", "marketing", "QA", " python"]
console.log("courses", courses);


let coursesTitle = "mern" 
let coursesDurationInMonths = 3
let coursesDuration = "3months"
let startTime = 4
let endTime = 5
let status = true

let ouRCourses = {
   coursesTitle:"mern",
   couresDurationInMonths:3,
   coursesDuration:"3months",
   startTime:4,
   endTime:5,
   status:"true"




   /* change courses title from mern to mern stack */
   /* code here */


} 

/*Object 
     -same like rea life object
     let <variable> = {
      <key>:<value>
      <attribute>:<value>
      <property>:<value>

     }
  
*/

let ourCourses = ["mern", 3, "3months", 5, "true"]
console.log(ourCourses);

console.log("coursesTitle after", "")
coursesTitle = "mernstack"

// let ourCourses = ["mern", "QA", "python"]
/* Object */

let projector = {
           color:"white",
           brand:"sony",
           price:50000,

}

console.log(projector);

let userOne ={
       name: "ram",
       phone: 98777,


};

let userTwo = {
    name: "sita",
    phone: 9871,
};

let userThree = {
   name :"hari",
   phone : 8899 ,

}

let users = ["ram", "sita", "hari"];



users = [userOne, userTwo , userThree];
console.log("users",users);

// end//
let course = ["mern", "python", " QA"];

let course1 ={
   title : "mern",
   duration : 3 ,
   teaher :"xyz",
   

}

let course2 ={
   title : "python",
   duration : 3 ,
   teaher :"xyz",
   

}
let course3 ={
   title : "mern",
   duration : 3 ,
   teaher :"xyzd",
   

}
// mern-syllabus: js-20days,react:20days,express:30days
//python oop:10days, django:40days
//QA: sql-10days, postman:30days
course =[

   {
      title: "mern",
    teacher : "xyz",
    duration : "2 months",
    syallabs : [
      {
         topic: "js",// change this to javascript
         duration : 2,// change this to 20 days

         
      },
      
      {
         topic: " react",
         duration : 20,
      },
      {
         topic : "express",
         duration : 30,
      },
    ],
},




{
   title : "python",
   teacher : "sdf",
   duration : "3 months",
   syallabs : [
      {
         topic: "oop",
         duration : 20,

      },
      {
         topic: "django",
         duration : 20,
      },
     
    ],
},
 {
   title : "QA",
   teacher : "sdg",
   duration : "3 months",
   syallabs : [
      {
         topic: "sql",
         duration : 20,

      },
      {
         topic: "postman",
         duration : 20,
      },
     
    ],
 },

]
console.log(course[0].syallabs[0].topic="javascript");
console.log(course);
/* TODO 
create users array
    each should has own personnel infos
    -each user has two phone no with different provider 
    */



    let usersData = [
      {
        name: "ram",
        contacts: [
          {
            number: 9234234,
            "service provider": "ntc",
          },
          {
            number: "9841", // CHANGE THIS TO 984042..
            "service provider": "ntc",
          },
          {
            number: 98034,
            "service provider": "ncell",
          },
        ],
      },
      {
        name: "sita",
        /* OTHER DATAS.. */
      },
    ];

    let apiResponse = { 
      data: {
         total: 2,
         results: {
            data: usersData,
         },
      },
    };

    console.log("apiResonse", apiResponse);
    /* classes 1 -A , B, 2-A, B 3, 4 */

    let classes = ["one" , "two"]
    classes = [
      {
         class: 1,
         section: "A",
         classTeacher: "ABC",
         numberOfStudents: 30,

      },
      {
         class: 2,
      },
      {
         class: 3,

      },

    ];
    console.log(classes);
    


    let todos = [
      {
         title: "variable",
         status: true,
         createArt:"2024-01-04",

      },

      {
         title: "array",
         status: "completed",
         createArt:"2024-01-04",
         
      },
      {
         title: "object",
         status: "completed",
         createArt:"2024-01-04",
         
      },
      {
         title: "loop",
         status: "pending",
         createArt:"2024-01-04",
         
      },
      {
         title: "function",
         status: "pending",
         createArt:"2024-01-04",
         
      }
    ];
    console.log("todos", todos);

     