import background from './background.jpg'


function GetInTouch() {

    return (
        <div className='px-10 w-full h-80  flex flex-col justify-center items-center'>
            <img src={background} className="absolute w-full h-full -z-10" alt="" />
            <h1 className=' font-poppins font-normal text-3xl text-white'>Let us help you create a strong online presence for your business. </h1>
            <p className='pt-2 font-poppins font-thin text-md text-white'> Contact us today and take your business to the next level.</p>
            <button className='mt-10 p-3 pl-8 pr-8 bg-blue-400 rounded-full text-black text-xl font-normal hover:bg-blue-700 hover:text-gray-400 transition-colors'>Get in Touch</button>
        </div>
    )
}

export default GetInTouch