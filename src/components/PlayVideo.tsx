const PlayVideo=({videoId})=> {
  return  <div className='bg-red-600 h-56 w-full col-span-3 lg:col-span-2'>
        <iframe width="1182" height="665" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
    </div>
}

export default PlayVideo