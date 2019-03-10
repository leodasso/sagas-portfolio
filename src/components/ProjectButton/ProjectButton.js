import React, { Component } from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Button , Grid} from '@material-ui/core';

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
                <Button 
                    color="inherit"
                    className={classes.button}
                    size="small"
                    variant="text">
                    {this.props.name}
                </Button>
            </Grid>
        );
    }
}

export default withStyles(styles)(Project);