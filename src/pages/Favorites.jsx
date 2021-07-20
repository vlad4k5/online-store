import { useContext } from "react"
import { AppContext } from "../App"
import Card from "../components/Card/Card"


const Favorites = ({ onFavorite }) => {
    const { favorites } = useContext(AppContext)


    return <div className="content">
        <h1>Закладки</h1>
        <div className="sneakers">
            {favorites.map(i => <Card
                key={i.id} favorited={true} onFavorite={onFavorite} {...i} />)}
        </div>


    </div>
}



export default Favorites