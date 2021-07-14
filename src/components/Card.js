



const Card = (props) => {

    console.log(props)
    return <div className="card">
        <img src={"/img/heart_unliked.svg"} alt="Heart Unliked" className="favorite" />
        <img width={133} height={112} alt="Sneakers" src={props.imgUrl} />
        <p>{props.title}</p>
        <div className="card_Bottom">

            <div>
                <p className="card_Bottom-price">ЦЕНА:</p>
                <b>{props.price} руб.</b>
            </div>
            <div>
                <img width={32} height={32} src={"/img/plus.svg"} alt="add item" className="plus" />
            </div>
        </div>
    </div>
}

export default Card