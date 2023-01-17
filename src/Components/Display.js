import React, { useState } from "react";
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import hi from "../Gallery/Hi.jpg";
import end from "../Gallery/end.png";
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Display() {
    const [giveData, setGiveData] = useState(['My Name is Chandra'])
    const getData = async (url) => {
        const newData = await fetch(url, {
            method: 'GET',
            header: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json());
        console.log(newData);
        setGiveData(newData.result);
    }

    const changeValue = () => {
        if (giveData === 'My Name is Chandra' || giveData === 'Hi') {
            <img src="" alt=""></img>
            getData('/quit');

        }
        else {

            getData('/api');
        }
    }
    const Reset = () => {
        setGiveData('My Name is Chandra');
    }

    return (
        <div>
            <div>
                <Row>
                    <Col>
                        <Button onClick={changeValue} animated='fade'>
                            <Button.Content hidden> Change </Button.Content>
                            <Button.Content visible>
                                Click To
                            </Button.Content>
                        </Button>

                        <Button onClick={Reset} animated='verticle'>
                            <Button.Content hidden> Reset </Button.Content>
                            <Button.Content visible>
                                Click To
                            </Button.Content>
                        </Button>
                    </Col>

                </Row>

            </div>
            {giveData}
            <div>
                {giveData === 'Hi' &&
                    <img src={hi} alt="hi"></img>
                }
                {giveData === 'the end' &&
                    <img src={end} alt="hi"></img>

                }
            </div>

        </div>
    );
}

export default Display;

