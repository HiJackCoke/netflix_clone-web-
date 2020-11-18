import React from 'react';

import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import SimilarPoster from "../../Components/SimilarPoster";

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
  flex: none
  
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.span`
 font-size: 30px;
 margin: 0px 20px 20px;
`;

const Vote = styled.span`
  font-size: 15px;
  margin: 10px 20px 10px;

`;

const Overview = styled.span`
  font-size: 15px;
  margin: 10px 20px 10px;
`;

const Year = styled.span`
   margin: 10px 20px 10px;
`;

const Similar = styled.div`
  margin-left: 20px;
`;

const DetailPresenter = ({
    result,
    similar,
    loading
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
                    <Title>{result.original_title || result.name}</Title>

                    <Year>{result.release_date || result.first_air_date}</Year>
                    <Vote>
                        <span role="img" aria-label="rating">⭐️</span>
                        {" "} {result.vote_average} {" "} / {" "}10
                    </Vote>


                    <Overview>
                        {result.overview}
                    </Overview>

                    <Similar>
                        <Section title="Similar">
                            {similar.map((similar) => (
                                <SimilarPoster
                                    key={similar.id}
                                    id={similar.id}
                                    imageURL={similar.poster_path}
                                    title={similar.original_title || similar.original_name}
                                    rating={similar.vote_average}
                                    isMovie={similar.original_title ? true : false}
                                />
                            ))}
                        </Section>
                    </Similar>
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
