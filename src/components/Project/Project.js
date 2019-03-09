import React, { Component } from 'react';

// Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Button , Typography, Divider} from '@material-ui/core';

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
        flexGrow: 2,
    },
    thumbnail: {
        minWidth: 80,
        width: '30%',
    },
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
                        <Typography variant="h5">{project.name}</Typography>
                        <Divider />

                        <Grid container spacing={8} className={classes.links}>

                            <Grid item className={classes.buttonLink}>
                                <Button 
                                    className={classes.button}
                                    size="small"
                                    variant="outlined">
                                    Github
                                </Button>
                            </Grid>

                            <Grid item className={classes.buttonLink}>
                                <Button 
                                    className={classes.button}
                                    size="small"
                                    variant="outlined">
                                    Website
                                </Button>
                            </Grid>
                        </Grid>

                        <p>{project.description}</p>
                        <p>{project.github}</p>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(Project);
