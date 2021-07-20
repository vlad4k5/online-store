import { useContext, useState } from "react"
import { AppContext } from "../../App"
import s from "./Card.module.scss"


const Card = ({ id, itemId, price, title, imgUrl, onFavorite, onPlus }) => {

    const { isItemAdded, isItemFavorite } = useContext(AppContext)


    const onClickPlus = () => {
        onPlus({ price, title, imgUrl, itemId })
    }

    const onClickFavorite = () => {
        onFavorite({ price, title, imgUrl, itemId });
    }


    console.log(isItemFavorite(itemId))


    return <div className={s.card}>

        <img
            src={isItemFavorite(itemId) ? "/img/liked.svg" : "/img/unliked.svg"}
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
                <img onClick={onClickPlus} width={32} height={32} src={isItemAdded(itemId) ? "/img/btn_checked.svg" : "/img/plus.svg"} alt="add item" className={s.plus} />
            </div>
        </div>



    </div>
}

export default Card