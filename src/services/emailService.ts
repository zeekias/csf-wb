import emailjs from '@emailjs/browser';


const  SERVICE_ID = "service_i99l12o";
const TEMPLATE_ID = "template_gmh1svb";
const PUBLIC_KEY = "t1edOeFyTMtTfSsAq";

export const emailService = {

    async sendEmail(form : HTMLFormElement | null){
        try{
            if(!form) return;
            const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
            return result.status;
        } catch(error){
            console.log(error)
        }
    }
}