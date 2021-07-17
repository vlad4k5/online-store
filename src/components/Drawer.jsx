

const Drawer = ({ onClose, items = [] }) => {
    console.log(items)


    return <div className="overlay">
        <div className="drawer">
            <h2 className="cart">Корзина <img alt="Close" src={"/img/btn_remove.svg"} onClick={onClose} /></h2>


            <div className="items">
                {items.map(item => <div className="cartItem">
                    <img className="cartImage" alt="sneakers" src={item.imgUrl} />
                    <div>
                        <p>{item.title}</p>
                        <b>{item.price} руб.</b>
                    </div>

                    <img src={"/img/btn_remove.svg"} alt="Remove" className="btn_remove" />
                </div>
                )}

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