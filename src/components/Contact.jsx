import {useEffect, useState} from "react"
import { ContactForm, Input, Label, TextArea } from "../assets/styles/components/ContactForm"
import Container from "../assets/styles/components/Container"
import {Button} from "../assets/styles/components/Generics/Button"
import { Row, Column } from "../assets/styles/components/Grid"
import { ContactBox, ContactBoxRight, ContactSection } from "../assets/styles/pages/home/ContactSection"
import { useGetThemeSettings } from "../hooks/useGetThemeSettings"
import {useHandleInputChange} from "../hooks/useHandleInputChange.jsx";
import emailValidation from "../helpers/emailValidation.jsx";
import {useValidationHandler} from "../hooks/useValidationHandler.jsx";
import {singleEmptyInputValidation,inputsStatusValidation,emptyInputsValidation} from "../helpers/emptyValidation.jsx";


const Contact = () => {
    const {themeSettings} = useGetThemeSettings();

    const {form, updateForm} = useHandleInputChange();
    const {validation, updateErrors} = useValidationHandler();
    const {email, name, message} = validation.errors;

    const handleInputChange = (e) => {
        let errors = {};
        const {name, value} = e.target;
        updateForm(e);

        if(name === 'email') errors = emailValidation(name, value, {...validation.errors});
        else errors = singleEmptyInputValidation(name, value, {...validation.errors});

        updateErrors(errors);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const errors = emptyInputsValidation(validation, form);
        updateErrors(errors);

        const isSuccess = inputsStatusValidation(errors);

        if(!isSuccess){/*Submit the data*/}
    }

    return ( 
    <ContactSection id='contact' $theme={themeSettings}>
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
                                        id='name'
                                        placeholder="Name" 
                                        onChange={handleInputChange}
                                        value={form.name}/>
                                <Label $show={name?.message} htmlFor="name">{name?.message}</Label>
                                
                                <Input $theme={themeSettings} 
                                        $error={email?.status} 
                                        type="email" 
                                        name="email"
                                        id='email'
                                        placeholder="Email"  
                                        onChange={handleInputChange}
                                        value={form.email}/>
                                <Label $show={email?.message} htmlFor="email">{email?.message}</Label>
                                
                                <TextArea as='textarea' 
                                            $theme={themeSettings} 
                                            $error={message?.status} 
                                            name="message"
                                            id='message'
                                            placeholder="Message" 
                                            onChange={handleInputChange}
                                            value={form.message}/>
                                <Label $show={message?.message} htmlFor="message">{message?.message}</Label>
                                
                                <Button type="submit"
                                        $theme={themeSettings}  
                                        $align='right' 
                                        $w='160px'
                                        $mt='35px'>Send Message</Button>
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