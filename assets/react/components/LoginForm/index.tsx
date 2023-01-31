import React, { useEffect } from 'react';
import styled from 'styled-components';
import apiFetcher from '../../services/apiFetcher';
import logo from '../../../img/logo.svg';
import authentificationService from '../../services/authentificationService';
import Loader from '../Loader';


const LoginForm: React.FC = () => {

    const [error, setError] = React.useState<string>();
    const [errorMail, setErrorMail] = React.useState<string>();
    const [email, setEmail] = React.useState<string>(" ");
    const [password, setPassword] = React.useState<string>("");
    const [errorPassword, setErrorPassword] = React.useState<string>();
    const [isLoading, setLoading] = React.useState(false);
    const [submited, setSubmited] = React.useState<boolean>(false);
    const [firstRender, setFirstRender] = React.useState<boolean>(true);
    const [colorMail, setColorMail] = React.useState<string>('#0a0047');
    const [colorPass, setColorPass] = React.useState<string>('#0a0047');


    useEffect(() => {
        if (submited && sessionStorage.getItem('token')) {
            setSubmited(true);
            setError('');
        }
    },[]);
    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
            return;
        }
        if(password === "" || password === "*"){
            setErrorPassword('Veuillez remplir ce champ');
            setPassword('');
            setColorPass('#bb0000');
        }else{
            setErrorPassword('');
            setColorPass('#0a0047');
        }
    },[password]);
    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
            return;
        }
        if(email === "" || email === "*"){
            setErrorMail('Veuillez remplir ce champ');
            setColorMail('#bb0000');
        }else if(email.match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$") === null ){
            setErrorMail('veuillez entrer une adresse mail valide');
            setColorMail('#bb0000');
        }else {
            setErrorMail('');
            setColorMail('#0a0047');
        }
        
    },[email]);
    

    const login = async (e:any) => {
        e.preventDefault();
        setLoading(true);
        setSubmited(true);
        
        const formData = new FormData(e.target);
        const data:any = {
            username: formData.get('email'),
            password: formData.get('password')
        };

        if(data.username === "" || data.password === ""){
            setError('Veuillez remplir tous les champs');
            setLoading(false);
            return;   
        }
        if (errorMail != "" || errorPassword != "") {
            setError('Veuillez remplir tous les champs correctement');
            setLoading(false);
            return;
        }
        
        let reponse = await apiFetcher.postApiFetcher('/api/login_check', data);

        if(reponse.data.token === undefined){
            setError(reponse.data.message);
            setLoading(false);
            return;
        }else if(reponse.data.token){
            setError('')
            authentificationService.loggin(reponse.data.token);
            setLoading(false);
            // redirection vers la page d'accueil
            window.location.href = '/'; 
        }

        
    }

    return(
        <Container>
            <Form onSubmit={login}>
                <Image src={logo} alt="Logo"></Image>
                <Title>Connexion</Title>
                <Input color={colorMail}
                    onClick={(e) => {
                        if (e.target.value === "") {
                            setEmail('*');
                        }}
                    }
                    onChange={ (e) =>
                        setEmail(e.target.value)
                    }
                    type="email"
                    placeholder="email"
                    name ='email'
                    defaultValue={email}
                />
                <Content>
                    {errorMail && <p className="text-danger">{errorMail}</p>}
                </Content>
                <Input color={colorPass}
                    onClick={ (e) => {
                        if (e.target.value === "") {
                            setPassword('*');
                        }
                    }}
                    onChange={ (e) => {
                        setPassword(e.target.value);
                    }}
                    type="password" 
                    placeholder="Mot de passe"
                    name ='password'
                    defaultValue={password}
                />
                <Content>
                    {errorPassword && <p className="text-danger">{errorPassword}</p>}
                </Content>
                <Button >Se connecter</Button>
                <Content>
                    {isLoading && <Loader/>}
                    {error && <p className="text-danger">{error}</p>}
                </Content>
            </Form>
        </Container>
    );
};




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
    height: 80%;
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 5px solid #0a0047;
`;

const Title = styled.h1`
    color: #0a0047;
    font-size: 2rem;
    margin-bottom: 2rem;
`;

const Input = styled.input <{color: string}>`
    width: 80%;
    height: 2rem;
    border-radius: 15px;
    border: 2px solid ${props => props.color};
    margin-bottom: 1rem;
    padding-left: 1rem;
    &::placeholder {
        color: ${props => props.color} ;
    }
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

const Content = styled.div`
    padding: 0 2rem;
`


export default LoginForm;