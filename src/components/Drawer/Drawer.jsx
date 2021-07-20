import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import s from "./Drawer.module.scss"
import Info from "./Info";

const Drawer = ({ onClose, items = [], onRemove, setCartItems }) => {

    const { cartItems } = useContext(AppContext)
    const [orderId, setOrderId] = useState(null)
    const [isorderComleted, setIsOrderCompleted] = useState(false)

    const onClickOrder = async () => {
        try {
            debugger
            const res = await axios.post("https://60f2d6c76d44f300177887b8.mockapi.io/orders", { items: cartItems });
            console.log(res.data)
            setOrderId(res.data.id)
            setIsOrderCompleted(true)
            setCartItems([])
            cartItems.forEach(item => {
                axios.delete(`https://60f2d6c76d44f300177887b8.mockapi.io/cart/${item.id}`)
            });
        }
        catch (error) {
            alert("Не удалось создать заказ :(")
        }
    }


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
                        <button onClick={onClickOrder} className={s.btn_order}>Оформить заказ<img src={"/img/arrow_right.svg"} alt="Arrow" className={s.orderArrow} /></button>
                    </ul>

                </div>
                :
                isorderComleted
                    ? <Info
                        imgWidth={83}
                        imgHeight={120}
                        title={"Заказ оформлен!"}
                        description={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
                        onClose={onClose}
                        image="/img/order_success.svg"
                    />
                    :
                    <Info
                        imgWidth={120}
                        imgHeight={120}
                        title={"Корзина пустая"}
                        description={"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                        onClose={onClose}
                        image="/img/empty_box.svg"
                    />
            }


        </div>
    </div >
}

export default Drawer;