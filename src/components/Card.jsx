const Card = ({items}) =>{
    return(
        <div className="movie">
        <a href="/#" className="title-link">
          {items.title}
        </a>
        <p className="date">
          {new Date(items.release_date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p className="opening-crawl">
          {items.opening_crawl.split(" ").splice(0, 33).join(" ")}...
        </p>
        <a className="more-info" href="/#">
          More Info
        </a>
      </div>
    )
}

export default Card