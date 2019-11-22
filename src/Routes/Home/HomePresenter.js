import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";

const HomePresenter = ({nowPlaying, popular, upcoming, loading, error}) =>

    loading ? (
        <Loader/>
      ) : (
        <h1>{nowPlaying}</h1>
      )



HomePresenter.propTypes = {
  nowPlaying : PropTypes.array,
  popular : PropTypes.array,
  upcoming : PropTypes.array,
  loading : PropTypes.bool.isRequired,
  error : PropTypes.string
};


export default HomePresenter;