import { useMediaQuery } from 'hooks/useMediaQuery';
import Image from 'next/image';

import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import qs from 'querystring';
import { FaCheck } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
type FormInputs = {
    email: string;
};
export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitted },
    } = useForm<FormInputs>({
        shouldUseNativeValidation: true,
    });
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        const params = qs.stringify({ email: data.email });
        console.log('Sending email:', data.email);
        axios.post('/api/send-email?' + params).then((res) => console.log(res));
    };
    return (
        <motion.section
            className="flex w-full flex-col items-center justify-center gap-8 bg-primary px-[10%] py-36 font-body text-dark-50 md:flex-row"
            layout>
            <header className="flex w-full flex-col gap-4">
                <h2 className="font-title text-5xl font-bold text-dark-50 md:text-7xl">
                    Get In Touch
                </h2>
                <p className="w-full text-2xl text-dark-950 md:text-3xl">
                    For Inquiries or Questions
                </p>
            </header>
            <form
                className="flex w-full flex-col gap-4 text-dark-950"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full grid-cols-2 flex-col gap-4 md:grid">
                    <input placeholder="Name" className="w-full p-4" />
                    <input placeholder="Email" className="w-full p-4" />
                </div>
                <textarea placeholder="Message" rows={5}></textarea>
                <button className="button-solid-dark hover:button-solid-light w-full p-4">
                    Submit
                </button>
            </form>
        </motion.section>
    );
}
