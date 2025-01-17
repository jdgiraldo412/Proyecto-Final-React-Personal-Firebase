import { generarrToken } from "./servicioToken"

//Receta para consumir un api con react

export async function servicioCancionesTop(){

    let token=await generarrToken()

    //1.PA DONDE VAS Y A QUE VAS 
    //ESCRIBIR LA URL DEL SERVICIO DEL API 

    const URL="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"

    //2.QUE OPERACION VAS A HACER EN LA BASE DE DATOS 
    //CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR }
    const PETICION={
        method:"GET",
        headers:{Authorization:token}
  
}

//3.NOS VAMOS AL RESTAURANTE 
//CONSUMIMOS EL API

let respuesta=await fetch(URL,PETICION)
let canciones=await respuesta.json()
return canciones
}