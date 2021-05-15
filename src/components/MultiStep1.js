import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const Step1 = (props) => {
    const { data, handleChange, next } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <div>
                <h3>What type of age bracket is needed</h3>
                <h5>Make a selection based on the desired age group</h5>
                <form>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Age Bracket</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            name="ageBracket"
                            value={data.ageBracket}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Adult"}>Adult</MenuItem>
                            <MenuItem value={"Junior"}>Junior</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Step1;