import React from 'react'
import logostargame from '../assets/img/logostargame.png';
const Hero = () => {
  return (
    <>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <img className='w-23 cursor-pointer' src={logostargame}alt=''/>
    <div>
      <h1 className="text-5xl font-bold">¡Bienvenido a Perlas y pelusas!</h1>
      <p className="py-6">En Perlas y pelusas, estamos comprometidos con ofrecerte todo lo que necesitas para plasmar tus ideas en papel y hacer realidad tus proyectos. Ya sea que estés estudiando, trabajando en un proyecto creativo o necesites suministros de oficina, aquí encontrarás una amplia selección de productos de alta calidad a precios competitivos.</p>
      <button className="btn btn-primary">Comprar</button>
    </div>
  </div>
</div>
     </>
  
  )
}
export default Hero