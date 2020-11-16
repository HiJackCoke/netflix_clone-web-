import React, {Component} from 'react';
import DetailPresenter from "./DetailPresenter";
import {moviesApi, tvapi} from "../../api";


class DetailContainer extends Component {

    constructor(props) {
        super(props);
        const {
            location: { pathname }
        } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }
    async componentDidMount() {
        const { match: {params: { id } }, history: { push } } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/");
        }
        let result = null;
        try {
            if (isMovie) {
                ({ data: result } = await moviesApi.movieDetail(parsedId));
            } else {
                ({ data: result } = await tvapi.showDetail(parsedId));
            }
        } catch {
            this.setState({ error: "Can't find anything." });
        } finally {
            this.setState({ loading: false, result });
        }
    }

    //
    // async componentDidMount() {
    //     const {
    //         match : {
    //             params : {id}
    //         },
    //         history : {push}
    //     } = this.props;
    //
    //     const {isMovie} = this.state;
    //     const parsedId = parseInt(id);
    //     if(isNaN(parsedId)) {
    //         return push("/");
    //     }
    //
    //     let result = null;
    //     try{
    //         if(isMovie) {
    //             ({data : result} = await moviesApi.movieDetail(parsedId));
    //         }
    //         else{
    //             ({data : result} = await tvapi.showDetail(parsedId));
    //         }
    //     } catch{
    //         this.setState({error : "cannot find anything"})
    //     } finally {
    //         this.setState({loading : false});
    //     }
    //
    // }

    render() {

        const {result, loading, error} = this.state;

        return (
            <DetailPresenter
                loading={loading}
                error={error}
                result={result}
            />
        );
    }
}

export default DetailContainer;