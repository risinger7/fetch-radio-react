

export default function Stations({ data, search }) {

    const radioData = data

    return (
        <div> 
          {radioData.filter((object) => {   
            return search.toLowerCase() === ""
            ? object
            : object.name.toLowerCase().includes(search)
          }).map((object) => (
            <li style={{backgroundColor: `#${object.color}`}} className="flex width" key={object.id}>
              <img width="200px" src={object.image} alt="image" />
              <div className="flex-col" style={{backgroundColor: `#${object.color}`}} >
                <h1>{object.name}</h1> 
                <audio className="audio" controls src={object.liveaudio.url} type="audio/mpeg" />
            
              </div>    
            </li>
          ))}
      </div>
    )
}