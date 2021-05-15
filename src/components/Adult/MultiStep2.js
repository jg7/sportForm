import React from "react";

const Step2 = (props) => {
    const { data, handleChange, next, back } = props;
    const [gender, setGender] = React.useState([]);

    const handleGenderSelect = (event) => {
        if (event.target.checked) {
            setGender(arr => [...arr, event.target.value]);
        }
    }

    const genderOptions = ["Male", "Female", "Coed"].map((cur, ind) => {
        return (
            <div key={ind} className="checks" >
                <label>
                    <input type="checkbox" id={cur} name={cur} value={cur}
                        onChange={handleGenderSelect} />{cur}
                </label>
            </div>
        )
    })

    return (
        <div>
            <h1>What gender group(s) are needed for this division?</h1>
            <h3>Make a selection based on the options below</h3>
            <div>
                {genderOptions}
            </div>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </div>
    );
};
export default Step2;