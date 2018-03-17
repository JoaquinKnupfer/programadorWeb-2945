
var rootContainer = document.getElementById('root')

var students = [
  {
    firstName: 'Laura',
    lastName: 'Lopez',
    dni: 45678987,
    address: {
      street: 'Cucha cucha',
      number: 1234
    },
    examResults: [7, 5, 6, 4, 3, 2, 8]
  },
  {
    firstName: 'Cooper',
    lastName: 'Marshall',
    dni: 45678989,
    address: {
      street: 'La Pampa',
      number: 6754
    },
    examResults: [3, 4, 5, 6, 7, 3, 4, 5]
  },
  {
    firstName: 'Ines',
    lastName: 'Sotomayor',
    dni: 45678956,
    address: {
      street: 'La vía',
      number: 3737
    },
    examResults: [3, 8, 7, 5, 6, 4, 5, 4, 3]
  }
]
rootContainer.innerHTML = '<ul class="list-group" id="list"></ul>'

var listContainer = document.getElementById('list')

var student
var fullName

for (var i = 0; i < students.length; i++) {
  student = students[i]
  fullName = student.firstName + ' ' + student.lastName
  appendStudent(fullName)
}

function appendStudent(fullName) {
  var li = document.createElement('li')

  li.className = 'list-group-item'

  li.innerHTML = fullName

  li.id = fullName

  listContainer.appendChild(li)
}





