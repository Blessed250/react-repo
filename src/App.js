import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavBar from './components/NavBar';
import CardProduct from './components/CardProduct';
function App() {
  return (
    <div className="App">
      <NavBar/> 
      <h1>Welcome</h1>
      <div className='Cards'>
      <CardProduct name="Safari" description="a documantary about wildlife" button="watch"/>
      <CardProduct name="galxies" description="a documantary about space" button="watch"/>
      <CardProduct name="evolution" description="a documantary about technology" button="watch"/> 
      </div>
    </div>
  );
}

export default App;
