import Card from "../components/Card/Card"
import LoadingCard from "../components/Card/LoadingCard"
import searchIcon from "../assets/img/search.svg"
import removeBtn from "../assets/img/btn_remove.svg"


const Home = ({ searchValue, items, onAddToFavorites, onAddToCart, setSearchValue, onChangeSearchInput, isLoading }) => {

    return <div className="content">

        <div className="search-wrapper">
            <div>
                <h1 id="content-title">{searchValue ? `Поиск по "${searchValue}":` : "Все кроссовки"}</h1>
            </div>
            <div className="search-block">
                <img alt="Search" className="search" src={searchIcon} />
                {searchValue && <img alt="Delete" src={removeBtn} className="clearSearch" onClick={() => setSearchValue("")} />}
                <input placeholder="Поиск..." onChange={onChangeSearchInput} value={searchValue} />
            </div>
        </div>


        <div className="sneakers">
            {isLoading ? [...Array(10)].map((i, index) => <LoadingCard key={index} />) : items.filter(i => i.title.toLowerCase().includes(searchValue.toLowerCase())).map(i =>
                <Card
                    key={i.itemId}
                    onFavorite={(obj) => { onAddToFavorites(obj) }}
                    onPlus={(obj) => onAddToCart(obj)}
                    {...i}
                />)}
        </div>
    </div>
}
export default Home