import './App.css';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import Media from './Media';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <SearchForm />
        <section>
          <h3>Álbuns buscados recentemente</h3>
          <div className='media'>
            <Media />
            <Media />
            <Media />
            <Media />
            <Media />
            <Media />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
