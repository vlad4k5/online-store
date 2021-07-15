import s from "./Card.module.scss"


const Card = ({ price, title, imgUrl }) => {
    const onClickPlus = () => {
        alert("hello")
    }

    return <div className={s.card}>
        <img src={"/img/heart_unliked.svg"} alt="Heart Unliked" className={s.favorite} />
        <img width={133} height={112} alt="Sneakers" src={imgUrl} />
        <p>{title}</p>
        <div className={s.card_Bottom}>

            <div>
                <p className={s.card_Bottom - price}>ЦЕНА:</p>
                <b>{price} руб.</b>
            </div>
            <div>
                <img onClick={onClickPlus} width={32} height={32} src={"/img/plus.svg"} alt="add item" className={s.plus} />
            </div>
        </div>
    </div>
}

export default Card