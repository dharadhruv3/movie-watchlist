import React from "react";
import Header from 'components/Header';
import MoviesSearch from 'components/MoviesSearch';
import 'assets/styles/common.scss';

class App extends React.Component {

    onSearchMovie = (s) => {
        this.props.onSearchMovie(s);
    };

    render(){
        return (
            <div className="container">
                <Header />
                <MoviesSearch />
            </div>
        );
    }
}

export default App;
