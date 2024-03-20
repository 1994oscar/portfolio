import { useState } from "react"
import { ContactForm, Input, Label, TextArea } from "../assets/styles/components/ContactForm"
import Container from "../assets/styles/components/Container"
import {Button} from "../assets/styles/components/Generics/Button"
import { Row, Column } from "../assets/styles/components/Grid"
import { ContactBox, ContactBoxRight, ContactSection } from "../assets/styles/pages/home/ContactSection"
import { useGetThemeSettings } from "../hooks/useGetThemeSettings"

const Contact = () => {

    const {themeSettings} = useGetThemeSettings();

    const [submitButton, setSubmitButton] = useState(false);

    const formInitialState = {
        name: '',
        email: '',
        message: ''
    }
    const [form, setForm] = useState(formInitialState);

    const errorsInitialState = {
           errors: {
               name: {
                   message: '',
                   status: ''
               },
               email: {
                   message: '',
                   status: ''
               },
               message:{
                   message: '',
                   status: ''
               }
           }
    }
    const [validation, setValidation] = useState(errorsInitialState);

    /**
     * Check the input when user types.
     * Disabled the submit button if something wrong
     */
    const handleInputChange = (e) => {
        let errors = {...validation.errors};
        const {name, value} = e.target;

        if(name === 'email'){
            errors = emailValidation(name, value, errors);
        }else{
           errors = emptyValidation(name, value, errors);
        }

        const isSuccess = inputsStatusValidation(errors);

        //Hooks
        setForm({
            ...form,
            [name]: value
        });

        setValidation({
            ...validation,
            errors
        });

        setSubmitButton(isSuccess);
    } 

    /**
     * Check if an input is empty
     * */
    const emptyValidation = (inputName, inputValue, errors) => {
        if(!inputValue){
            errors[inputName] = {
                message: `The input ${inputName.toUpperCase()} can not be empty.`,
                status: 'error'
            }
        }else{
            errors[inputName] = {
                message: ``,
                status: 'success'
            }
        }

        return errors;
    }

    /**
     * Check the status validation for all inputs
     * */
    const inputsStatusValidation = (errors) => {
        const status = Object.values(errors);
        return status.find(input => input.status === 'error' && input.status !== '');
    }

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
        }else{
           errors = emptyValidation(inputName, inputValue, errors);
        }

        return errors;
    }

    /**
     * Check all inputs in general if are empty and validation statuses
     * */
    const checkEmptyStatusInputs = () => {
        let errors = {...validation.errors};

        for(const input in form){
            errors = emptyValidation(input,form[input], errors);
        }

        setValidation({
            ...validation,
            errors
        });

        const isSuccess = inputsStatusValidation(errors);
        setSubmitButton(isSuccess);

        return isSuccess;
    }

    const formReset = () => {
            setForm(formInitialState);
            setValidation(errorsInitialState);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!checkEmptyStatusInputs()){
           //Ready to submit

            formReset();
        }
    }
  
    const {name, email, message} = validation.errors;

    return ( 
    <ContactSection $theme={themeSettings}>
        <Container>
            <Row>
                <Column $size='48%'>
                    <ContactBox $theme={themeSettings}>
                    <h1>Contact</h1>
                    <p>I would love to hear about your project and how I could help. Please fill in the form,
                        and I’ll get back to you as soon as possible.
                    </p>
                    </ContactBox>
                </Column>
                <Column $size='48%'>
                    <ContactBoxRight $theme={themeSettings}>
                        <ContactForm $theme={themeSettings} $w='445px'>
                            <form onSubmit={handleFormSubmit}>
                                <Input $theme={themeSettings} 
                                        $error={name?.status} 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name" 
                                        onChange={handleInputChange}  
                                        value={form.name}/>
                                <Label $show={name?.message} htmlFor="name">{name?.message}</Label>
                                
                                <Input $theme={themeSettings} 
                                        $error={email?.status} 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email"  
                                        onChange={handleInputChange}  
                                        value={form.email}/>
                                <Label $show={email?.message} htmlFor="name">{email?.message}</Label>
                                
                                <TextArea as='textarea' 
                                            $theme={themeSettings} 
                                            $error={message?.status} 
                                            name="message" 
                                            placeholder="Message" 
                                            onChange={handleInputChange}  
                                            value={form.message}/>
                                <Label $show={message?.message} htmlFor="name">{message?.message}</Label>
                                
                                <Button role="submit" 
                                        $theme={themeSettings}  
                                        $align='right' 
                                        $w='160px'
                                        $mt='35px'
                                        disabled = {submitButton}>Send Message</Button>
                            </form>
                        </ContactForm>   
                    </ContactBoxRight>
                </Column>
            </Row>
        </Container>
    </ContactSection>
  )
}

export default Contact