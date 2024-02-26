const PlayVideo=({videoId})=> {
  return  <div className=' video-iframe lg:col-span-2 col-span-3 '>
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen className='w-full h-full'></iframe>
    </div>
}

export default PlayVideo