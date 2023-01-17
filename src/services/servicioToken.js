export async function generarrToken(){

    const client_id="client_id=3675a963f49b4063a0088c225cbb7760" 
    const client_secret="client_secret=705b3532bd3f47a39b886e2c225ad532"
    const grant_type="grantype=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"Content-type":"x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)

    let token=await respuesta.json()

    let tokenDefinitivo=token.token_type+" "+token.access_token


    return(tokenDefinitivo)
}