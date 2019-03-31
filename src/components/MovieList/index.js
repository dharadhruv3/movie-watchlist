import React from 'react';
import { MdStar, MdStarBorder } from 'react-icons/md';

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
            <div className="card">
                <div className="view overlay hm-white-slight">
                    { this.image() }
                </div>

                <div className="movie-block">
                    <h4 className="movie-title">{ Title }</h4>
                    <p className="movie-text">Released: { Year }, Type: { Type }</p>
                    {bookmarked ?
                        <button onClick={() => onRemoveFromWatchList(this.props.movie)}>
                            <MdStar size={25} /></button> :
                        <button onClick={() => onAddToWatchList(this.props.movie)}>
                            <MdStarBorder size={25} /></button>}
                </div>
            </div>
        );
    }
}
