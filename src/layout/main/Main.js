import Topbar from '../topbar/Topbar'
import Footer from '../footer/Footer'

const Main = ({ children }) => {
    return (
        <>
            <Topbar />
            <div className='content'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Main