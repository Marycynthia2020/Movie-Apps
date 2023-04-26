import Card from "./Card"

const CardGrid = ({data}) =>{
    return(
      <div className="movie-grid">
      {data &&
        data.map((items) => <Card key={items.episode_id} items={items}/>)}
    </div>
    )
}

export default CardGrid