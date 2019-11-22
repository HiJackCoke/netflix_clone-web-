import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  
  padding: 20px 10px;
  
`;


const TVPresenter = ({topRated, popular, airingToday, loading, error}) => (

    loading ? (
            <Loader/>
        ) : (
            <Container>
                {topRated.map(show =>
                    <span key={show.id}>{show.name}</span>
                )}
                {popular.map(show =>
                    <span key={show.id}>{show.name}</span>
                )}
                {airingToday.map(show =>
                    <span key={show.id}>{show.name}</span>
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