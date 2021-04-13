import "./App.css";
import RowMovie from "./components/RowMovie";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { login, logout } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

// 4646722b36dfe28ad45d95f37ac77aeb
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    return auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser)
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
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
