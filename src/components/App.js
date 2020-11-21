import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../Actions/index";
import { StoreContext } from "..";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));

    // console.log("state", this.props.store.getState());
  }

  isFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourites } = movies;

    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  changeDisplay = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    const { movies, search } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    const display = showFavourites ? favourites : list;
    console.log("nextstate", this.props.store.getState());
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`${showFavourites ? "tab" : "active-tabs tab"}`}
              onClick={() => this.changeDisplay(false)}
            >
              Movies
            </div>
            <div
              className={`${showFavourites ? "active-tabs tab" : "tab"}`}
              onClick={() => this.changeDisplay(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {display.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={index}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isFavourite(movie)}
                />
              );
            })}
            {showFavourites && favourites.length === 0 && (
              <div style={{ marginTop: 42 }}>No Fvaourites to show...</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

class AppWrapper extends React.Component {
  render() {
    console.log("AppWarapper");
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    );
  }
}

export default AppWrapper;
