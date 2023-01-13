import React from 'react';
import styled from 'styled-components';
import apiFetcher from '../../services/apiFetcher';
import logo from '../../../img/logo.svg';
import authentificationService from '../../services/authentificationService';


interface IProps {

}

const LoginForm: React.FC<IProps> = () => {
    return(
        <Container>
            <Form onSubmit={login}>
                <Image src={logo} alt="Logo"></Image>
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
        username: formData.get('email'),
        password: formData.get('password')
    };

    //decodage du token et mise en session
    let reponse = await apiFetcher.postApiFetcher('/api/login_check', data)
    authentificationService.loggin(reponse.token);
    
    // redirection vers la page d'accueil
    window.location.href = '/';
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
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 5px solid #0a0047;
`;

const Title = styled.h1`
    color: #0a0047;
    font-size: 2rem;
    margin-bottom: 2rem;
`;

const Input = styled.input`
    width: 80%;
    height: 2rem;
    border-radius: 15px;
    border: 2px solid #0a0047;
    margin-bottom: 1rem;
    padding-left: 1rem;
`;

const Button = styled.button`
    width:  85%;
    height: 2rem;
    border-radius: 15px;
    background-color: #0a0047;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
`;

const Image = styled.img`
    width : 30%;
`;


export default LoginForm;