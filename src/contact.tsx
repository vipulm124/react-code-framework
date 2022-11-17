import React  from "react";
import { RestEndPoint } from './utils/RestEndPoint';

import useBearStore from "./stores/bearStore";




function Contact(){
    const bears = useBearStore((state:any) => state.bears)
    console.log(bears);
    const increasePopulation = useBearStore((state:any) => state.increasePopulation)
    function greetUser(){
        console.log("I'am clicked!");
        increasePopulation();
        RestEndPoint.GetRequest(`${process.env.REACT_APP_API_URL}TrainingRegistration/getTrainingRegistrationById?trainingRegistrationId=2`, true);
        //throw Error('This is error');
    }

    return (
        <div>This is a Contact page

            <button onClick={greetUser}>Test Button</button>
            <p>Count of bears: {bears}</p>

        </div>
    )
}

export default Contact;