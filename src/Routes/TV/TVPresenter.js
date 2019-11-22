import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";

const TVPresenter = ({topRated, popular, airingToday, loading, error}) =>

    loading ? (
            <Loader/>
        ) : (
            <h1>{topRated}</h1>
        )

TVPresenter.propTypes = {
    topRated : PropTypes.array,
    popular : PropTypes.array,
    airingToday : PropTypes.array,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string
};

export default TVPresenter;