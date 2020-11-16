import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/poster";


const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

//2
class SearchPresenter extends Component {
    render() {

        let {
            movies,
            shows,
            searchTerm,
            loading,
            updateTerm,
            handleSubmit
        } = this.props;

        return(
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="search Movies or TV Show..."
                        value={searchTerm}
                        onChange={updateTerm}
                    />
                </Form>
                {loading ? (
                    <Loader/>
                ): (
                    <>
                        {movies && movies.length > 0 && (
                            <Section title="Movie Results">
                                {movies.map(movie => (
                                    <Poster
                                        title={movie.title}
                                        year={movie.release_date}
                                        rating={movie.vote_average}
                                        id={movie.id}
                                        imageURL={movie.poster_path}
                                    />
                                ))}
                            </Section>
                        )}
                        {shows && shows.length > 0 && (
                            <Section title="TV Results">
                                {shows.map(show => (
                                    <Poster
                                        title={show.name}
                                        year={show.first_air_date}
                                        rating={show.vote_average}
                                        id={show.id}
                                        imageURL={show.poster_path}
                                    />
                                ))}
                            </Section>
                        )}
                    </>
                )}

            </Container>
        );
    }
}


//1
SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error : PropTypes.string,
    searchTerm: PropTypes.string,
    loading : PropTypes.bool.isRequired,
    handleSubmit : PropTypes.func.isRequired,
    updateTerm : PropTypes.func.isRequired
};

export default SearchPresenter;
