import {useState} from "react";

export const useValidationHandler = () => {
    const errorsInitialState={
        errors:{
            name:{
                message:'',
                status:''
            },
            email:{
                message:'',
                status:''
            },
            message:{
                message:'',
                status:''
            }
        }
    }
    const[validation,setValidation]= useState(errorsInitialState);

    const updateErrors = (errors) => {
        setValidation({
            ...validation,
                errors
        });
    }

    return {validation, updateErrors}
}