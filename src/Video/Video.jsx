import { useState } from 'react';
import './Video.css'

function Video(props) {
    const { title, channelName, img} = props;
    const[likesCount, setLikesCount] = useState(0)
    const increaseLikesByOne = () => {
      setLikesCount(likesCount + 1)
    }
    return (
        <div className='video-container'>
        <div className='video'>
        <img className='video-img' src={img} alt="123" />
        <p>{channelName}</p>
        <p>{ title}</p>
        <div className='video-footer'>
          <p>Like: {likesCount}</p>
          <button onClick={increaseLikesByOne}>Like!</button>
        </div>
        </div>
      </div>
    );
}

export default Video