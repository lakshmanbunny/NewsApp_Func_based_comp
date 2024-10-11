import React from 'react'

const Newsitems =(props)=> {

    let {title,description, imgurl, newurl , publishedAt ,author ,source,pic} = props;
    return (
      <div><div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{zIndex:'1',
    left: '80%',
}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
      <img src={imgurl} className="card-img-top" alt="404" onError={pic}/>
      <div className="card-body">
        <h5 className="card-title">{title}...  <span className="badge text-bg-danger">New</span></h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className='text-body-secondary'>By {author} on {publishedAt}</small></p>
        <a href={newurl} target="_blank" rel="noreferrer"className="btn btn-outline-success">Know more</a>
      </div>
    </div>
    
    </div>
    
    )
  
}

export default Newsitems