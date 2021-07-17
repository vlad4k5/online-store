import s from "./Drawer.module.scss"

const Drawer = ({ onClose, items = [], onRemove }) => {
    console.log(items)


    return <div className={s.overlay}>
        <div className={s.drawer}>
            <h2 className={s.cart}>Корзина <img alt="Close" src={"/img/btn_remove.svg"} onClick={onClose} /></h2>
            {items.length !== 0
                ?
                <div className={s.main}>

                    <div className={s.items}>
                        {items.map(item => <div className={s.cartItem} key={item.id}>
                            <img className={s.cartImage} alt="sneakers" src={item.imgUrl} />
                            <div>
                                <p>{item.title}</p>
                                <b>{item.price} руб.</b>
                            </div>

                            <img src={"/img/btn_remove.svg"} alt="Remove" className={s.btn_remove} onClick={() => onRemove(item.id)} />
                        </div>
                        )}

                    </div>



                    <ul className={s.cartTotalBlock}>
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
                        <button className={s.btn_order}>Оформить заказ<img src={"/img/arrow_right.svg"} alt="Arrow" className={s.orderArrow} /></button>
                    </ul>

                </div>
                :
                <div className={s.emptyCart}>
                    <img alt="Empty Box" src="/img/empty_box.svg" width={120} height={120} />
                    <h2>Корзина пустая</h2>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <button onClick={onClose}><img alt="Arrow" src="/img/arrow_left.svg" className={s.arrow} />Вернуться назад</button>
                </div>

            }


        </div>
    </div >
}

export default Drawer;