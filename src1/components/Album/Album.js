import React from 'react'

const Album = props => {
    console.log(props)
    return (
        <div className="card" style= {{ width: '18rem' }}>
            <img src={props.song.poster} className="card-img-top" alt={props.song.artist} />
            <div className="card-body">
                <h5 className="card-title">{props.song.artist}</h5>
                <p className="card-text">{props.song.name}</p>
            </div>
        </div> 
    )
}

export default Album