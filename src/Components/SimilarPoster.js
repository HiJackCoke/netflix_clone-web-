import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 10px;
  right: 10px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 7px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;


const SimilarPoster = ({id, imageURL, name, title, rating, isMovie = false}) => (

    <Link to={ isMovie === true ? `/movie/${id}` : `/tv/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageURL ? `https://image.tmdb.org/t/p/original${imageURL}` : require("../assets/empty.png")} />
                <Rating>
                    <span role="img" aria-label="rating">⭐️</span>
                    {" "} {rating} {" "} / {" "}10
                </Rating>
            </ImageContainer>
            <Title>{title}</Title>
        </Container>
    </Link>
);

SimilarPoster.propTypes = {
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number.isRequired,
};

export default SimilarPoster;
