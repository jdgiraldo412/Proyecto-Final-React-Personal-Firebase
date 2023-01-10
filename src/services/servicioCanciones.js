//Receta para consumir un api con react

export async function servicioCancionesTop(){

    //1.PA DONDE VAS Y A QUE VAS 
    //ESCRIBIR LA URL DEL SERVICIO DEL API 
    const URL="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"

    //2.QUE OPERACION VAS A HACER EN LA BASE DE DATOS 
    //CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR 
    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQDSdkO0Xjl8IjbSWB5fxs_W33xW2IGfxHwUsc0cI7o15ayTS3ONEO2v5mT60wQRup9EKtZ1ybe3Coimxq2cnkluYKmZXR2a4EgKISgFnywN-jMlTrJK2g3zYhU0nxI90S4RWUc_1eXggY2zKMMGfAPQZEsystf5EzjMyDwii_4SpqYpUGQV--qAyRFQ2iiRfzM"}
    
}

//3.NOS VAMOS AL RESTAURANTE 
//CONSUMIMOS EL API
let respuesta=await fetch(URL,PETICION)
let canciones=await respuesta.json()

console.log(canciones)

}