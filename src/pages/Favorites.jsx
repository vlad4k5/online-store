import Card from "../components/Card/Card"


const Favorites = ({ items, onFavorite }) => {
    return <div className="content">
        <h1>Закладки</h1>
        <div className="sneakers">
            {items.map(i => <Card
                key={i.id} favorited={true} onFavorite={onFavorite} {...i} />)}
        </div>


    </div>
}



export default Favorites