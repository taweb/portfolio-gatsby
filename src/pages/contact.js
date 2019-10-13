import React from 'react';
import SEO from "../components/seo"
import PageContent from '../components/pageContent'

const ContactPage = () => {
    return (
        <>
            <SEO title="Contact" />
            <PageContent>
                <h1>Contact</h1>
                <p>Please get in touch using the form below:</p>
                <form
                    name='contact'
                    method='POST'
                    data-netlify='true'
                    netlify-honeypot='bot-field'
                >
                    <input hidden name='bot-field'/>
                    <input type='text' placeholder='Full Name' name='name' required/>
                    <input type='email' name='email' placeholder='Email' required/>
                    <textarea name='message' type='text' placeholder='Message' required/>
                    <button type='submit'>Send</button>
                </form>
            </PageContent>
        </>
      );
}
 
export default ContactPage;