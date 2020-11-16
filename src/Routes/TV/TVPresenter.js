import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/poster";

const Container = styled.div`
  
  padding: 20px 10px;
  
`;


const TVPresenter = ({topRated, popular, airingToday, loading, error}) => (

    loading ? (
            <Loader/>
        ) : (
            <Container>
                {topRated && topRated.length > 0 && (
                    <Section title="topRated">
                        {topRated.map(show =>
                            <Poster
                                key={show.id}
                                title={show.name}
                                year={show.first_air_date}
                                rating={show.vote_average}
                                id={show.id}
                                imageURL={show.poster_path}
                                isMovie={false}
                            />
                        )}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title="popular">
                        {popular.map(show =>
                            <Poster
                                key={show.id}
                                title={show.name}
                                year={show.first_air_date}
                                rating={show.vote_average}
                                id={show.id}
                                imageURL={show.poster_path}
                                isMovie={false}
                            />
                        )}
                    </Section>
                )}
                {airingToday && airingToday.length > 0 && (
                    <Section title="airingToday">
                        {airingToday.map(show =>
                            <Poster
                                key={show.id}
                                title={show.name}
                                year={show.first_air_date}
                                rating={show.vote_average}
                                id={show.id}
                                imageURL={show.poster_path}
                                isMovie={false}
                            />
                        )}
                    </Section>
                )}
            </Container>
        )
);
TVPresenter.propTypes = {
    topRated : PropTypes.array,
    popular : PropTypes.array,
    airingToday : PropTypes.array,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string
};

export default TVPresenter;
