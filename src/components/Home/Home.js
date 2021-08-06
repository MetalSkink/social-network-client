import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { Posts } from '../../components/Posts/Posts';
import { Form }  from '../../components/Form/Form';
import { getPosts } from '../../actions/post';
import { useDispatch } from 'react-redux';

export const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    // const classes = useStyles();
    // className={classes.mainContainer} 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}
