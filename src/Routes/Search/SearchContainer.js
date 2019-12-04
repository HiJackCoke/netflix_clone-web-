import React, {Component} from 'react';
import SearchPresenter from "./SearchPresenter";
import {tvapi, moviesApi} from "../../api";

class SearchContainer extends Component {

    state = {
        movieResults : null,
        tvResults : null,
        searchTerm : "",
        loading : false,
        error : null
    };

    //4


    handleSubmit = event => {

        event.preventDefault();

        const {searchTerm} = this.state;

        if(searchTerm !== "") {
            // serchTerm이 빈칸이 아닐때 눌럿을때
            // searchByTerm의 내용을 네트워크 태움
            this.searchByTerm();
        }

    };

    updateTerm = event => {
        const {target : {value}} = event;
        this.setState({
            searchTerm: value
        });
    };


    searchByTerm = async () => {

        const {searchTerm} = this.state;
        this.setState({loading : true});

        try {
            const {
                data : {results: movieResults}
            } = await moviesApi.search(searchTerm);


            const {
                data: {results : tvResults}
            } = await tvapi.search(searchTerm);

            this.setState({movieResults, tvResults});
        }
        catch {
            this.setState({error : "cannot find results"});
        }

        finally {
            this.setState({loading : false});
        }
    };


    render() {

        const {movieResults, tvResults, searchTerm, loading, error} = this.state;

        console.log(movieResults);

        //3
        return (
            <SearchPresenter
                loading={loading}
                handleSubmit={this.handleSubmit}
                tvResults={tvResults}
                movieResults={movieResults}
                error={error}
                searchTerm={searchTerm}
                updateTerm={this.updateTerm}
            />
        );
    }
}

export default SearchContainer;