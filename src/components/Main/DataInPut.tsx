import React, { useState } from "react";
import { Alert, Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import '../../scss/main/_dataInPut.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

type PostProps = {
    id: number
};

const DataInPut: NextPage = () => {
    const router = useRouter();
    const [id, setId] = React.useState<number>(0);
    const [number, setNumber] = React.useState<string>("");
    const [validate, setValidate] = useState(true);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let numberValue: number = +event.target.value;
        if (!event.target.value) {
            setValidate(true);
            setId(0);
            setNumber("");
            setMessage("Enter a number between [1,100]");
        } else {
            if (numberValue > 0 && numberValue <= 100) {
                setNumber(""+numberValue);
                setId(numberValue);
                setValidate(false);
                setMessage("");
            } else {
                setId(0);
                setNumber("");
                setValidate(true);
                setMessage("Enter a number between [1,100]");
            }
        }

    }

    const handleFetch = () => {
        setIsLoading(true);
        setValidate(false);
        router.push('/diploai/search/[id]', `/diploai/search/${id}`);
    };

    return (
        <div>
            <h1 className="title">DiploAI</h1>
            <p className="text">Please enter a number</p>
            <Form onSubmit={ev => {
                ev.preventDefault();
                //checkInPut(ev);
            }}>
                <input
                    type="text"
                    className=""
                    value={number}
                    onChange={handleChange}
                    pattern="[0-9]{0,3}"

                />
            </Form>
            <br />
            <Button
                className="btn btn-secondary btn-sm"
                disabled={validate}
                onClick={handleFetch}
            >Sign up</Button>
            <p>{message}</p>
            {isLoading && 
              <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
             </div>
            }
        </div>
    );
}
export default DataInPut;