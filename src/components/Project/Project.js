import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    projectCard: {
        backgroundColor: 'yellow',
        display: 'flex',
        minHeight: 200
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    thumbnail: {
        minWidth: 80,
        width: '30%',
    }
}

class Project extends Component {

    render() {

        const classes = this.props.classes;

        const project = this.props.projectData;
        return (
            <Grid item sm={12} lg={6}>
                <Card className={classes.projectCard}>
                    <CardMedia
                        className={classes.thumbnail}
                        image="images/default_thumbnail.png"
                        title="my happy project"
                    />
                    <CardContent className={classes.info}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>{project.github}</p>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(Project);
