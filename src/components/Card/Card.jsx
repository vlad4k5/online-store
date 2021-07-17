import { useState } from "react"
import s from "./Card.module.scss"


const Card = ({ price, title, imgUrl, onFavorite, onPlus }) => {

    const [isLiked, setIsLiked] = useState(false)
    const [isAdded, setIsAdded] = useState(false)



    const onClickPlus = () => {
        onPlus({ price, title, imgUrl })
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        setIsLiked(!isLiked)
    }

    console.log(isLiked);



    return <div className={s.card}>
        <img
            src={isLiked ? "/img/liked.svg" : "/img/unliked.svg"}
            alt="Heart Unliked"
            className={s.favorite}
            onClick={onClickFavorite}
        />
        <img width={133} height={112} alt="Sneakers" src={imgUrl} />
        <p>{title}</p>
        <div className={s.card_Bottom}>

            <div>
                <p className={s.card_Bottom_price}>ЦЕНА:</p>
                <b>{price} руб.</b>
            </div>
            <div>
                <img onClick={onClickPlus} width={32} height={32} src={isAdded ? "/img/btn_checked.svg" : "/img/plus.svg"} alt="add item" className={s.plus} />
            </div>
        </div>
    </div>
}

export default Card