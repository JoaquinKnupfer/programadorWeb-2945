
// var studentList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS', 'MARIA', 'FEDERICO', 'ANTONIO']

// var stringList = JSON.stringify(studentList)

// localStorage.setItem('studentList', stringList)

var localStudents = localStorage.getItem('studentList')

var parsedStudents

if (localStudents) {
  parsedStudents = JSON.parse(localStudents)
} else {
  parsedStudents = []
}

console.log(CARLOS)



// function addStudent() {
//   localStorage.setItem('firstName', 'JOAQUIN')

// } 