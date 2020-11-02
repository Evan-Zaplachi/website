import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faBrands from '@fortawesome/free-brands-svg-icons';
import * as faIons from '@fortawesome/free-solid-svg-icons';

import MyFooter from '../components/footer';
import StickyNavbar from '../components/stickyNavbar';


function Contact() {
    return(
        <article>
            <header style={{ position: 'fixed', top: '0', left: '0', width: '100%' }} >
               <StickyNavbar /> 
            </header>
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
            <footer style={{ marginTop: '500px' }}>
                <MyFooter text="Email Is The Best Way To Contact Me" />
            </footer>
        </article>
    )
}

export default Contact