import '../styles/globals.css'
import NavBar from '../components/NavBar'
import { AuthProvider } from '../components/Context/AppContext';

function MyApp({ Component, pageProps}) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return <>
  <AuthProvider >
  <NavBar/>
  <Component {...pageProps} />
  </AuthProvider>
  </>

}

export default MyApp
