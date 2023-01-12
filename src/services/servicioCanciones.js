//Receta para consumir un api con react

export async function servicioCancionesTop(){

    //1.PA DONDE VAS Y A QUE VAS 
    //ESCRIBIR LA URL DEL SERVICIO DEL API 

    const URL="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"

    //2.QUE OPERACION VAS A HACER EN LA BASE DE DATOS 
    //CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR }

    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQBuNZ6swiOfn9BuU-nWgF10MWhQkcwWxj0srVlqhz6k52fSaK4RzI7XaB9GiFEYrY38yPkCe2gRtuthTxL9U9xa_UQB0AntG2fDT9QX8KcrFxOARgSbAH2qQ0MA8eKc-3sJIUvsQ3mcWQDTvN6Ly3wgXbdn3zNclCDwYDMA5Jw3s3P4RBi7qQnhviSCUmXoFZw"}
  
}

//3.NOS VAMOS AL RESTAURANTE 
//CONSUMIMOS EL API

let respuesta=await fetch(URL,PETICION)
let canciones=await respuesta.json()
return canciones
}