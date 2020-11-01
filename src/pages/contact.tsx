import * as React from 'react';

import MyFooter from '../components/footer';


function Contact() {
    return(
        <article>
            <section>
                <div className="scnd-header">
                    <h3>Contact Info:</h3>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>evan@zaplachi.com</td>
                        </tr>
                        <tr>
                            <td>Github</td>
                            <td>Lorem, ipsum.</td>
                        </tr>
                        <tr>
                            <td>LinkedIn</td>
                            <td>Lorem, ipsum.</td>
                        </tr>
                        <tr>
                            <td>Snapchat</td>
                            <td>Lorem, ipsum.</td>
                        </tr>
                    </table>
                </div>
            </section>
            <MyFooter text="Email Is The Best Way To Contact Me" />
        </article>
    )
}

export default Contact