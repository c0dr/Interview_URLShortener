import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import URLForm from './URLForm';

  export default class Main extends React.Component {
    render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Shorten your URL!</h1>
          <p className="lead">Perfect for sharing or print.</p>
          <hr className="my-2" />
          <URLForm/>
        </Jumbotron>
      </div>
    );
  };
}
  