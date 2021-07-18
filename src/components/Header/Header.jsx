import { Link } from "react-router-dom";
import s from "./Header.module.scss"


const Header = ({ onClickCart }) => {
    return <header>
        <Link to="/">
            <div className={s.headerLeft}>
                <img className={s.imgLogo} alt="imgLogo" src={"/img/logo.png"} />
                <div className={s.headerInfo}>
                    <h3>React-Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
        </Link>
        <ul className={s.headerRight}>
            <li onClick={onClickCart} ><img src={"/img/cart.svg"} alt="cart" /><span>1205 руб.</span></li>
            <li><Link to="/favorites"><img src={"/img/heart.svg"} alt="heart" /></Link></li>
            <li><img src={"/img/user.png"} alt="user" /></li>
        </ul>
    </header>
}

export default Header;