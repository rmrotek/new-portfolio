import React, { Component } from "react";

//for future use


const DataContext = React.createContext();

export const DataContextConsumer = DataContext.Consumer;

export class DataProvider extends Component {
  state = {
    data: null,
    
  };

  componentDidMount() {
    
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export function withDataContext(Component) {
  return function WrapperComponent(props) {
    return (
      <DataContext.Consumer>
        {state => <Component {...props} dataContext={state} />}
      </DataContext.Consumer>
    );
  };
}

export default DataProvider;
