import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";
import {moviesApi} from '../../api';

export default class extends Component {
    //함수값 선언, component의 초기 상태

    state = {
        nowPlaying : null,
        popular : null,
        upcoming : null,
        loading : true,
        error : null
    };

    async componentDidMount() {
        try {
            const {
                data: {
                    results: nowPlaying
                }
            } = await moviesApi.nowPlaying();

            const {
                data: {
                    results : popular
                }
            } = await moviesApi.popular();

            const {
                data: {
                    results : upcoming
                }
            } = await  moviesApi.upcoming();

            this.setState({nowPlaying, popular, upcoming});

        }
        catch{
            this.setState({error : "Cannot find Movie Information"})
        }
        finally {
            this.setState({loading : false});
        }
    }



    render() {
        // component의 상태, 선언한 함수값 상수화줌

        const {nowPlaying, popular, upcoming, loading, error} = this.state;



        return (
            <HomePresenter
                loading={loading}
                nowPlaying={nowPlaying}
                popular={popular}
                upcoming={upcoming}
                error={error}
            />
        );
        // 화면에 뿌려
    }
};
