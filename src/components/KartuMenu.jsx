import App from "../App";
import LabelHarga from "./LabelHarga";

function CardMenu({nama, kategori, harga}){
    return(
        <div>
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga nilai={harga}/>
        </div>
    );
}

export default CardMenu;