import { useState } from "react"
import { ContactForm, Input, Label, TextArea } from "../assets/styles/components/ContactForm"
import Container from "../assets/styles/components/Container"
import {Button} from "../assets/styles/components/Generics/Button"
import { Row, Column } from "../assets/styles/components/Grid"
import { ContactBox, ContactBoxRight, ContactSection } from "../assets/styles/pages/home/ContactSection"
import { useGetThemeSettings } from "../hooks/useGetThemeSettings"



const Contact = () => {

    const {themeSettings} = useGetThemeSettings();

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [validation, setValidation] = useState({
        errors: {
            name: '',
            email: '',
            message:''
        }
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        });
        
        isInputEmpty();
    } 

    const isInputEmpty = () => {
       const errors = {};

       for(const input in form){
            if(!form[input]){
                errors[input] = {
                    message: `The input ${input.toUpperCase()} can not be empty.`,
                    status: 'error'
                }
            } else{
                errors[input] = {
                    status: 'success'
                }
            }
        }

        setValidation({
            ...validation,
            errors
        });
    }

    const handleValidation = () => {
        isInputEmpty();
        console.log(validation)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        /**...Send the data */
       
        handleValidation();
       
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
                                <Label htmlFor="name">{name?.message}</Label>
                                
                                <Input $theme={themeSettings} 
                                        $error={email?.status} 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email"  
                                        onChange={handleInputChange}  
                                        value={form.email}/>
                                <Label htmlFor="name">{email?.message}</Label>
                                
                                <TextArea as='textarea' 
                                            $theme={themeSettings} 
                                            $error={message?.status} 
                                            name="message" 
                                            placeholder="Message" 
                                            onChange={handleInputChange}  
                                            value={form.message}/>
                                <Label htmlFor="name">{message?.message}</Label>
                                
                                <Button role="submit" 
                                        $theme={themeSettings}  
                                        $align='right' 
                                        $w='160px'>Send Message</Button>
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