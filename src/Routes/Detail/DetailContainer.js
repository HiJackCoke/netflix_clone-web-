import React, {useState, useEffect} from 'react';

import {useParams, useLocation} from 'react-router-dom';

import {movieApi, tvApi} from '../../api'
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {

    let {id} = useParams();
    console.log(id)
    let location = useLocation()

    const [detail, setDetail] = useState({
        result: {},
        resultError: null,
        similar: {},
        similarError: null,
        loading: true
    })

    const getData = async () => {


        const [result, resultError] = location.pathname.includes("/movie/")
        ? await movieApi.movieDetail(id)
        : await tvApi.showDetail(id)

        const [similar, similarError] = location.pathname.includes('/movie/')
        ? await movieApi.similar(id)
        : await tvApi.similar(id)

        setDetail({
            result,
            resultError,
            similar,
            similarError,
            loading: false
        })
    }

    useEffect(() => {
        getData()
    }, [id])

    return (
        <DetailPresenter {...detail}/>

    );
};

export default DetailContainer;



// class 형

// import React, {Component} from 'react';
// import DetailPresenter from "./DetailPresenter";
// import {moviesApi, tvapi} from "../../api";
//
//
// class DetailContainer extends Component {
//
//     constructor(props) {
//         super(props);
//         const {
//             location: { pathname }
//         } = props;
//         this.state = {
//             result: null,
//             similar: null,
//             error: null,
//             loading: true,
//             isMovie: pathname.includes("/movie/")
//         };
//     }
//     async componentDidMount() {
//         const { match: {params: { id } }, history: { push } } = this.props;
//         const { isMovie } = this.state;
//         const parsedId = parseInt(id);
//         if (isNaN(parsedId)) {
//             return push("/");
//         }
//         let result = null;
//         try {
//             if (isMovie) {
//                 ({ data: result } = await moviesApi.movieDetail(parsedId));
//                 ({ data: result } = await moviesApi.similar(parsedId))
//
//                 console.log("================", await moviesApi.similar(parsedId))
//             } else {
//                 ({ data: result } = await tvapi.showDetail(parsedId));
//             }
//         } catch {
//             this.setState({ error: "Can't find anything." });
//         } finally {
//             this.setState({ loading: false, result,  });
//
//         }
//     }
//
//     //
//     // async componentDidMount() {
//     //     const {
//     //         match : {
//     //             params : {id}
//     //         },
//     //         history : {push}
//     //     } = this.props;
//     //
//     //     const {isMovie} = this.state;
//     //     const parsedId = parseInt(id);
//     //     if(isNaN(parsedId)) {
//     //         return push("/");
//     //     }
//     //
//     //     let result = null;
//     //     try{
//     //         if(isMovie) {
//     //             ({data : result} = await moviesApi.movieDetail(parsedId));
//     //         }
//     //         else{
//     //             ({data : result} = await tvapi.showDetail(parsedId));
//     //         }
//     //     } catch{
//     //         this.setState({error : "cannot find anything"})
//     //     } finally {
//     //         this.setState({loading : false});
//     //     }
//     //
//     // }
//
//     render() {
//
//         const {result, loading, error} = this.state;
//
//         return (
//             <DetailPresenter
//                 loading={loading}
//                 error={error}
//                 result={result}
//             />
//         );
//     }
// }
//
// export default DetailContainer;
