import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useEffect } from 'react';

const StyledEmailForm = styled.form`
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    padding: 5%;
    margin: -3vw;
    font-size: max(1.8vw, 1rem);
    display: grid;
    grid-template-rows: auto auto 1fr;
    border-radius: 10px;

    @media (max-width: 768px) {
        margin: -23px;
        font-size: 1rem;
    }

    div {
        width: 100%;
    }
    div:last-child {
        height: 100%;
    }
    label {
        display: inline-block;
        width: 24%;
        margin-bottom: 6px;
    }
    #mail_content {
        display: block;
    }
    input {
        font-size: max(1.8vw, 1rem);
        display: inline-block;
        width: 64%;
        border: none;
        border-bottom: 1px solid gray;
        &:focus {
            outline: none;
            border-bottom: 1px solid rgb(172, 174, 222);
        }
    }
    textarea {
        width: 100%;
        height: 80%;
        padding: 8px;
        font-size: max(1.6vw, 0.8rem);

        &:focus {
            outline: none;
            border: 1px solid rgb(172, 174, 222);
        }
    }
    button {
        position: absolute;
        right: 8px;
        bottom: 8px;
        font-size: max(24px, 2.6vw);
        width: 10vw;
        height: 4vw;
        background: rgb(172, 174, 222);
        border-radius: 8px;
        color: white;
        text-shadow: none;

        @media (max-width: 768px) {
            width: 72px;
            height: 32px;
        }

        &:hover {
            color: rgb(172, 174, 222);
            background: white;
            border: 1px solid rgb(172, 174, 222);
        }
    }
`

const Sending = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.8);
    display: grid;
    place-items: center;
    font-size: max(2.6vw, 1.5rem);;
`

export const EmailForm = ({setIsEmailOn, CardRef}) => {
    const form = useRef()
    const [sending, setSending] = useState(false)
    const [info, setInfo] = useState('')

    const sendEmail = (e) => {
        console.log('clicked!!')
        e.preventDefault()

        emailjs.sendForm('service_036akej', 'template_jby77ul', form.current, 'kFRnuBfVho9R2W_Cr')
            .then((result) => {
                setInfo(`감사합니다! 확인 후 답장 드리겠습니다 :)`)
                setTimeout(() =>{
                    setIsEmailOn(false)
                }, 3000)
            })
            .catch((err) => setInfo('메일 발송에 실패했어요! :('))
            .finally(() => setTimeout(() => setSending(false), 3000))
    };

    const handleClickOutside = (event) => {
        if (form.current && !form.current.contains(event.target) && !CardRef.current.contains(event.target)) {
            setIsEmailOn(false)
        }
    };
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <StyledEmailForm ref={form} onSubmit={sendEmail}>
            <div>
                <label>보내시는 분</label>
                <input type="text" name="sender" />
            </div>
            <div>
                <label>이메일 주소</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label id='mail_content'>메일 내용</label>
                <textarea name="message" />
            </div>
            <button type="submit" onClick={() => {
                setSending(true)
                setInfo('보내는 중...')
            }}>보내기</button>
            {sending ? <Sending>{info}</Sending> : null}
        </StyledEmailForm>
    );
};