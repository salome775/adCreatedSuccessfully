import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, component } from "react-router-dom";
import Home from './components/Home'
import Add_creating from './components/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    background: 'gray',
    padding: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function App() {
  const classes = useStyles();
  return (
   <Router>
     <div>
       <ul>
         <li>
           <Link to ="/">Home</Link>
           </li>
          <li>
           <Link to="/Add_creating">Add_creating</Link>
          </li>
        </ul>
     </div>
     <div className={classes.container}>
      <Route path="/" exact component={Home} />
      <Route path="/Add_creating" component={Add_creating} />
      </div>
   </Router>
  );
}

export default App;
