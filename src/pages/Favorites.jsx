import { useContext } from "react"
import { Redirect } from "react-router-dom"
import { AppContext } from "../App"
import Card from "../components/Card/Card"
import Info from "../components/Drawer/Info"
import s from "../components/Drawer/Drawer.module.scss"

const Favorites = ({ onFavorite }) => {
    const { favorites } = useContext(AppContext)


    return <div className="content">

        {favorites.length ? <>
            <h1>Закладки</h1>
            <div className="sneakers">
                {favorites.map(i => <Card
                    key={i.id} favorited={true} onFavorite={onFavorite} {...i} />)}
            </div>
        </>
            :
            <div className={s.infoWrapper}>
                <Info
                    imgWidth={70}
                    imgHeight={70}
                    title={"Закладок нет :("}
                    description={"Вы ничего не добавляли в закладки"}
                    image={"/img/emoji_no_favorites.jpg"}
                    onClose={() => <Redirect to="/" />}
                />
            </div>
        }


    </div>
}



export default Favorites