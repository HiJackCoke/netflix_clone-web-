import React, {Component} from 'react';
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {

    state = {
        movieResults : null,
        tvResults : null,
        searchTerm : "",
        loading : false,
        error : null
    };

    
    render() {

        const {movieResults, tvResults, searchTerm, loading, error} = this.state;

        return (
            <SearchPresenter
                loading={loading}
                handleSubmit={}
                tvResults={tvResults}
                movieResults={movieResults}
                error={error}
                searchTerm={searchTerm}
            />
        );
    }
}

export default SearchContainer;