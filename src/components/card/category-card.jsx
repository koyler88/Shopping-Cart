import './category-card.css'

function CategoryCard({src, category}) {
    return (
        <div className="container">
            <div className="image-container">
                <img className="category-img" src={src} alt=""/>
                <p className="overlay-category-text">{category}</p>
            </div>
        </div>
    )
}

export default CategoryCard;