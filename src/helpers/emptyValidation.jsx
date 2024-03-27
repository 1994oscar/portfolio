const inputsStatusValidation = (errors)=>{
    const status=Object.values(errors);
    return status.find(input => input.status=== 'error' && input.status !== '');
}
const singleEmptyInputValidation = (inputName, inputValue, errors) => {
    if(!inputValue){
        errors[inputName]={
            message:`The input ${inputName.toUpperCase()} cannot be empty.`,
            status:'error'
        }
    }else{
        errors[inputName]={
            message:``,
            status:'success'
        }
    }
    return errors;
}

const emptyInputsValidation = (validation, form)=> {
    let errors = {...validation.errors};

    for (const input in form) {
        errors = singleEmptyInputValidation(input, form[input], errors);
    }

    return errors;
}

export {singleEmptyInputValidation, inputsStatusValidation, emptyInputsValidation}
