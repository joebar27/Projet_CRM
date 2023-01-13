import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import apiFetcher from '../../services/apiFetcher';
import logo from '../../../img/logo.svg';

interface IProps {

}

const RegisterForm: React.FC<IProps> = () => {
    return(
        <Container>
            <Form onSubmit={register}>
                <Image src={logo} alt="Logo"></Image>
                <Title>Inscription</Title>
                
                <Line>
                    <Col1>
                        <Input 
                            type="text" 
                            placeholder="Nom"
                            name ='lastname'
                        />
                    </Col1>

                    <Col2>
                        <Input 
                            type="text" 
                            placeholder="Prénom"
                            name ='firstname'
                         />
                    </Col2>
                </Line>
                
                <Line>
                    <Col1>
                        <Input 
                            type="text" 
                            placeholder="Tél."
                            name ='phone'
                        />
                    </Col1>

                    <Col2>
                        <Input 
                            type="text" 
                            placeholder="Adresse"
                            name ='address'
                         />
                    </Col2>
                </Line>

                <Line>
                    <Col1>
                        <Input 
                            type="text" 
                            placeholder="Ville"
                            name ='city'
                        />
                    </Col1>

                    <Col2>
                        <Input 
                            type="text" 
                            placeholder="Code postal"
                            name ='zip_code'
                         />
                    </Col2>
                </Line>

                <Line>
                    <Col3>
                        <Input 
                            type="text" 
                            placeholder="Email"
                            name ='email'
                         />
                    </Col3>
                </Line>

                <Line>
                    <Col3>
                        <Input 
                            type="password" 
                            placeholder="Mot de passe"
                            name ='password'
                         />
                    </Col3>
                </Line>

                <Line>
                    <Col3>
                        <Input 
                            type="password" 
                            placeholder="Confirmation de mot de passe"
                            name ='confirm_password'
                         />
                    </Col3>
                </Line>

                <Button>S'enregistrer</Button>
            </Form>
        </Container>
    );
};


const register = async (e:any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data:any = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        password: formData.get('password')
    };
    
    let reponse = await apiFetcher.postApiFetcher('/api/register', data);

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
    height: 70%;
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

const Line = styled.div`
    width : 100%;
`;

const Col1 = styled.div`
    float:left;
    width:50%;
    margin-left:3%;
`;

const Col2 = styled.div`
    margin-left:50%;
    margin-right:3%;

`;

const Col3 = styled.div`
    float:left;
    width:110%;
    margin-left:3%;
`;

export default RegisterForm;