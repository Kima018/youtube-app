export const PageContent = ({title,children})=>{
return(
    <div className='text-red-600'>
        <h1 className='text-3xl'>{title}</h1>
        {children}
    </div>
)
}