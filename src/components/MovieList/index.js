import React from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';
import Grid from '@material-ui/core/Grid';

export default class MovieList extends React.Component {
    image() {
        const {Poster} = this.props.movie;

        if (!Poster || Poster !== 'N/A') {
            return <img src={ Poster } className="img-fluid" alt="" />
        } else {
            return;
        }
    }

    render() {
        const {Title, Year, Type} = this.props.movie;
        const {onAddToWatchList, onRemoveFromWatchList, bookmarked} = this.props;

        return (
            <Grid item xs={4}>
                <div className="movie">
                    <div className="view overlay hm-white-slight">
                        { this.image() }
                    </div>

                    <div className="movie-block">
                        <h5 className="movie-title">{ Title }</h5>
                        <p className="movie-text">Released: { Year }, Type: { Type }</p>
                        {bookmarked ?
                            <button className="bg-transparent border-0 star-icon"
                                    onClick={() => onRemoveFromWatchList(this.props.movie)}>
                                <MdStar size={25} /></button> :
                            <button className="bg-transparent border-0 star-icon"
                                    onClick={() => onAddToWatchList(this.props.movie)}>
                                <MdStarBorder size={25} /></button>}
                    </div>
                </div>
            </Grid>
        );
    }
}
