import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";



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
            movieResults,
            tvResults,
            error,
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
                        {movieResults && movieResults.length > 0 && (
                            <Section title="Movie Results">
                                {movieResults.map(movie => (
                                    <span key={movie.id}>{movie.title}</span>
                                ))}
                            </Section>
                        )}
                        {tvResults && tvResults.length > 0 && (
                            <Section title="TV Results">
                                {tvResults.map(show => (
                                    <span key={show.iod}>{show.name}</span>
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