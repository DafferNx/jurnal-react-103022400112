import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'



function App() {
  const nama = "Filbert";
  const N = 12;
  const jam = 9;

  const styleObj = {
    color: "black",
    fontSize: 30
  }

  return (
    <>
      <h1 className='judul' style={{color: styleObj.color, fontSize: styleObj.fontSize}}>Kantin {nama}</h1>
      <h3>{jam < 12 ? "Selamat Pagi" : "Selamat Siang"}</h3>
      <p>Saldo awal kartu kantin: Rp.{N * 1000}</p>
      <button disabled>Bayar</button>
    </>  
  )
}

export default App
