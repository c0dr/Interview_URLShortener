import React from 'react';
import { Alert, Card, CardHeader, CardTitle, CardSubtitle, CardText, CardBody, Button } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class Result extends React.Component {
  render() {
    if (this.props.successful) {
      return (
        <Card style={{ marginTop: '1rem' }}>
          <CardBody>
            <CardSubtitle>Shortened: {this.props.result.fullURL}</CardSubtitle>
            <CardText>Original: {this.props.longURL}</CardText>
            <CopyToClipboard text={this.props.result.fullURL}>
              <Button color="success">Copy to clipboard</Button>
            </CopyToClipboard>
          </CardBody>
        </Card>

      )
    } else {
      return (
        <Alert color="warning">
          An error occured:
        {this.props.error.toString()}
        </Alert>)
    }
  }
}
