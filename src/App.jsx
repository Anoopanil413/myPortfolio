
import './App.css'
import Background from './components/home/Background'
import Banner from './components/home/Banner'
import Contact from './components/home/Contact'
import MyExpertise from './components/home/MyExpertise'
import Footer from './layout/Footer'
import Layout from './layout/layout'

function App() {

  return (
    <>
      <Layout>
        <div className="Home-Page -z-10">
          <Banner />
          <div className="p-4">

            <MyExpertise />
          </div>

          <div className='p-4'>
            <Contact />

          </div>
          <div className='p-4'>
            <Background />

          </div>

          <Footer />

        </div>  
        
        
          </Layout>


    </>
  )
}

export default App
