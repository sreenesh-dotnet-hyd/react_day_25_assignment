export default function Card({id, title, authorName}){
    return(<div className="card-container">
        <span className="card-title">
            {title}
        </span>
        <span className="card-author">
           by {authorName}
        </span>
        <span className="card-id"> 
            Book ID: <span className="id-bold">{id}</span>
        </span>
         <span className="card-rating"> 
            Book Rating: <span className="id-bold">5</span>
        </span>
        <span className="card-rating"> 
            Published: <span className="id-bold">2025</span>
        </span>
    </div>)
}