import React, { Component } from 'react';

// Material UI
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Button , Grid} from '@material-ui/core';
import Lightning from '../../LightningTheme';

const styles = {
    links: {
        marginTop: 2,
        justifyContent: 'space-evenly',
    },
    buttonLink: {
        flexGrow: 2,
    },
    button: {
        width: '100%',
    },
}

class Project extends Component {

    render() {

        const classes = this.props.classes;

        return (
            <Grid item className={classes.buttonLink}>
            <MuiThemeProvider theme={Lightning}>
                <Button 
                    color="inherit"
                    className={classes.button}
                    size="small"
                    variant="text">
                    {this.props.name}
                </Button>
            </MuiThemeProvider>
            </Grid>

        );
    }
}

export default withStyles(styles)(Project);