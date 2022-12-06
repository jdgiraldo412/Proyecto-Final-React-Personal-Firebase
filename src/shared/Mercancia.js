import { Footer } from "../shared/Footer/Footer"

export function Mercancia(){

let titulo="Productos de la banda..."

let producto=[
    {
        nombre:"Bolsa origial",
        foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/2.jpg?alt=media&token=332171c6-2d12-42d8-9776-bbaa56c1e81f",
        precio:40
    },
    {
        nombre:"LLavero de one direction",
        foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/3.jpg?alt=media&token=55a45b90-0e82-4132-8bc4-5c3288355b9b",
        precio: 55   
    },
    {
        nombre:"Pulsera de one direction",
        foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/4.jpg?alt=media&token=ff690ad4-8e87-471f-b92d-aabcfe4a91c0",
        precio: 10
    },
    {
        nombre:"Stickers de la banda",
        foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/5.jpg?alt=media&token=1c519343-a722-4c0b-812f-f11335315867",
        precio: 55
    },
    {
        nombre:"llaveros de la Banda",
        foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/6.jpg?alt=media&token=82dec0fc-1f40-4e5c-a75d-d8e256fd6995",
        precio: 70
    },
    {
        nombre:"Acesorios gorras y demas",
        foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/los-fans-de-una-direccion-que-asistieron-a-la-inauguracion-de-1d-de-todo-el-mundo-un-pop-up-en-la-tienda-de-mercancia-con-02-arena-atmosfera-ventilador-donde-londres-reino-unido-cuando-28-de-marzo-de-2013-.jpg?alt=media&token=ec3568fb-cc28-4671-9dd9-4d00af030872",
        precio: 70
    }
]

    return(
        <>
        <h1>{titulo}</h1>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-5">
                
                {
                    producto.map(function(producto){
                        return(
                            <>
                            <div class="col">
                                <div class="card h-100 shadow">
                                    <img src={producto.foto} alt="" class="h-100 img-fluid w-100"></img>
                                    <hr/>
                                    <h3 class="pb-2 text-center">{producto.nombre}</h3>
                                    <h4 class="pb-2 text-center">precio{producto.precio}</h4>
                                </div>
                            </div>
                            </>
                        )
                    })
                }

            </div>
            <Footer/>
        </div>
        </>
    )
}