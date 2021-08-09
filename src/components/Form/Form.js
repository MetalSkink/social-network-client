import { TextField, Button, Typography, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/post';

export const Form = ({currentId, setCurrentId}) => {
    const classes = useStyles();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) :null); 
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,{...postData, name: user?.result?.name}));
        }else{
            dispatch(createPost({...postData, name: user?.result?.name}));
        }
        clear();
    }
    const clear = () => {
        setCurrentId(null);
        setPostData({
            title: '',
            message: '',
            tags: '',
            selectedFile:''
        });
    }

    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile:''
    })

    if (!user?.result?.name){
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Porfavor Inicia Sesión para crear un post y likear los de los otros usuarios.
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editando' : 'Creando' }  un Recuerdo</Typography>
                {/* <TextField 
                        name="creator" 
                        variant="outlined" 
                        label="Creator" 
                        fullWidth
                        value={postData.creator}
                        onChange={(e) => setPostData({ ...postData, creator: e.target.value})}/> */}
                <TextField 
                        name="title" 
                        variant="outlined" 
                        label="Title" 
                        fullWidth
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>
                <TextField 
                        name="message" 
                        variant="outlined" 
                        label="Message" 
                        fullWidth
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, message: e.target.value})}/>
                <TextField 
                        name="tags" 
                        variant="outlined" 
                        label="Tags" 
                        fullWidth
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}/>
                <div className={classes.fileInput}>
                <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData,selectedFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Enviar</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Limpiar formulario</Button>
            </form>
        </Paper>
    )
}
