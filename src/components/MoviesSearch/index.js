import React from 'react';
import {connect} from "react-redux";
import {onSearchMovie, onAddToWatchList, onRemoveFromWatchList} from 'actions/Movies';
import Autosuggest from 'react-autosuggest';
import Paper from '@material-ui/core/Paper';
import MovieList from "components/MovieList";

let displayMovie = '';

function getSuggestionMoviename(suggestion) {
    displayMovie = suggestion;
    return suggestion.Title;
}

function renderSuggestion(suggestion) {
    return (
        <Paper square>
            {suggestion.Title}
        </Paper>
    );
}

function shouldRenderSuggestions(value) {
    return value.trim().length > 2;
}

class MoviesSearch extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onMovienameChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onsuggestionsFetchRequested = ({ value }) => {
        this.props.onSearchMovie(value);
    };

    onsuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onAddToWatchList = (movie) => {
        this.props.onAddToWatchList(movie);
    };

    onRemoveFromWatchList = (movie) => {
        this.props.onRemoveFromWatchList(movie);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.searchResults !== this.props.searchResults){
            this.setState({suggestions: this.props.searchResults})
        }
    }

    render() {
        const {
            value,
            suggestions,
        } = this.state;

        const {watchList} = this.props;

        const movieNameInputProps = {
            placeholder: "Search Movie",
            value: value,
            onChange: this.onMovienameChange
        };

        return (
            <div className="container">

                <h3>Search</h3>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onsuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onsuggestionsClearRequested}
                    shouldRenderSuggestions={shouldRenderSuggestions}
                    getSuggestionValue={getSuggestionMoviename}
                    renderSuggestion={renderSuggestion}
                    inputProps={movieNameInputProps}
                />

                {displayMovie && <MovieList movie={displayMovie}
                                            bookmarked={false}
                                            onAddToWatchList={this.onAddToWatchList.bind(this)}
                                            onRemoveFromWatchList={this.onRemoveFromWatchList.bind(this)}/>}

                {console.log('watchList', watchList)}

                <h3>Watch List</h3>
                {watchList ?
                watchList.map((movie) => {
                    return <MovieList key={movie.imdbID} movie={movie}
                                      bookmarked={true}
                                      onRemoveFromWatchList={this.onRemoveFromWatchList.bind(this)}/>
                }): 'There are not any movies in watch list'}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searching: state.movies.searching,
        searchResults: state.movies.searchResults,
        watchList: state.movies.watchList
    };
};

export default connect(mapStateToProps, {
    onSearchMovie,
    onAddToWatchList,
    onRemoveFromWatchList
})(MoviesSearch);
