import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import apiFetcher from '../../services/apiFetcher';
import logo from '../../../img/logo.svg';
import Loader from '../Loader';

interface IProps {

}

const RegisterForm: React.FC<IProps> = () => {

    const [error, setError] = React.useState<string>();
    const [errorMail, setErrorMail] = React.useState<string>();
    const [email, setEmail] = React.useState<string>(" ");
    const [isLoading, setLoading] = React.useState(false);
    const [submited, setSubmited] = React.useState<boolean>(false);
    const [firstRender, setFirstRender] = React.useState<boolean>(true);
    const [colorMail, setColorMail] = React.useState<string>('#0a0047');
    const [colorDefault, setColorDefault] = React.useState<string>('#0a0047');

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

    const register = async (e:any) => {
        
        setLoading(true);
        setSubmited(true);

        e.preventDefault();
        const formData = new FormData(e.target);
    
        const data:any = {
            first_name: formData.get('firstname'),
            last_name: formData.get('lastname'),
            email: formData.get('email'),
            phone: formData.get('phone') ?? null,
            address: formData.get('address') ?? "",
            city: formData.get('city') ?? "",
            zip_code: formData.get('zip_code') ?? null,
        };

        if(data.first_name === "" || data.last_name === "" || data.email === ""){
            setError('Veuillez remplir les champs Nom, Prenom et email');
            setLoading(false);
            return;   
        }

        if(errorMail !== ""){
            setError('Veuillez remplir les champs Nom, Prenom et email correctement');
            setLoading(false);
            return;
        }


        
        let reponse = await apiFetcher.postApiFetcher('/api/register', data);

        if(reponse.data.status === "User exist"){
            setError(reponse.data.message);
            setLoading(false);
            return;
        }else {
            setError('');
            setLoading(false);
            window.location.href = '/';
        }

    }

    return(
        <Container>
            <Form onSubmit={register}>
                <Image src={logo} alt="Logo"></Image>
                <Title>Inscription</Title>
                
                <Line>
                    <Col1>
                        <Input color={colorDefault}
                            type="text" 
                            placeholder="Nom"
                            name ='lastname'
                        />
                    </Col1>

                    <Col2>
                        <Input color={colorDefault}
                            type="text" 
                            placeholder="Prénom"
                            name ='firstname'
                         />
                    </Col2>
                </Line>
                
                <Line>
                    <Col1>
                        <Input color={colorDefault}
                            type="text" 
                            placeholder="Tél."
                            name ='phone'
                        />
                    </Col1>

                    <Col2>
                        <Input color={colorDefault}
                            type="text" 
                            placeholder="Adresse"
                            name ='address'
                         />
                    </Col2>
                </Line>

                <Line>
                    <Col1>
                        <Input color={colorDefault}
                            type="text" 
                            placeholder="Ville"
                            name ='city'
                        />
                    </Col1>

                    <Col2>
                        <Input color={colorDefault}
                            type="text" 
                            placeholder="Code postal"
                            name ='zip_code'
                         />
                    </Col2>
                </Line>

                <Line>
                    <Col3>
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
                            placeholder="Email"
                            name ='email'
                            defaultValue={email}
                         />
                    </Col3>
                </Line>
                <Content>
                    {errorMail && <p className="text-danger">{errorMail}</p>}
                </Content>

                <Button>Enregistrer</Button>

                <Content>
                    {isLoading && <Loader></Loader>}
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

const Content = styled.div`
    padding: 0 2rem;
`
export default RegisterForm;