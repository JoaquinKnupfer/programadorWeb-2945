function suma (num1, num2) { 
	var result = num1 + num2 
	return result	
}

function resta (num1, num2) { 
	var result = num1 - num2 
	return result 
} 

function mult (num1, num2) { 
	var result = num1 * num2 
	return result 
} 

function division (num1, num2) {
	var result = num1 / num2
	return result
} 


function calculadora () {
	function askNumber() {

		while (isNaN(userNumber)) {
			var userNumber = parseInt(prompt('Ingrese un numero'), 10)
			if (isNaN(userNumber)) {
				alert ('eso no es un numero, intente de nuevo')
			}
		} return userNumber
	}
	var num1 = askNumber()
	var operation = prompt('Ingrese la operacion que desea realizar (+ - * /)')
	var num2 = askNumber()
		
	while (num2 == 0 && operation === '/') {
		alert('No se puede dividr por 0! Ingrese otro valor')
		var num2 = askNumber()
	}	
	switch (operation) {
	case '+':
	operation = suma(num1, num2)
	break
	case '-':
	operation = resta(num1, num2)
	break
	case '*':
	operation = mult(num1, num2)
	break
	case '/':
	operation = division(num1, num2)
	break
	}
	return alert('El resultado es ' + operation)
}

calculadora()