import { Footer } from "../shared/Footer/Footer";
import { useNavigate } from "react-router-dom";

export function Mercancia() {

//Activamos la navegacion entre componentes cuando se de un evento
let navegante=useNavigate()

//que hago cuando se de el evento
    function detectarEvento(productoSeleccionado){

        navegante("/tienda",{
            state:{productoSeleccionado}
        })
        
    }

  let titulo = "Productos de la banda...";

  let producto = [
    {
      nombre: "Buso Original",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/producto1.png?alt=media&token=fd383981-a19f-4f7b-842d-c48702d565dd",
      precio: 40,
    },
    {
      nombre: "Pocillo Gorrilaz",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/producto2.jpg?alt=media&token=7bb83300-5fe6-48f9-aa09-acae981b2d0b",
      precio: 55,
    },
    {
      nombre: "Gorra original",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/producto3.png?alt=media&token=e023517d-79c4-4daf-98c0-bc7d55fceffa",
      precio: 10,
    },
    {
      nombre: "Buso con Gorro",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/producto4.jpg?alt=media&token=3cbf199e-08b3-4f23-b967-5b9ecedd0725",
      precio: 55,
    },
    {
      nombre: "Tennis",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/producto5.jpg?alt=media&token=178add6a-73fb-406d-890a-479f043b99c5",
      precio: 70,
    },
    {
      nombre: "Carcasa para el Celular",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/producto6.jpg?alt=media&token=283df918-fab3-44bc-a011-a09b906c4df2",
      precio: 70,
    },
  ];

  return (
    <>
      <h1>{titulo}</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5">


          {producto.map(function (producto,id) {
            return (
              <div key={id}>
                <div className="col">
                  <div className="card h-100 shadow">

                    
                    <img src={producto.foto}alt="foto"className="h-100 img-fluid w-100"></img>

                    <button className="btn btn-primary mx-5 my-3" onClick={
                        function(){
                            detectarEvento(producto)
                        }}>Ampliar</button>



                    <hr />
                    <h3 className="pb-2 text-center">{producto.nombre}</h3>
                    <h4 className="pb-2 text-center">
                      precio{producto.precio}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}
