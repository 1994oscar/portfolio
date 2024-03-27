/**
 * Validate is valid email
 * */
const emailValidation = (inputName, inputValue, errors) => {

    const emailRegexp =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if(inputValue && !emailRegexp.test(inputValue)){
        errors[inputName] = {
            message: 'Sorry, invalid format here',
            status: 'error'
        }
    }else if(inputValue && emailRegexp.test(inputValue)){
        errors[inputName] = {
            message: '',
            status: 'success'
        }
    }

    return errors;
}

export default emailValidation;