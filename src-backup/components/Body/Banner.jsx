import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  
  handelClick() {
    // alert(this.state.count);
    this.setState({count: ++this.state.count})
  }

  render() {
    let number = 0;
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Hello, world!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.handelClick.bind(this)}>{this.props.ButtonTitle} {this.state.count}</a>
          </p>
        </div>
      </div>
    )
  }
}

Banner.defaultProps = {
  ButtonTitle: 'Default button'
};

Banner.propTypes = {
  ButtonTitle: PropTypes.string.isRequired
};

export default Banner;
