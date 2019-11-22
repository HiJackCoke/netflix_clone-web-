import React, {Component} from 'react';
import TVPresenter from "./TVPresenter";
import {tvapi} from "../../api";

export default class extends Component {

    state = {
        topRated : null,
        popular : null,
        airingToday : null,
        loading : true,
        error : null
    };

    async  componentDidMount() {
        try {
            const {
                data: {
                    results : topRated
                }
            } = await tvapi.topRated();

            const {
                data : {
                    results : popular
                }
            } = await tvapi.popular();

            const {
                data : {
                    results : airingToday
                }
            } = await tvapi.airingToday();

            this.setState({topRated, popular, airingToday});

        }
        catch {
            this.setState({error : "Cannot find TV Information"});
        }
        finally {
            this.setState({loading : false});
        }
    }

    render() {
        const {topRated, popular, airingToday, loading, error} = this.state;
        console.log(topRated);

        return (
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
};