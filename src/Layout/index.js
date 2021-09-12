import React from "react";
import Menu  from '../Components/MenuItem';
import {Row,Col,Container,Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import About from '../Components/about'
import Service from '../Components/Service'
import RouteMatch from '../Components/routeMatch'
import ParamChild from '../Components/paramChild'
/*{Menu.map(item => (
  <Route path={item.path} component={Service}>{Service}</Route>
))}<Nav.Link href={item.path} style={{color:"black"}}>{item.text}</Nav.Link>*/ 
//window.sessionStorage.clear();
const Home=() => {
  return (
    <div>
     
      <h2>Home</h2>
    </div>
  );
}
const Topics =()=> {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul className="ul_menu border">
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
         
        </Route>
      </Switch>
    </div>
  );
}

const Topic=()=> {
  // The <Rou=>te> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
const Default = () => {
    return(
      <div>
     
      <Router>
         <Navbar expand="xxl" variant="light" bg="primary">
            <Container style={{ color: "white"}}>
              <Navbar.Brand style={{ color: "white"}}>
              <Link to="/" style={{ color: "white"}}>LOGO</Link>
                </Navbar.Brand>
           
            </Container>
          </Navbar>
          <Container>
          <Row>
            <Col sm={4}>
              <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link eventKey="link-1"><Link to="/topics">Topics</Link></Nav.Link>
            </Nav>
          </Col>
            <Col sm={8}>
              <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch></Col>
          </Row>
          </Container>
      <div>
      
        
      </div>
    </Router>
    </div> 
    )
}
export default Default;