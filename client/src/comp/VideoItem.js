import React from 'react';
import './vi.css';
const VideoItem = ({vid, onVideoSelect}) =>{

    
    
    return (
    
    <div className="video-item item">
        <img className="ui image"src={vid.snippet.thumbnails.medium.url}/>
        <div className="content">
        <div className="header">  {vid.snippet.title}</div>
        <div className="description">Updated 10 mins ago</div>
        </div>


    </div>);

};

export default VideoItem;