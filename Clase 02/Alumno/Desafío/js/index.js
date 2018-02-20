var diasDeLaSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

var ingresarDia = prompt('Ingrese un dia de la semana')

for (var i = 0; i < diasDeLaSemana.length; i++) {
  var dia = diasDeLaSemana[i]
  if (ingresarDia === dia) {
  	if (ingresarDia === 'Sabado' || ingresarDia === 'Domingo') {
  		console.log('Es fin de semana')
  	}else {
  		console.log('Es dia de semana')
  	}break
  }

} if (ingresarDia !== dia) {
	console.log('Ingresaste cualquier cosa')
}
