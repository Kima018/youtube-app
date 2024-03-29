const PlayVideo=({videoId})=> {
  return  <div className=' video-iframe'>
        <iframe  src={`https://www.youtube.com/embed/${videoId}?`}
                title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen className='w-full h-full'></iframe>
    </div>
}

export default PlayVideo