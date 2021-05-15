import React from "react";

const Step3 = (props) => {
    const { data, handleChange, next, back } = props;
    const [group, setGroup] = React.useState([]);

    const handleGroupSelect = (event) => {
        if (event.target.checked) {
            setGroup(arr => [...arr, event.target.value]);
        }
    }

    const groupOptions = ["26-U", "40-U", "50-U", "60-U", "70-U"].map((cur, ind) => {
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
            <h1>What is the age range needed for this division?</h1>
            <h3>Choose from a list of classification below</h3>
            <div>
                {groupOptions}
            </div>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </div>
    );
};
export default Step3;