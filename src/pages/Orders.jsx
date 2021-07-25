import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Redirect } from "react-router-dom"
import Card from "../components/Card/Card"
import Info from "../components/Drawer/Info"
import s from "../components/Drawer/Drawer.module.scss"
import LoadingCard from "../components/Card/LoadingCard"

const Orders = ({ onFavorite, onPlus }) => {

    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        try {
            (async () => {
                const res = await axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/orders")
                setIsLoading(false)
                setOrders(res.data)
            })()
        }
        catch (error) {
            alert("Не удалось получить список заказов")
        }
    }, [])

    return <div className="content">

        {isLoading && <div>
            <h1 className="page_title"><Link to="/"><img src="img/btn_back.svg" alt="Back" className="title_img" /></Link>Закладки</h1>
            <div className="sneakers">
                {[...Array(5)].map((i, index) => <LoadingCard key={index} />)}
            </div>
        </div>}

        {orders.length ? <>
            <h1 className="page_title"><Link to="/"><img src="img/btn_back.svg" alt="Back" className="title_img" /></Link>Мои покупки</h1>
            {orders.map(order => {
                const orderItems = order.items.map(
                    i => <Card
                        key={i.id}
                        onPlus={(obj) => onPlus(obj)}
                        onFavorite={(obj) => onFavorite(obj)}
                        {...i}
                    />)
                return <div key={order.id}>
                    <h3>Заказ #{order.id}</h3>
                    <div className="sneakers">
                        {orderItems}
                    </div>
                </div>
            })}
        </> : <div className={s.infoWrapper}>
            <Info
                imgWidth={70}
                imgHeight={70}
                title={"У вас нет заказов"}
                description={"Вы еще ничего не покупали"}
                image={"img/emoji_no_orders.jpg"}
                onClose={() => { <Redirect exact to="/favorites" /> }}
            />
        </div>}
    </div>
}
export default Orders