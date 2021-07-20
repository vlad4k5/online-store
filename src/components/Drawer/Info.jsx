import s from "./Drawer.module.scss"



const Info = ({ imgWidth, imgHeight, title, description, onClose, image }) => {
    return <div className={s.emptyCart}>
        <img alt="Empty Box" src={image} width={imgWidth} height={imgHeight} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClose}><img alt="Arrow" src="/img/arrow_left.svg" className={s.arrow} />Вернуться назад</button>
    </div>
}


export default Info