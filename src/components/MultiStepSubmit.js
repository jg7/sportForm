import React from "react";
const Submit = (props) => {
    const { data, handleChange } = props;
    const listItems = Object.entries(data).map(([key, value]) => (
        <li>
            <strong>{key}:</strong> {value}
        </li>
    ));
    return (
        <div>
            <div>
                <ul>{listItems}</ul>
            </div>
            <form>
                <label htmlFor="teamName">Team Name:</label>
                <input
                    type="text"
                    name="teamName"
                    value={data.teamName}
                    onChange={handleChange}
                />
            </form>
            <button type="submit">Submit</button>
        </div>
    );
};
export default Submit;