import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import s from "./Header.module.scss"
import logo from "../../assets/img/logo.png"
import cart from "../../assets/img/cart.svg"
import heart from "../../assets/img/heart.svg"
import user from "../../assets/img/user.png"
const Header = ({ onClickCart }) => {

    const { cartItems } = useContext(AppContext)
    const cartTotalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    return <header>
        <Link to="">
            <div className={s.headerLeft}>
                <img className={s.imgLogo} alt="Logo" src={logo} />
                <div className={s.headerInfo}>
                    <h3>React-Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
        </Link>
        <ul className={s.headerRight}>
            <li onClick={onClickCart} ><img src={cart} alt="cart" /><span>{cartTotalPrice ? `${cartTotalPrice} грн.` : null} </span></li>
            <li><Link to="/favorites"><img src={heart} alt="heart" /></Link></li>
            <li><Link to="/orders"><img src={user} alt="user" /></Link></li>
        </ul>
    </header>
}
export default Header;