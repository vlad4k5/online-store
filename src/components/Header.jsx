


const Header = () => {
    return <header>
        <div className="headerLeft">
            <img className="imgLogo" alt="imgLogo" src={"/img/logo.png"} />
            <div className="headerInfo">
                <h3>React-Sneakers</h3>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
        <ul className="headerRight">
            <li><img src={"/img/cart.svg"} alt="cart" /><span>1205 руб.</span></li>
            <li><img width={32} height={32} src={"/img/user.png"} alt="user" /></li>
        </ul>
    </header>
}

export default Header;