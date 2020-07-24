/**

    We will push to github all along the way so we track our week and keep a log

    Fork
    Clone to local machine
    First step on local: `git checkout -b answer`

    Declaring an Array with Objects
    and
    Referencing code in other files

    1)  Please read all instructions first!

        Create a new file named "grades.js" to import in the data folder
        
        Declare and initialize an array named `grades`
    
        Include at least 5 object items in the array 
        
        Each object will have properties of
            - `assignmentName`  with string values such as "Assignment 01"
            - `studentName` with string values such as "Tito"
            - `score` with numeric values such as 50

        Values are important for this lesson.

            - Use 2 distinct assignment names
            - Use 2 distinct student names

 */

 /**

    Looping using your preferred looping syntax and updating a shared variable
 
    2) Loop through the grades data using a for loop.
        Update `gradeTotal` so it increases value for each item in the array

 */
const { grades } = require ( './data/grades' )

// console.log({ grades })
//  let gradeTotal = 0

//  function calculateTotalGrades(grades) {
//     for(let i = 0; i < grades.length; i++)  {                         
//     gradeTotal = gradeTotal + grades[i].score
//     console.log({gradeTotal})
// }
// return gradeTotal
// }

// console.log(calculateTotalGrades(grades))

// //opt 1
// for (const index in grades){
//     const { score } = grades[index]
//     console.log({ score })
//     gradeTotal += score
// }

// // opt 2

// gradeTotal = 0
// for (const index in grades) {
//     const grade = grades[index]
//     gradeTotal += grade.score
// }

// // opt 3
// gradeTotal = 0
// grades.forEach( (grade) =>{
//     gradeTotal += grade.score
// })


 /**
 
    Using reduce

    3) Use Array reduce to do the same total calculation logic

        Replace `null` below with the use of `reduce`
 
  */

let gradeTotal = 0
gradeTotal = grades.reduce((total, grade) =>{
    total+= grade.score
    return total
} , 0 )

console.log(gradeTotal)
