import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, UncontrolledCollapse } from 'reactstrap';
import RequestHelper from '../helper/RequestHelper';
import Result from './Result';

export default class URLForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { URL: '', hash: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (event) => {
    try {
      this.setState({
        backendResponse: null,
        error: null,
        longURL: this.state.URL
      }
      );
      event.preventDefault();

      let shortenRequest = await RequestHelper.shortenURL(this.state.URL, this.state.hash);
      this.setState({ backendResponse: shortenRequest });

      // Clear fields
      this.setState({ URL: '', hash: '', error: null });

    } catch (err) {
      this.setState({ error: err });
    }
  }


  render() {

    if (this.state.error) {
      var resultElement = <Result successful={false} error={this.state.error} />
    } else if (this.state.backendResponse) {
      var resultElement = <Result successful={true} result={this.state.backendResponse} longURL={this.state.longURL} />;
    }

    return (
      <div>
        <div>
          <Row>
            <Col md={6}>
              <Form action="/Links" method="post" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="url">URL</Label>
                  <Input type="url" value={this.state.URL} onChange={this.handleChange} name="URL" id="url" placeholder="https://google.com" />
                </FormGroup>

                <UncontrolledCollapse toggler="#toggleAdvanced">
                  <FormGroup>
                    <Label for="url">Custom URL name/hash</Label>
                    <Input maxlength="6" type="text" value={this.state.hash} onChange={this.handleChange} name="hash" id="hash" placeholder="jobs" />
                  </FormGroup>
                </UncontrolledCollapse>

                <Button size="lg" color="primary">Shorten it!</Button>
                <Button color="link" id="toggleAdvanced">Advanced options</Button>

              </Form>
              {resultElement}
            </Col>
          </Row>
        </div>
      </div>
    );
  };
}
