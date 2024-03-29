import React, { useEffect } from 'react';
import styled from 'styled-components';
import apiFetcher from '../../../../services/apiFetcher';
import Loader from '../../../Loader';

interface IProps {

}

const DevisForm: React.FC<IProps> = () => {

    const [error, setError] = React.useState<string>();
    const [errorMail, setErrorMail] = React.useState<string>();
    const [name, setName] = React.useState<string>("");
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
            setName('');
        }else {
            setErrorMail('');
            setColorMail('#0a0047');
        }
        
    },[name]);

    const devis = async (e:any) => {
        
        setLoading(true);
        setSubmited(true);

        e.preventDefault();
        const formData = new FormData(e.target);
    
        const data:any = {
            society_infos: formData.get('society_infos'),
            article_infos: formData.get('article_infos'),
            total_price_ht: formData.get('total_price_ht') ?? null,
            total_price_ttc: formData.get('total_price_ttc') ?? "",
            type_of_payment: formData.get('type_of_payment') ?? "",
            status_payment: formData.get('status_payment') ?? "",
        };

        if(data.society_infos === "" || data.article_infos=== "" || data.total_price_ht === "" || data.total_price_ttc === "" || data.type_of_payment === "" || data.status_payment === ""){
            setError('Veuillez remplir les champs manquant');
            setLoading(false);
            return;   
        }

        if(errorMail !== ""){
            setError('Veuillez remplir les champs correctement');
            setLoading(false);
            return;
        }
        
        let reponse = await apiFetcher.postApiFetcher('/api/adddevis', data);

        if(reponse.data.status === "article creation error"){
            setError(reponse.data.message);
            setLoading(false);
            return;
        }else {
            setError('');
            setLoading(false);
            window.location.href = '/devis';
        }

    }

    return(
        <Container>
            <Form onSubmit={devis}>
                <Title>Ajout d'un article</Title>
                
                <Line>
                    <Col1>
                        <Input color={colorDefault}
                            onClick={(e) => {
                                if (e.target.value === "") {
                                    setName('*');
                                }}
                            }
                            onChange={ (e) =>
                                setName(e.target.value)
                            }
                            type="text" 
                            placeholder="Nom"
                            name ='Name'
                            defaultValue={name}
                        />
                    </Col1>
                    <Content>
                        {errorMail && <p className="text-danger">{errorMail}</p>}
                    </Content>
                </Line>

                <Line>
                    <Col3>
                        <Input color={colorDefault}
                                type="textarea" 
                                placeholder="Infos société"
                                name ='society_infos'
                            />
                    </Col3>
                </Line>
                
                <Line>
                    <Col1>
                        <Input color={colorDefault}
                            type="text" 
                            placeholder="Infos articles"
                            name ='article_infos'
                        />
                    </Col1>

                    <Col2>
                        <Input color={colorDefault}
                            type="text" 
                            placeholder="Prix total ht"
                            name ='total_price_ht'
                         />
                    </Col2>
                </Line>


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
export default DevisForm;