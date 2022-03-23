import React from 'react';
import './Widget.css';
import logo from './logo.svg';
import icon from './icon.svg';
import { useTextKitWidget } from '@statflo/textkit-widget-sdk-react'

export default function Widget() {
    const { state, setOpen, appendMessage, replaceMessage } = useTextKitWidget();

    const handleReplace = () => {
        replaceMessage('This will replace the message content.');
        setOpen(false);
    }

    const handleAppend = () => {
        appendMessage('This will be appended to an existing message.');
        setOpen(false);
    }

    return (
        <div className='widget-container' style={{ height: state.maxHeight }}>
            <div className='widget-flex-container'>
                <img src={icon} alt="Icon" />

                <h1 className='widget-title'>
                    This is a Sendable Widget.
                </h1>

                <p className='widget-copy'>Sendable Widgets are accessed by clicking the “+” icon next to the message bar and are meant to provide users with tools/content that can be shared with the contact to assist the conversation.</p>

                <p className='widget-copy'>Sendable Widgets can speak directly with TextKit and can be customized however you need - build unique flows/tools or connect external apps.</p>

                <a href='https://docs.textkit.io' rel='noreferrer' target="_blank" className='widget-link widget-link__doc'>Read our docs to learn more.</a>
            </div>
            <div className='widget-flex-container'>
                <img src={logo} alt="TextKit Logo" />
            </div>
            <div className='widget-action-bar'>
                <button onClick={handleReplace} className='widget-button'>Replace Messsage</button>
                <button onClick={handleAppend} className='widget-button'>Append Messsage</button>
            </div>
        </div>
    )
}