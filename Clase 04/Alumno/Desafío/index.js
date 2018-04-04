var students = [
    {
      firstName: 'Laura',
      lastName: 'Lopez',
      dni: 45678987,
      address:{
        street: 'Cucha cucha',
        number: 1234
      },
      examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
    },
    {
      firstName: 'Cooper',
      lastName: 'Marshall',
      dni: 45678989,
      address:{
        street: 'La Pampa',
        number: 6754
      },
      examResults: [ 3, 4, 5, 6, 7, 3, 4, 5 ]
    },
    {
      firstName: 'Ines',
      lastName: 'Sotomayor',
      dni: 45678956,
      address:{
        street: 'La vía',
        number: 3737
      },
      examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
    },
    {
      firstName: 'Matias',
      lastName: 'Trunzo',
      dni: 45678943,
      address:{
        street: 'Zapiol',
        number: 1819
      },
      examResults: [ 4, 3, 4, 5, 5, 3 ]
    },
    {
      firstName: 'Pablo',
      lastName: 'Callegari',
      dni: 45678963,
      address:{
        street: 'Juan b. Justo',
        number: 7654
      },
      examResults: [ 1, 2, 1, 3, 2, 4, 2, 4, 5 ]
    },
    {
      firstName: 'Daniela',
      lastName: 'Picciotto',
      dni: 45678983,
      examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
    }
  ]
  
  function promedio(examResults){
      var	suma = 0
          for (var i = 0; i < examResults.length; i++) {
          suma = suma + examResults[i]
          
      }
      return suma / examResults.length
  }
  
  function searchByProm(students) {
      var askPromNumber = parseInt(prompt('ingrese un numero de promedio'), 10)
  
      for(var i = 0; i < students.length; i++){
      var student = students[i]
  
      var fullName = student.firstName + ' ' + student.lastName
      var dni = student.dni
      var addressStreet = student.address && student.address.street
      var addressNumber = student.address && student.address.number
      var	address	= addressStreet	+ ' ' + addressNumber
      var prom = promedio(student.examResults)
      
          if (prom >= askPromNumber) {
          console.log(fullName + ' ' + dni + ' ' + address + ' Promedio: ' + prom )	
      
          }
      }
  }
  
  function searchByName(students) {
      var askName = prompt('Ingrese nombre o apellido del Estudiante')
  
      for(var i = 0; i < students.length; i++){
      var student = students[i]
  
      var firstName = student.firstName 
      var lastName = student.lastName
      var fullName = firstName + ' ' + lastName
      var dni = student.dni
      var addressStreet = student.address && student.address.street
      var addressNumber = student.address && student.address.number
      var	address	= addressStreet	+ ' ' + addressNumber
      var prom = promedio(student.examResults)
      
          if (firstName === askName || lastName === askName) {
          console.log(fullName + ' ' + dni + ' ' + address + ' Promedio: ' + prom )	
      
          }
      }
  }
  
  
  searchByName(students)
  
  searchByProm(students)