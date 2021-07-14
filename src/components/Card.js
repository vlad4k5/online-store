import heart_unliked from "../assets/img/heart_unliked.svg"
import sneakers1 from "../assets/sneakers/1.jpg"
import plus from "../assets/img/plus.svg"



const Card = () => {
    return <div className="card">
        <img src={heart_unliked} alt="Heart Unliked" className="favorite" />
        <img width={133} height={112} alt="Sneakers" src={sneakers1} />
        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div className="card_Bottom">

            <div>
                <p className="card_Bottom-price">ЦЕНА:</p>
                <b>12 999 руб.</b>
            </div>
            <div>
                <img width={32} height={32} src={plus} alt="add item" className="plus" />
            </div>
        </div>
    </div>
}

export default Card