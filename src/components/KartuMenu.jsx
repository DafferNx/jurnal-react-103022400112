import App from "../App";
import LabelHarga from "./LabelHarga";
import { useState } from "react";



function CardMenu({nama, kategori, harga}){
    const [jumlah, setJumlah] = useState(0);
    const [catatan, setCatatan] = useState("");

    return(
        <div>
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga nilai={harga}/>
            <button onClick={() => setJumlah(jumlah-1)}>-</button>
            <p>{jumlah}</p>
            <button onClick={() => setJumlah(jumlah+1)}>+</button>
            <p>{jumlah === 0 ? "Belum Dipesan" : "Subtotal Rp."} {jumlah === 0 ? "" :harga * jumlah}</p>
            <p>Catatan Pesanan <input type="text" name="" id="" /></p>
            <p>Catatan: {}</p>
        </div>
    );
}

export default CardMenu;