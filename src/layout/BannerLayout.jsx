import bgImage from '../assets/images/background.png'
const BannerLayout = ({ children }) => {
    return (
        <div
            className="relative backdrop-blur-sm w-full h-80 bg-fixed z-10"
            style={{
                background: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-green-700/5 backdrop-blur-sm w-full h-full border border-green-700 rounded-md">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BannerLayout