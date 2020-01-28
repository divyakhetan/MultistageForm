import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'



export class Confirm extends React.Component {
  continue = e => {
    e.preventDefault();
    //send data to back end here //
    this.props.nextStep();
  };

 back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values : {firstName, lastName, email, occupation, city, bio}} = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
        
            <AppBar title="Confirm the Data" />
            <List>
            <ListItem
             primaryText = "First Name"
             secondaryText = {firstName}

            />
            <ListItem
             primaryText = "Last Name"
             secondaryText = {lastName}

            />
            <ListItem
             primaryText = "Email"
             secondaryText = {email}

            />
            <ListItem
             primaryText = "Occupation"
             secondaryText = {occupation}

            />
            <ListItem
             primaryText = "City"
             secondaryText = {city}

            />

            <ListItem
             primaryText = "Bio"
             secondaryText = {bio}

            />
            </List>

            <RaisedButton
              label ="Back"
              primary = {false}
              variant="contained"
              style = {styles.button}
              onClick={this.back}
            />

            <RaisedButton
              label ="Continue"
              primary = {true}
              variant="contained"
              style = {styles.button}
              onClick={this.continue}
            />
         
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

export default Confirm;