import React, {useState, useEffect} from 'react';
import TVPresenter from "./TVPresenter";
import {tvApi} from '../../api'

const TVContainer = () => {

    const [show, setShow] = useState({
        topRated : [],
        popular : [],
        airingToday : [],
        topRatedError: null,
        popularError: null,
        airingTodayError: null,
        loading : true
    })

    const getData = async () => {
        const [topRated, topRatedError] = await tvApi.topRated()
        const [popular, popularError] = await tvApi.popular()
        const [airingToday, airingTodayError] = await tvApi.airingToday()

        setShow({
            topRated,
            popular,
            airingToday,
            topRatedError,
            popularError,
            airingTodayError,
            loading: false
        })

        console.log("=======++++++", airingToday)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <TVPresenter {...show}/>
    );
};

export default TVContainer;


// import React, {Component} from 'react';
// import TVPresenter from "./TVPresenter";
// import {tvApi} from "../../api";
//
// export default class extends Component {
//
//     state = {
//         topRated : null,
//         popular : null,
//         airingToday : null,
//         loading : true,
//         error : null
//     };
//
//     async  componentDidMount() {
//         try {
//             const {
//                 data: {
//                     results : topRated
//                 }
//             } = await tvApi.topRated();
//
//             const {
//                 data : {
//                     results : popular
//                 }
//             } = await tvApi.popular();
//
//             const {
//                 data : {
//                     results : airingToday
//                 }
//             } = await tvApi.airingToday();
//
//             this.setState({topRated, popular, airingToday});
//
//         }
//         catch {
//             this.setState({error : "Cannot find TV Information"});
//         }
//         finally {
//             this.setState({loading : false});
//         }
//     }
//
//     render() {
//         const {topRated, popular, airingToday, loading, error} = this.state;
//         console.log(topRated);
//
//         return (
//             <TVPresenter
//                 topRated={topRated}
//                 popular={popular}
//                 airingToday={airingToday}
//                 loading={loading}
//                 error={error}
//             />
//         );
//     }
// };
