

const Drawer = () => {
    return <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">
            <h2 className="cart">Корзина <img src={"/img/btn_remove.svg"} /></h2>


            <div className="items">
                <div className="cartItem">
                    <img className="cartImage" alt="sneakers" src={"/img/sneakers/1.jpg"} />
                    <div>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12999 руб.</b>
                    </div>

                    <img src={"/img/btn_remove.svg"} alt="Remove" className="btn_remove" />
                </div>
            </div>



            <ul className="cartTotalBlock">
                <li>
                    <span>Итого:</span>
                    <div></div>
                    <b> 21 498 руб.</b>
                </li>
                <li>
                    <span>Скидка 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                </li>
                <button className="btn_order">Оформить заказ<img src={"/img/arrow.svg"} alt="Arrow" className="orderArrow" /></button>
            </ul>
        </div>
    </div >
}

export default Drawer;