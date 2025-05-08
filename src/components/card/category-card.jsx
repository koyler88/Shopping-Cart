import './category-card.css'

function CategoryCard({src, category, onClick, value}) {
    return (
        <div onClick={onClick} data-value={value} className="container">
            <div className="image-container">
                <img className="category-img" src={src} alt=""/>
                <p className="overlay-category-text">{category}</p>
            </div>
        </div>
    )
}

export default CategoryCard;