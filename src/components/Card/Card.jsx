import { useContext } from "react"
import { AppContext } from "../../App"
import s from "./Card.module.scss"
import liked from "../../assets/img/liked.svg" 
import unliked from "../../assets/img/unliked.svg" 
import plus from "../../assets/img/plus.svg" 
import checkedBtn from "../../assets/img/btn_checked.svg" 

const Card = ({ itemId, price, title, imgUrl, onFavorite, onPlus }) => {

    const { isItemAdded, isItemFavorite } = useContext(AppContext)

    const onClickPlus = () => {
        onPlus({ price, title, imgUrl, itemId })
    }

    const onClickFavorite = () => {
        onFavorite({ price, title, imgUrl, itemId });
    }


    return <div className={s.card}>

        <img
            src={isItemFavorite(itemId) ? liked : unliked}
            alt="Unliked"
            className={s.favorite}
            onClick={onClickFavorite}
        />

        <img className={s.sneakersImg} width={133} height={112} alt="Sneakers" src={imgUrl} />

        <p>{title}</p>

        <div className={s.card_Bottom}>

            <div>
                <p className={s.card_Bottom_price}>ЦЕНА:</p>
                <b>{price} грн.</b>
            </div>
            <div>
                <img onClick={onClickPlus} width={32} height={32} src={isItemAdded(itemId) ? checkedBtn : plus} alt="add item" className={s.plus} />
            </div>
        </div>

    </div>
}
export default Card