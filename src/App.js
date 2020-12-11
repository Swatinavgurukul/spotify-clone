import React,{ useState,useEffect } from 'react'
import './App.css';
import Login from './Login'
import { getTokenFromResponse } from './spotify'
import Player from './Player'
import SpotifyWebApi from "spotify-web-api-js"
import {useDataLayerValue} from './DataLayer'
const spotify = new SpotifyWebApi();

function App() {
  
  // for changing and updating the data layer use dispatch
  // **Because its in DataLayernow so we can pull it any point in our component tree with this line
  const [{user,token},dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromResponse();
    // for security
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      spotify.setAccessToken(_token);
      
      spotify.getMe().then((user) => {
        // console.log("====>>>",user)
        // going to popit into the dataLayer 
        dispatch({
          type: 'SET_USER',
          // after that pulling and reading it user
          user:user
        })
      })
    }
  }, [])

  return (
    <div className="app">
      {
        token ? 
          <Player spotify={spotify} />
          // <h1>I am loged in!</h1>
          :
          <Login />
      }
    </div>
  );
}

export default App;

// "BQAmMGR9zJR-FHB9d38zqK4bxml4fySZ0_kEwrKLee2Sx2LhQmSQc5H8b0XK3zEg017Ua66SeIBTwec3Y4KQDbSaYAdAHKdhsYbJ3yCycc4I0jI_SSFQGZxQWHysmZ-LIzLgA4mP1M7lvVqWhPXuMwD6SGqHHxcixllNW71kBreMSRCSqsXz"
