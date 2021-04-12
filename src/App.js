import "./App.css";
import RowMovie from "./components/RowMovie";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

// 4646722b36dfe28ad45d95f37ac77aeb
function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      <RowMovie
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <RowMovie title="Trending Now" fetchUrl={requests.fetchTrending} />
      <RowMovie title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <RowMovie title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <RowMovie title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <RowMovie title="Horrnor Movies" fetchUrl={requests.fetchHorrnorMovies} />
      <RowMovie title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <RowMovie
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentariesMovies}
      />
    </div>
  );
}

export default App;
