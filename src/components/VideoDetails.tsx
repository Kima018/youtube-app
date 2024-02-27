const VideoDetails = () => {
    return <div className='w-full flex flex-col gap-3'>
        <h2>AMNA x BIBA - NASLOVNA (OFFICIAL VIDEO)</h2>
        <div className='w-full flex flex-row justify-between'>
            <div className='flex'>
                <div className='w-10 h-10 rounded-full'><img src='' alt='logo'/></div>
                <div>
                    <h4>Generacija Zed </h4>
                    <p>995k followers</p>
                </div>
                <button className='px-4 h-8 rounded-2xl bg-menu-grey'>Follow</button>
            </div>
            <div id='videoDetailButtonsWrapper' className='flex flex-row justify-end gap-2'>
                <div id='like-dislike' className='flex flex-row gap-2'>
                    <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Like</button>
                    <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Dislike</button>
                </div>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Deli</button>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Preuzmi</button>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>Klip</button>
                <button className='px-4 h-8 text-sm rounded-2xl bg-menu-grey'>...</button>
            </div>
        </div>
        <div className='flex flex-col justify-start items-start'>
            <h4>575 хиљ. прегледа пре 1 месеца</h4>
            <p>Lyrics de Felicíta de Berlin dans la casa de papel.</p>
            <p>Cette musique ne m’appartient pas. C’est la propriété de la Casa de Papel. Pour toute réclamation,
                veuillez envoyer un email à : jesulaestephat1997@gmail.com</p>
        </div>
    </div>
}
export default VideoDetails