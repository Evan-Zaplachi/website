import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faBrands from '@fortawesome/free-brands-svg-icons';
import * as faIons from '@fortawesome/free-solid-svg-icons';

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
                            <td>
                                <FontAwesomeIcon icon={faIons.faMailBulk} />
                                &nbsp;
                                Email
                            </td>
                            <td>
                                <a href="mailto:evan@zaplachi.com" target="__blank" className="externalLink">
                                evan@zaplachi.com    
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FontAwesomeIcon icon={faBrands.faGithub} />
                                &nbsp;
                                Github
                            </td>
                            <td>
                                <a href="https://github.com/Evan-Zaplachi" target="__blank" className="externalLink">https://github.com/Evan-Zaplachi</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FontAwesomeIcon icon={faBrands.faLinkedin} />
                                &nbsp;
                                LinkedIn
                                </td>
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