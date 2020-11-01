import * as React from 'react';

import MyFooter from '../components/footer';

function AboutMe() {
    return(
        <article>
            <section>
                <header>
                    <div className="scnd-header">
                        <h3>Some more about me:</h3>
                    </div>
                </header>
                <body>
                    <div className="row">
                        <div className="column">
                            <h3>Education</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iure similique distinctio cupiditate modi eaque et! Voluptatem deserunt culpa voluptates error similique voluptate libero beatae perferendis, eos quia labore reprehenderit.</p>
                        </div>
                        <div className="column">
                            <h3>Work Exp.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iure similique distinctio cupiditate modi eaque et! Voluptatem deserunt culpa voluptates error similique voluptate libero beatae perferendis, eos quia labore reprehenderit.</p>
                        </div>
                        <div className="column">
                            <h3>Resume</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iure similique distinctio cupiditate modi eaque et! Voluptatem deserunt culpa voluptates error similique voluptate libero beatae perferendis, eos quia labore reprehenderit.</p>
                        </div>
                    </div>
                </body>
            </section>
            <MyFooter text="This Is Me" />
        </article>
    )
}

export default AboutMe