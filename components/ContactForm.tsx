import { Label, Input, Textarea } from "@rebass/forms";
import { env } from "process";
import { useState } from "react";
import { Flex, Box, Text } from "rebass";
import styled from "styled-components";
import theme from "../utils/theme";
import Button from './Button'
import axios from 'axios'

const ContactForm = (props : any) => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')



    return (
        <StyledContactForm flexDirection="column" className="form">
            <Box className="form-header">
                <Text as="p" className="form-title" sx={{
                    lineHeight: '2.25rem',
                    fontWeight: 600,
                    fontSize: '1.5rem'
                }}>
                    ¿PENSANDO QUE TECNOLOGÍA SUMAR A TU CONSULTORIO?
                </Text>
                <Text 
                    as="p" 
                    className="form-subtitle" 
                    sx={{mb: '1rem', lineHeight: '1.5rem', opacity: 0.7}}
                >
                    Escribinos, contanos qué tipo de tratamiento realizás y te asesoramos de manera personalizada.
                </Text>
            </Box>
            <Box as="form" className="form-body" onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
                console.log(email);
                console.log(name);
                console.log(message);

                let form = {
                    name: name,
                    message: message,
                    email: email
                };

                axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}/api/ezforms/submit`, {formData: form})
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((error) => {
                    // error.response.status Check status code
                    }).finally(() => {
                    //Perform action in always
                });
            }}>
                <Box className="form-field">
                    <Label htmlFor="name">Nombre y Apellido</Label>
                    <Input id="name" name="name" required onChange={(e) => {setName(e.target.value)}}/>
                </Box>
                <Box className="form-field">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" name="email" placeholder="ejemplo@mail.com" required onChange={(e) => {setEmail(e.target.value)}} />
                </Box>
                <Box className="form-field">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea id="message" name="message" required onChange={(e) => {setMessage(e.target.value)}}/>
                </Box>
                <Box className="form-field">
                    <Button className={"form-submit"}>Enviar</Button>
                </Box>
            </Box>
        </StyledContactForm>
    );
}


const StyledContactForm = styled(Flex)`
    .form-body {
        .form-field {
            margin-bottom: 1rem;
            label {
                margin-bottom: 0.5rem;
            }
            input,
            textarea {
                background: white;
                border-radius: 0.25rem;
                color: ${props => props.theme.color.font};
                font-family: 'Montserrat';
                font-size: 1rem;
            }
            textarea {
                height: 8rem;
            }
            &:last-child {
                margin-bottom: 0;
            }
            .form-submit {
                width: 100%;
            }
        }
    }
`;

export default ContactForm;