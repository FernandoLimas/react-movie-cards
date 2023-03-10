import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movies;
    return (
      <div className='movie-card'>
        <img className='movie-card-image' src={ imagePath } alt={title} />
        <div className='movie-card-body'>
          <h4 className='movie-card-title'>{ title }</h4>
          <h5 className='movie-card-subtitle'>{subtitle}</h5>
          <p className='movie-card-storyline'>{storyline}</p>
        </div>
        <div className='little-menu'>
          <div className='movie-card-rating'>
            <Rating rating={ rating } />
          </div>
        </div>
      </div>// requisito 7
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
