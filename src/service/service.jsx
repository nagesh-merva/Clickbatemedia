import portfolio from './portfolio.svg'
import Cards from './cards.jsx'
function Service() {
    return (
        <div className="flex flex-col w-full items-center bg-customblue pt-30 p-4 md:p-20">
            <div className='flex flex-col md:flex-row'>
                <div className="pt-10 w-full justify-center md:w-1/2 h-auto pl-10">
                    <h3 className="pt-5 font-semibold text-sm font-poppins text-white text-center md:text-left">ABOUT US</h3>
                    <h1 className="pt-5 text-4xl font-poppins font-normal text-white text-center md:text-left">Who are We?</h1>
                    <p className="pt-10 text-sm font-poppins font-thin text-white text-preety">Welcome to Clickbate Media, where creativity meets innovation. We are a passionate team of designers, developers, and strategists dedicated to bringing your ideas to life. Our mission is to help brands grow and thrive in the digital landscape by providing high-quality, tailored solutions that meet your unique needs.</p>
                    <button className="mt-20 pr-5 p-2 pl-5 rounded-full bg-blue-950 font-poppins text-md text-white hover:bg-indigo-500 transition-colors">Learn More About Us</button>
                </div>
                <div className="w-full md:w-1/2 md:pl-10 h-auto flex justify-center items-center">
                    <div className="col-lg-6 pt-16 pb-16 o_colored_level">
                        <img
                            src={portfolio}
                            alt="Portfolio"
                            className="img img-fluid mx-auto o_we_custom_image"
                            data-shape="web_editor/geometric_round/geo_round_blob_medium"
                            data-shape-colors=";;;;"
                            data-mimetype="image/svg+xml"
                            data-original-id="360"
                            data-original-src="/unsplash/zwsHjakE_iI/portfolio.jpg?unique=fc30fe0f"
                            data-mimetype-before-conversion="image/jpeg"
                            data-original-mimetype="image/webp"
                            data-resize-width="690"
                            data-file-name="portfolio.svg"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <Cards />
            </div>
        </div>
    );
}

export default Service;
