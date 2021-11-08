import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';

import FilmListPage from '../pages/FilmListPage'
import HomePage from '../pages/HomePage'

const Router = () => {

    const [featureData, setFeatureData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);
  
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><HomePage /></Route>

                <Route exact path="/film-list">
                    <FilmListPage 
                    featureData={featureData}
                    setFeatureData={setFeatureData} 
                    blackHeader={blackHeader}
                    setBlackHeader={setBlackHeader}/>
                </Route>

                <Route><ErrorPage/></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
