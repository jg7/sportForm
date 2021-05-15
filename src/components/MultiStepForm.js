import React, { useState } from "react";
import Step1 from "./MultiStep1";
import Step2 from "./Adult/MultiStep2";
import StepJ2 from "./Junior/MultiStep2";
import Step3 from "./Adult/MultiStep3";
import StepJ3 from "./Junior/MultiStep3";
import Step4 from "./Adult/MultiStep4"
import Submit from "./MultiStepSubmit";

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        ageBracket: "",
        gender: [],
        range: [],
        skills: [],
        teamName: "",
    });

    const handleChange = (event) => {
        console.log(event.target.value);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const next = () => {
        setCurrentStep(currentStep + 1);
    };
    const back = () => {
        setCurrentStep(currentStep - 1);
    };

    switch (currentStep) {
        case 1:
            return (
                <Step1
                    data={formData}
                    handleChange={handleChange}
                    next={next}
                />
            );
        case 2:
            if (formData.ageBracket === "Adult") {
                return (
                    <Step2
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                );
            }
            else if (formData.ageBracket === "Junior") {
                return (
                    <StepJ2
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                );
            }
        case 3:
            if (formData.ageBracket === "Adult") {
                return (
                    <Step3
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                );
            }
            else if (formData.ageBracket === "Junior") {
                return (
                    <StepJ3
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                );
            }
        case 4:
            if (formData.ageBracket === "Adult") {
                return (
                    <Step4
                        data={formData}
                        handleChange={handleChange}
                        next={next}
                        back={back}
                    />
                );
            }
            else if (formData.ageBracket === "Junior") {
                setCurrentStep(currentStep + 1);
            }
        default:
            return <Submit data={formData} handleChange={handleChange} back={back} />;
    }
};
export default MultiStepForm;