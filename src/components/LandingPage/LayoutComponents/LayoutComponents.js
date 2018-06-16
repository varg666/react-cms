import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Row, Col} from 'reactstrap';
class LayoutComponents extends Component {
  state = {
    content: [],
    contentTypes: this.props.contentType
  };

  static propTypes = {
    contentType: PropTypes.object
  };

  /*Lifecycle gets refactored sonn */
  componentDidMount() {
    const {id} = this.state.contentTypes.contentType;
    let content = [];
    let contentObj;

    axios
      .get(`http://localhost:5000/api/entries/${id}`)
      .then(response => {
        response.data.map(entrie => {
          contentObj = {...entrie.content};
          return content.push(contentObj);
        });
        this.setState({
          content
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    const {fields} = this.state.contentTypes;
    let cols = [];

    this.state.content.map((con, index) => {
      let style = {
        border: '.5px solid rgba(0, 0 , 0, .2)',
        padding: '.5rem',
        margin: '.5rem'
      };
      return cols.push(
        <Col sm="2" md="4" key={index} style={style}>
          {fields.map((field, i) => {
            if (field.element == 'h') {
              return <h5 key={i}>{con.title}</h5>;
            } else if (field.element == 'img') {
              return (
                <img
                  style={{height: '100px', width: '100px'}}
                  src={con.image}
                  key={i}
                />
              );
            } else if (field.element == 'p') {
              return <p key={i}>{con.body}</p>;
            }
          })}
        </Col>
      );
    });

    return (
      <div>
        <Row>{cols}</Row>
      </div>
    );
  }
}

export default LayoutComponents;
