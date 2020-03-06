import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: '90%',
        margin: '20px auto',
    },
    pos: {
        marginBottom: 12,
    },
    input: {
        display: 'none',
    },
    label: {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    fileName: {
        marginBottom: 0,
        marginLeft: 10,
        fontSize: 18,
    },
});

const readFile = (event, setFileName, setJSONObject) => {
    const file = event.target.files[0];

    if (file) {
        setFileName(file.name);

        const reader = new FileReader();
        reader.onload = e => {
            try {
                const json = JSON.parse(e.target.result);
                setJSONObject(json);
            } catch (e) {
                alert('Невалидный JSON!');
                setJSONObject(null);
            }
        };

        reader.readAsText(file);
    } else {
        setJSONObject(null);
        setFileName(null);
    }
};

const FileUploader = ({ setJSONObject }) => {
    const classes = useStyles();
    const [fileName, setFileName] = useState('');

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6">Select your JSON file</Typography>
                <input
                    accept="application/json"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onInput={e => readFile(e, setFileName, setJSONObject)}
                />
                <label htmlFor="contained-button-file" className={classes.label}>
                    <Button variant="contained" color="primary" component="span">
                        Upload File
                    </Button>
                    <Typography className={classes.fileName} color="textPrimary" gutterBottom>
                        {fileName}
                    </Typography>
                </label>
            </CardContent>
        </Card>
    );
};

export default FileUploader;
