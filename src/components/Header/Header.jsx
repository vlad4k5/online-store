import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import s from "./Header.module.scss"

const Header = ({ onClickCart }) => {

    const { cartItems } = useContext(AppContext)
    const cartTotalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    return <header>
        <Link to="">
            <div className={s.headerLeft}>
                <img className={s.imgLogo} alt="Logo" src={"img/logo.png"} />
                <div className={s.headerInfo}>
                    <h3>React-Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
        </Link>
        <ul className={s.headerRight}>
            <li onClick={onClickCart} ><img src={"img/cart.svg"} alt="cart" /><span>{cartTotalPrice ? `${cartTotalPrice} грн.` : null} </span></li>
            <li><Link to="/favorites"><img src={"img/heart.svg"} alt="heart" /></Link></li>
            <li><Link to="/orders"><img src={"img/user.png"} alt="user" /></Link></li>
        </ul>
    </header>
}
export default Header;