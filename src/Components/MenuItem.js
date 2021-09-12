import Loadable from "react-loadable";
import React from "react";

const Loading = ()  =>{
    return <div>Loading...</div>;
  }
  
const Login = Loadable({
    loader: () => import("../Components/Service"),
    loading: Loading
  });
 const about = Loadable({
    loader: () => import("../Components/about"),
    loading: Loading
  });
 const service = Loadable({
    loader: () => import("../Components/Service"),
    loading: Loading
  });


const items = [ {
    path: '/index/about',
    text: 'About',
    compoment : about,
    exact : true
}, {
    path: '/index/service',
    text: 'service',
    compoment : service,
    exact : true
}];

export default items;