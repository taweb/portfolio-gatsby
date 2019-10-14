import React from 'react';
import SEO from "../components/seo"
import PageContent from '../components/pageContent'
import { GlobalStyle } from '../theme/GlobalStyle';

const ContactPage = () => {
    return (
        <>
            <GlobalStyle />
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
                    <p>
                        <label>Don’t fill this in: <input name='bot-field'/></label>
                    </p>
                    <p>
                        <input type='text' placeholder='Full Name' name='name' required />
                    </p>
                    <p>
                        <input type='email' name='email' placeholder='Email' required />
                    </p>
                    <p>
                        <textarea name='message' type='text' placeholder='Message' required />
                    </p>
                    <p>
                        <button type='submit'>Send</button>
                    </p>
                </form>
            </PageContent>
        </>
      );
}
 
export default ContactPage;