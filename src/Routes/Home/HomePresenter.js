import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`

  padding: 20px 10px;
`;

const HomePresenter = ({nowPlaying, popular, upcoming, loading, error}) =>(

    loading ? (
        <Loader/>
      ) : (
        <Container>
          {nowPlaying.map(movie =>
              <span key={movie.id}>{movie.title}</span>
          )}
          {popular.map(movie =>
              <span key={movie.id}>{movie.title}</span>
          )}
          {upcoming.map(movie =>
              <span key={movie.id}>{movie.title}</span>
          )}
        </Container>

      )

);

HomePresenter.propTypes = {
  nowPlaying : PropTypes.array,
  popular : PropTypes.array,
  upcoming : PropTypes.array,
  loading : PropTypes.bool.isRequired,
  error : PropTypes.string
};


export default HomePresenter;