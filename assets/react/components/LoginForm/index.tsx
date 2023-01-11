import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import apiFetcher from '../../services/apiFetcher';

interface IProps {

}

const LoginForm: React.FC<IProps> = () => {
    return(
        <Container>
            <Form onSubmit={login}>
                <Title>Connexion</Title>
                <Input 
                    type="text" 
                    placeholder="Email"
                    name ='email'
                    
                />
                <Input 
                    type="password" 
                    placeholder="Mot de passe"
                    name ='password'
                    
                />
                <Button>Se connecter</Button>
            </Form>
        </Container>
    );
};


const login = async (e:any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data:any = {
        email: formData.get('email'),
        password: formData.get('password')
    };
    
    let reponse = await apiFetcher.postApiFetcher('/api/login', data);

    console.log(reponse);
        //redirect to dashboard
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 50%;
    background-color: #020202d4;
    border-radius: 10px;
`;

const Title = styled.h1`
    color: white;
    font-size: 2rem;
    margin-bottom: 2rem;
`;

const Input = styled.input`
    width: 80%;
    height: 2rem;
    border-radius: 5px;
    border: none;
    margin-bottom: 1rem;
    padding-left: 1rem;
`;

const Button = styled.button`
    width: 80%;
    height: 2rem;
    border-radius: 5px;
    border: none;
    background-color: #020202d4;
    color: white;
    font-size: 1rem;
    cursor: pointer;
`;



export default LoginForm;