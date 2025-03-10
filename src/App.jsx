import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function App() {

  const name = "Roger";

  return (
    <div>
      <Header name={name}/>
      <Footer name={name}/>
    </div>

  )
}