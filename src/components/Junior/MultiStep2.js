import React from "react";

const Step2 = (props) => {
    const { data, handleChange, next, back } = props;
    const [group, setGroup] = React.useState([]);

    const handleGroupSelect = (event) => {
        if (event.target.checked) {
            setGroup(arr => [...arr, event.target.value]);
        }
    }

    const groupOptions = ["13-U", "14-U", "15-U", "16-U", "17-U"].map((cur, ind) => {
        return (
            <div key={ind} className="checks" >
                <label>
                    <input type="checkbox" id={cur} name={cur} value={cur}
                        onChange={handleGroupSelect} />{cur}
                </label>
            </div>
        )
    })

    return (
        <div>
            <h1>What gender group(s) are needed for this division?</h1>
            <h3>Make a selection based on the options below</h3>
            <div>
                {groupOptions}
            </div>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </div>
    );
};
export default Step2;