import React from "react";

const Step3 = (props) => {
    const { data, handleChange, next, back } = props;
    const [skill, setSkill] = React.useState([]);

    const handleSkillSelect = (event) => {
        if (event.target.checked) {
            setSkill(arr => [...arr, event.target.value]);
        }
    }

    const skillOptions = ["Bronze", "Silver", "Gold", "High School", "Club"].map((cur, ind) => {
        return (
            <div key={ind} className="checks" >
                <label>
                    <input type="checkbox" id={cur} name={cur} value={cur}
                        onChange={handleSkillSelect} />{cur}
                </label>
            </div>
        )
    })

    return (
        <div>
            <h1>What is the age range needed for this division?</h1>
            <h3>Choose from a list of classification below</h3>
            <div>
                {skillOptions}
            </div>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </div>
    );
};
export default Step3;