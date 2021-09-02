import ContentLoader from "react-content-loader"
import s from "./Card.module.scss"

const LoadingCard = () => {
    return window.innerWidth > 600 ? <div className={s.card}>
        <ContentLoader
            speed={2}
            width={150}
            height={187}
            viewBox="0 0 150 187"
            backgroundColor="#f2f2f2"
            foregroundColor="#ecebeb"
        >
            <rect x="534" y="113" rx="0" ry="0" width="88" height="71" />
            <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
            <rect x="0" y="105" rx="3" ry="3" width="150" height="15" />
            <rect x="0" y="125" rx="3" ry="3" width="90" height="15" />
            <rect x="0" y="155" rx="8" ry="8" width="80" height="25" />
            <rect x="118" y="150" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
    </div>: null
}
export default LoadingCard