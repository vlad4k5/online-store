import btn_checked from "../assets/img/btn_checked.svg"
import btn_remove from "../assets/img/btn_remove.svg"
import arrow from "../assets/img/arrow.svg"

import sneakers1 from "../assets/sneakers/1.jpg"
import sneakers2 from "../assets/sneakers/2.jpg"
import sneakers3 from "../assets/sneakers/3.jpg"
import sneakers4 from "../assets/sneakers/4.jpg"
import sneakers5 from "../assets/sneakers/5.jpg"

const Drawer = () => {
    return <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">
            <h2 className="cart">Корзина <img src={btn_remove} /></h2>


            <div className="items">
                <div className="cartItem">
                    <img className="cartImage" alt="sneakers" src={sneakers1} />
                    <div>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12999 руб.</b>
                    </div>

                    <img src={btn_remove} alt="Remove" className="btn_remove" />
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
                <button className="btn_order">Оформить заказ<img src={arrow} alt="Arrow" className="orderArrow" /></button>
            </ul>
        </div>
    </div >
}

export default Drawer;