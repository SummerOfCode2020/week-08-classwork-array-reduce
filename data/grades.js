let grades = [
  {
    assignmentName: 'Homework 1',
    studentName: 'Marcus',
    score: 50
  },
  {
    assignmentName: 'Homework 1',
    studentName: 'Alvin',
    score: 60
  },
  {
    assignmentName: 'Homework 2',
    studentName: 'Marcus',
    score: 65
  },
  {
    assignmentName: 'Homework 2',
    studentName: 'Alvin',
    score: 64
  },
  {
    assignmentName: 'Homework 3',
    studentName: 'Alvin',
    score: 70
  },
  {
    assignmentName: 'Homework 3',
    studentName: 'Alvin',
    score: 58
  }
]

const calculateTotalGrade = for(let i = 0; i < grades.length; i++) {
  if(gradeTotal isNaN || gradeTotal >= 0) {
    gradeTotal = 0;
    gradeTotal = gradeTotal + grades[i].score
  }
}

module.exports = {
  grades,
  calculateTotalGrade
}
