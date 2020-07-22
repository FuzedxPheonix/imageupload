import React, {useState} from 'react';
import { Container, InputLabel, Button, CssBaseline, Box, TextField, Input  } from '@material-ui/core';
import { makeStyles, createStyles, createMuiTheme } from '@material-ui/core/styles';
import ImageUploadView from "./ImageUpload";
import {readFile} from "fs";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
    spacing: 4,
});

const useStyles = makeStyles({
    root: {
        background: '#FAF3EC',
        width: 'auto',
        position: 'absolute',
        top: 'calc(50% - 240px)',
        left: 'calc(40% - 160px)',
    },
    formImage : {
        boxShadow: '0 0 10px' ,
        backgroundColor: 'white',
        width: '500px',
        height: '500px',
        display: 'flex',
        flexWrap: 'wrap',
        // border-radius:'15px 15px 15px 15px',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    divForm: {
        width: '90%',
    },
    image: {
        width: "90%",
        height: "35%",
        margin: "8px"
    },
    paperRoot: {
        maxWidth: 345,
    }

});

function ImageForm() {
    const classes = useStyles();
    const [file, setFile] = useState("");
    const [text, setText] = useState("");

    function handleChange(e) {
        let url = URL.createObjectURL(e.target.files[0]);
        setFile(url)
        console.log(url)
    }

    return(
        <Box component="main"  className={classes.root} width="auto" height="auto">
            <Box className={classes.formImage}>


                <div className={classes.divForm}>

                    <h1 style={{ margin: 8 }}>
                        Upload an Image
                    </h1>

                    <TextField
                        id="outlined-full-width"
                        label="Text"
                        style={{ margin: 8 }}
                        placeholder="Enter Text For Image"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"

                        onChange={event => setText(event.target.value)}
                    />

                    <TextField
                        id="outlined-full-width"
                        label="Image Upload"
                        style={{ margin: 8 }}
                        name="upload-photo"
                        type="file"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={ handleChange}
                    />
                    {
                        file.length > 0 &&

                        <Card className={classes.paperRoot}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={file}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {text}
                                </Typography>
                            </CardContent>
                        </Card>
                    }
                </div>
            </Box>
        </Box>
    )
}

export default ImageForm;