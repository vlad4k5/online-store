import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { AppContext } from '../App'
import Card from '../components/Card/Card'
import Info from '../components/Drawer/Info'
import s from '../components/Drawer/Drawer.module.scss'
import LoadingCard from '../components/Card/LoadingCard'
import backBtn from '../assets/img/btn_back.svg'
import emojiNoFavorites from '../assets/img/emoji_no_favorites.jpg'

const Favorites = ({ onFavorite, onPlus, isLoading }) => {
  const { favorites } = useContext(AppContext)

  return (
    <div className="content">
      {isLoading && (
        <div>
          <h1 className="page_title">
            <Link to="/">
              <img src={backBtn} alt="Back" className="title_img" />
            </Link>
            Закладки
          </h1>
          <div className="sneakers">
            {[...Array(5)].map((i, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        </div>
      )}

      {favorites.length ? (
        <>
          <h1 className="page_title">
            <Link to="/">
              <img src={backBtn} alt="Back" className="title_img" />
            </Link>
            Закладки
          </h1>
          <div className="sneakers">
            {favorites.map(i => (
              <Card
                key={i.id}
                favorited={true}
                onFavorite={onFavorite}
                onPlus={obj => onPlus(obj)}
                {...i}
              />
            ))}
          </div>
        </>
      ) : (
        <div className={s.infoWrapper}>
          <Info
            imgWidth={70}
            imgHeight={70}
            title={'Закладок нет :('}
            description={'Вы ничего не добавляли в закладки'}
            image={emojiNoFavorites}
            onClose={() => <Redirect to="/" />}
          />
        </div>
      )}
    </div>
  )
}
export default Favorites
