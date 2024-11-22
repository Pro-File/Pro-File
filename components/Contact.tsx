import React, {useState} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
type Props = {}

type Inputs = {
    name: string;
    subject: string;
    email: string;
    message: string;
  };

function Contact({ }: Props) {
    const { register, handleSubmit, reset } = useForm<Inputs>({
        defaultValues: {
            name: "",
            subject: "",
            email: "",
            message: ""
        }
    });
    const [api, contextHolder] = notification.useNotification();
    const [buttonLoading, setButtonLoading] = useState(false);

    const openNotification = (placement: NotificationPlacement, type: any, message: any) => {
       if (type === "error" ) {
        api.error({
            message: "Error !",
            description: message,
            placement,
          });
       }
       if(type === "success") {
        api.success({
            message: "Let's Connect",
            description: message,
            placement,
          });
       }
      };


    const onSubmit: SubmitHandler<Inputs> = formData => {
        setButtonLoading(true)
        if(formData.name && formData.subject && formData.email && formData.message) {
            const emailParams = {
                name_content: formData.name,
                subject_content: formData.subject,
                email_content: formData.email,
                message: formData.message
            };
            emailjs
                .send(
                  "service_1xwnf5a",
                  "template_f55aqya",
                  emailParams,
                  "EJd46Xa7pUIWsiKRO"
                )
                .then(
                  (result: any) => {
                    console.log("emailjs success: ", result.text);
                    openNotification(
                    "topRight",
                    "success", 
                    "Thank you for contacting, you will be responded back shortly!"
                    );
                    reset({
                        name: "",
                        subject: "",
                        email: "",
                        message: ""
                    });
                setButtonLoading(false)
                  },
                  (error: any) => {
                    console.log("emailjs error: ", error.text);
                    openNotification(
                        "topRight",
                        "error",
                        "Something went wrong."
                        );
                        reset({
                            name: "",
                            subject: "",
                            email: "",
                            message: ""
                        });
                setButtonLoading(false)
                  }
                );
        }
        else {
            openNotification(
                "topRight",
                "error",
                "All fields must be filled out before submission."
                );
                setButtonLoading(false)
        }

    };

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-col max-w-7xl px-10 justify-evenly mx-auto items-center'>
            {contextHolder}
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-10 relative top-12'>
                <form className=' flex flex-col space-y-8 w-fit ' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h4 className='text-xl md:text-4xl text-center px-4 animate-pulse'>
                            {"Let's Connect by filling up the form."}
                        </h4>
                    </div>
                    <div className='flex space-x-2'>
                        <input {...register('name')} type="text" className='contactInput' placeholder='Enter Your Name' />
                        <input {...register("subject")} type="text" className='contactInput' placeholder='Enter Your Title' />
                    </div>
                    <input {...register("email")} type="email" className='contactInput' placeholder='Enter Your Email' />
                    <textarea {...register("message")} className='contactInput' placeholder='Enter Your Message' />
                    <button type='submit' disabled={buttonLoading} className='bg-[#F7AB0A] py-3 px-10 rounded-md
                     text-black font-bold text-lg'>Submit</button>
                </form>
                                {/* <div className='space-y-10'>
                    <div className='flex items-center space-x-5'>
                        <PhoneIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
                        <p className='text-2xl'>+92 317 025 4477</p>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <MapPinIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
                        <p className='text-2xl'>Abc Area, Karachi, Sindh, Pakistan.</p>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <EnvelopeIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]' />
                        <p className='text-2xl'>muhammad.arbab@koderlabs.com</p>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default Contact