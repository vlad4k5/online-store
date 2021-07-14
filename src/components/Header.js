import logo from "../assets/img/logo.png"
import cart from "../assets/img/cart.svg"
import user from "../assets/img/user.png"



const Header = () => {
    return <header>
        <div className="headerLeft">
            <img className="imgLogo" alt="imgLogo" src={logo} />
            <div className="headerInfo">
                <h3>React-Sneakers</h3>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
        <ul className="headerRight">
            <li><img src={cart} alt="cart" /><span>1205 руб.</span></li>
            <li><img width={32} height={32} src={user} alt="user" /></li>
        </ul>
    </header>
}

export default Header;