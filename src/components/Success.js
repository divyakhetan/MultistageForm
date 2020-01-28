import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'



export class Success extends React.Component {

  render() {
    return (
      <MuiThemeProvider >
        <React.Fragment>
        
            <AppBar title="Success" />
            <h1>Success </h1>
         
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
	button:{
		margin : 15
	}
}

export default Success;