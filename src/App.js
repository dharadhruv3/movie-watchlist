import React from "react";
import Header from 'components/Header';
import MoviesSearch from 'components/MoviesSearch';
import {connect} from "react-redux";
import {onSearchMovie} from "./actions/Movies";

class App extends React.Component {

    onSearchMovie = (s) => {
        this.props.onSearchMovie(s);
    };

    render(){
        return (
            <div>
                <Header />
                <MoviesSearch onSearchMovie={this.onSearchMovie.bind(this)} />
                {/*<WatchList />*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searching: state.movies.searching,
        searchResults: state.movies.searchResults,
    };
};

export default connect(mapStateToProps, {
    onSearchMovie
})(App);

