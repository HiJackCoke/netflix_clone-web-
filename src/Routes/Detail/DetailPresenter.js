import React from 'react';

import styled from "styled-components";
import Loader from "../../Components/Loader";


const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
 font-size: 30px;
 margin: 20px 10px;
`;

const Rating = styled.span`
  font-size: 15px;
  margin: 10px;
`;

const Overview = styled.span`
  font-size: 15px;
  margin: 10px;
`;

const Year = styled.span`
  margin-bottom: 10px;
  margin-left: 10px;
`;






const DetailPresenter = ({
    result,
    simliar,
    loading,
    error
}) => (
    loading ? (
        <Loader/>
    ) : (
        <Container>

            <Backdrop
                bgImage={
                    result.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                    : require("../../assets/empty.png")
                }
            />
            <Content>
                <Cover
                    bgImage={
                        result.poster_path
                            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                            : require("../../assets/empty.png")
                    }
                />

                <Data>
                    <Title>{result.original_title}</Title>
                    <Year>{result.release_date}</Year>
                    <Rating>
                        ⭐  {" "} {result.vote_average} {" "} / {" "}10
                    </Rating>

                    <Overview>
                        {result.overview}
                    </Overview>
                </Data>




            </Content>
        </Container>
    )
);


//
// DetailPresenter.propTypes ={
//     result : PropTypes.array,
//     similar: PropTypes.array,
//     loading : PropTypes.bool.isRequired,
//     error : PropTypes.string
// };

export default DetailPresenter;
