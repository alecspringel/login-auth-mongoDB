import React, { Component } from 'react'
import { getAllEvents } from "../../actions/eventActions";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class EventList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllEvents();
    console.log(this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.events.events)
    this.setState({
      events: nextProps.events.events
    });
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h3>EVENT LIST</h3>
    <div>{this.state && this.state.events.map((event) => <p>{event.title}</p>)}</div>
  
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(mapStateToProps, { getAllEvents })(EventList);

