import React, { useState } from 'react';
import Title from './Title';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { Icon } from './components/Icon';
import Input from './components/Input';
import Buttons from './components/index';
import Alert from './components/Alert';

const App = ({ className }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ev => {
        setInputValue(ev.target.value);
    };

    const [hasAlert, setHasAlert] = useState(true);

    return (
        <main className={className}>
            <GlobalStyle />

            {hasAlert ? (
                <Alert id="info" onClose={() => setHasAlert(false)}>
                    <strong>Alert!</strong> React commerce.
                </Alert>
            ) : null}

            <Title>React Commerce</Title>

            <Input placeholder="Type something" onChange={onInputChange} value={inputValue} />

            <Icon id="home" iconFill="blue" iconWidth="42" iconHeight="42" />

            <Buttons color="secondary" size="small">
                Hello, World
            </Buttons>
        </main>
    );
};

export default styled(App)`
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    justify-content: center;
    background-color: papayawhip;
`;
