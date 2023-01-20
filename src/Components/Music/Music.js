import { useState,useEffect } from "react"
import{servicioCancionesTop} from "../../services/servicioCanciones"

export function Music() { 
    //Estamos usando el usestate para almacenar  la repuesta
    // del api de  forma global
    const[canciones, setCanciones]=useState(null)
    const[estadocarga,setEstadoCarga]=useState(true)

    //Usando el useEffect para evitar el consumo
    //del api una sola vez
    useEffect(function(){
        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
        })    
    },[])

    //render del componente
    if (estadocarga === true){
        return(
            <>
                <h2 className="text-center py-3">Estamos Cargando la Canciones</h2>
            </>
        )
    }else{
        return(
            <>
                <h2 className="text-center py-3">Canciones de la banda</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {
                            canciones.tracks.map(function(cancion, index){
                                return(
                                    <div key={index}>
                                        <div className="col">
                                            <div className="card h-100 shadow">
                                                <img src={cancion.album.images[0].url} className="h-100 img-fluid w-100" alt="imageMusic"></img>
                                                <div className="p-2 text-center">
                                                    <h3>{cancion.name}</h3>
                                                    <h5>Popularidad {cancion.popularity}</h5>
                                                    <audio controls src={cancion.preview_url}></audio>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>    
            </>
        )
    }
}