import React, {useState, useEffect} from 'react';
import HomePresenter from "./HomePresenter";
import {movieApi} from '../../api'

const HomeContainer = () => {

    const [movies, setMovies] = useState({
        nowPlaying: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        popularError: null,
        upcomingError: null,
        loading: true
    })

    const getData = async () => {
        const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying()
        const [popular, popularError] = await movieApi.popular()
        const [upcoming, upcomingError] = await movieApi.upcoming()
        console.log("=======++++++", nowPlaying)
        setMovies({
            nowPlaying,
            popular,
            upcoming,
            nowPlayingError,
            popularError,
            upcomingError,
            loading: false
        })
        console.log("=======", nowPlaying)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <HomePresenter {...movies} />
    );
};

export default HomeContainer;


// import React, {Component} from 'react';
// import HomePresenter from "./HomePresenter";
// import {moviesApi} from '../../api'
//
// export default class extends Component {
//     //함수값 선언, component의 초기 상태
//
//     state = {
//         nowPlaying : null,
//         popular : null,
//         upcoming : null,
//         loading : true,
//         error : null
//     };
//
//     async componentDidMount() {
//         try {
//             const {
//                 data: {
//                     results: nowPlaying
//                 }
//             } = await moviesApi.nowPlaying();
//
//             const {
//                 data: {
//                     results : popular
//                 }
//             } = await moviesApi.popular();
//
//             const {
//                 data: {
//                     results : upcoming
//                 }
//             } = await  moviesApi.upcoming();
//
//             this.setState({nowPlaying, popular, upcoming});
//
//         }
//         catch{
//             this.setState({error : "Cannot find Movie Information"})
//         }
//         finally {
//             this.setState({loading : false});
//         }
//     }
//
//
//
//     render() {
//         // component의 상태, 선언한 함수값 상수화줌
//
//         const {nowPlaying, popular, upcoming, loading, error} = this.state;
//
//         console.log(nowPlaying);
//
//         return (
//             <HomePresenter
//                 nowPlaying={nowPlaying}
//                 popular={popular}
//                 upcoming={upcoming}
//                 loading={loading}
//                 error={error}
//             />
//         );
//         // 화면에 뿌려
//     }
// };
