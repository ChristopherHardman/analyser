import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './progress.css';


class Progress extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
      <div className="progressHolder">
        <h2 className="progressTitle">Analysing data...</h2>
        <CircularProgress
          mode="determinate"
          value={this.state.completed}
          size={80}
          thickness={5}
          style={{
            color: '#FF9800',
          }}
        />
      </div>
    );
  }
}

export default Progress;
