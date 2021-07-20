import axios from "axios"
import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"

import Card from "../components/Card/Card"
import Info from "../components/Drawer/Info"

import s from "../components/Drawer/Drawer.module.scss"


const Orders = () => {

    const [orders, setOrders] = useState([])



    useEffect(() => {
        (async () => {
            const res = await axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/orders")
            debugger
            console.log(res)
            setOrders(res.data)
        })()
    }, [])

    console.log(orders)

    return <div className="content">
        {orders.length ? <>
            <h1>Мои покупки</h1>
            {orders.map(order => {
                const orderItems = order.items.map(o => <Card key={o.id} {...o} />)
                return <div>
                    <h3>Заказ #{order.id}</h3>
                    <div className="sneakers">
                        {orderItems}
                    </div><hr />
                </div>
            })}
        </> : <div className={s.infoWrapper}>
            <Info
                imgWidth={70}
                imgHeight={70}
                title={"У вас нет заказов"}
                description={"Вы еще ничего не покупали"}
                image={"/img/emoji_no_orders.jpg"}
                onClose={() => { <Redirect exact to="/favorites" /> }}
            />
        </div>}

    </div>
}


export default Orders