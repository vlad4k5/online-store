import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import s from "./Drawer.module.scss"
import Info from "./Info";
import removeBtn from "../../assets/img/btn_remove.svg"
import arrowRight from "../../assets/img/arrow_right.svg"
import orderSuccess from "../../assets/img/order_success.svg"
import emptyBox from "../../assets/img/empty_box.svg"
import sneakers from "../../assets/img/1.jpg" // Заглушка кроссовок, 49 строка было item.imgUrl в src


const Drawer = ({ onClose, items = [], onRemove, setCartItems, opened }) => {

    const { cartItems } = useContext(AppContext)
    const [orderId, setOrderId] = useState(null)
    const [isOrderCompleted, setIsOrderCompleted] = useState(false)


    const cartPrice = items.reduce((sum, obj) => obj.price + sum, 0)
    const discount = Math.round(cartPrice * 0.05)
    const totalPrice = cartPrice - discount

    const onClickOrder = async () => {
        try {
            const res = await axios.post("https://60f2d6c76d44f300177887b8.mockapi.io/orders", { items: cartItems })
            setOrderId(res.data.id)
            setIsOrderCompleted(true)
            setCartItems([])
            cartItems.forEach(item => {
                axios.delete(`https://60f2d6c76d44f300177887b8.mockapi.io/cart/${item.id}`)
            }); // mockapi не позволяет очистить всю корзину одним запросом, по этому приходится удалять таким образом
        }
        catch (error) {
            alert("Не удалось создать заказ :(")
        }
    }

    return <div className={`${s.overlay} ${opened && s.overlayVisible}`} onClick={onClose}>

        <div className={s.drawer} onClick={(e) => { e.stopPropagation() }}>
            <h2 className={s.cartTitle}>Корзина <img alt="Close" src={removeBtn} onClick={onClose} /></h2>
            {items.length !== 0
                ?
                <div className={s.main}>

                    <div className={s.items}>
                        {items.map(item => <div className={s.cartItem} key={item.id}>
                            <img className={s.cartImage} alt="sneakers" src={sneakers} /> 
                            <div>
                                <p>{item.title}</p>
                                <b>{item.price} грн.</b>
                            </div>
                            <img src={removeBtn} alt="Remove" className={s.btn_remove} onClick={() => onRemove(item.id)} />
                        </div>
                        )}
                    </div>

                    <ul className={s.cartTotalBlock}>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b> {totalPrice} грн.</b>
                        </li>
                        <li>
                            <span>Скидка 5%:</span>
                            <div></div>
                            <b>{discount} грн.</b>
                        </li>
                        <button onClick={onClickOrder} className={s.btn_order}>
                            Оформить заказ<img src={arrowRight} alt="Arrow" className={s.orderArrow} />
                        </button>
                    </ul>

                </div>
                :
                isOrderCompleted
                    ? <Info
                        imgWidth={83}
                        imgHeight={120}
                        title={"Заказ оформлен!"}
                        description={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
                        onClose={onClose}
                        image={orderSuccess}
                    />
                    :
                    <Info
                        imgWidth={120}
                        imgHeight={120}
                        title={"Корзина пустая"}
                        description={"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                        onClose={onClose}
                        image={emptyBox}
                    />
            }
        </div>
    </div >
}
export default Drawer;