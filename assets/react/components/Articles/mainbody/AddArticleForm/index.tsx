import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import apiFetcher from '../../../../services/apiFetcher';
import Loader from '../../../Loader';

interface IProps {

}

const RegisterForm: React.FC<IProps> = () => {

    const [error, setError] = React.useState<string>();
    const [errorMail, setErrorMail] = React.useState<string>();
    const [name, setName] = React.useState<string>(" ");
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
        if(name === "" || name === "*"){
            setErrorMail('Veuillez remplir ce champ');
            setColorMail('#bb0000');
        }else {
            setErrorMail('');
            setColorMail('#0a0047');
        }
        
    },[name]);

    const register = async (e:any) => {
        
        setLoading(true);
        setSubmited(true);

        e.preventDefault();
        const formData = new FormData(e.target);
    
        const data:any = {
            description: formData.get('description'),
            last_name: formData.get('lastname'),
            price: formData.get('price') ?? null,
            quantity: formData.get('quantity') ?? "",
        };

        if(data.price === "" || data.last_name === "" || data.quantity === "" || data.description === ""){
            setError('Veuillez remplir les champs nom, description, quantité et prix');
            setLoading(false);
            return;   
        }

        if(errorMail !== ""){
            setError('Veuillez remplir les champs nom, description, quantité et prix correctement');
            setLoading(false);
            return;
        }


        
        let reponse = await apiFetcher.postApiFetcher('/api/register', data);

        if(reponse.data.status === "Product exist"){
            setError(reponse.data.message);
            setLoading(false);
            return;
        }else {
            setError('');
            setLoading(false);
            window.location.href = '/articles';
        }

    }

    return(
        <Container>
            <Form onSubmit={register}>
                <Title>Ajout d'un article</Title>
                
                <Line>
                    <Col1>
                        <Input color={colorDefault}
                            type="text" 
                            placeholder="Nom"
                            name ='lastname'
                        />
                    </Col1>
                </Line>

                <Line>
                    <Col3>
                        <Input color={colorDefault}
                                type="textarea" 
                                placeholder="Description"
                                name ='description'
                            />
                    </Col3>
                </Line>
                
                <Line>
                    <Col1>
                        <Input color={colorDefault}
                            type="text" 
                            placeholder="Prix"
                            name ='price'
                        />
                    </Col1>

                    <Col2>
                        <Input color={colorDefault}
                            type="text" 
                            placeholder="Quantité"
                            name ='quantity'
                         />
                    </Col2>
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