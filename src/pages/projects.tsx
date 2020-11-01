import * as React from 'react';

import Accordion from '../components/accordionItem';
import MyFooter from '../components/footer';



function Projects() {
    return(
        <article>
            <section>
                <div className="scnd-header">
                    <h3>These are some of my projects:</h3>
                </div>
            </section>
            <section>
                <div className="row">    
                    <div className="column">
                        <Accordion title="This Website" >
                            <br />
                            <p>This website was codded by yours truely using React and Typscripts.</p>
                            <br />
                            <a href="https://github.com/Evan-Zaplachi/website" target="__blank" >Source Code</a>
                        </Accordion>
                    </div>
                
                    <div className="column">
                        <Accordion title="Life Assistant" >
                            <br />
                            <p>An elecron app designed to make life easier</p>
                            <br />
                            <a href="#">Source Code</a>
                        </Accordion>
                    </div>

                    <div className="column">
                        <Accordion title="Example" >
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequatur expedita amet nostrum doloribus nam obcaecati officiis necessitatibus quo sint dolorem, cumque exercitationem laudantium ad, eum cum, autem dignissimos consequuntur.</p>
                            <br />
                            <a href="#">Source Code</a>
                        </Accordion>
                    </div>
                
                    <div className="column">
                        <header>
                            <h3>More to come</h3>
                        </header>
                        <div>
                            <p>Coming Soon...</p>
                        </div>
                    </div>
                </div>
            </section>
            <MyFooter text="Click To Expand" />
        </article>
    )
}

export default Projects