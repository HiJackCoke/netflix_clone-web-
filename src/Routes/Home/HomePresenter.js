import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/poster";

const Container = styled.div`

  padding: 20px 10px;
`;

const HomePresenter = ({nowPlaying, popular, upcoming, loading, error}) =>(

    loading ? (
        <Loader/>
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
              <Section title="nowPlaying">
                {nowPlaying.map(movie =>
                   <Poster
                       key={movie.id}
                       title={movie.title}
                       year={movie.release_date}
                       rating={movie.vote_average}
                       id={movie.id}
                       imageURL={movie.poster_path}
                       isMovie={true}
                   />
                )}
              </Section>
          )}
          {popular && popular.length > 0 && (
              <Section title="popular">
                {popular.map(movie =>
                    <Poster
                        key={movie.id}
                        title={movie.title}
                        year={movie.release_date}
                        rating={movie.vote_average}
                        id={movie.id}
                        imageURL={movie.poster_path}
                        isMovie={true}
                    />
                )}
              </Section>
          )}
          {upcoming && upcoming.length > 0 && (
              <Section title="upcoming">
                {upcoming.map(movie =>
                    <Poster
                        key={movie.id}
                        title={movie.title}
                        year={movie.release_date}
                        rating={movie.vote_average}
                        id={movie.id}
                        imageURL={movie.poster_path}
                        isMovie={true}
                    />
                )}
              </Section>
          )}
          {error && <Message color="#e74c3c" text={error}/>}

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
