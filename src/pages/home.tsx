import { relative } from 'path';
import * as React from 'react';

import MyFooter from '../components/footer';

function Home() {
    return(
        <article>
            <section>
                <header className="App-header">
                    <h1 style={{ fontSize: 30}}>I Am</h1>
                    <h3>Evan Zaplachinski</h3>
                </header>
                <body>
                    <div className="scnd-header">
                        <h3>Hook:</h3>
                    </div>
                    <div className="row">
                        <div className="column" style={{ marginTop: '20px' }}>
                            <h3>Header1</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut voluptatibus magnam fuga animi. Quam velit iure laborum consectetur explicabo non laudantium impedit omnis, laboriosam molestiae quasi debitis, consequuntur vel sed!</p>
                        </div>
                        <div className="column">
                            <h3>Header2</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut voluptatibus magnam fuga animi. Quam velit iure laborum consectetur explicabo non laudantium impedit omnis, laboriosam molestiae quasi debitis, consequuntur vel sed!</p>
                        </div>
                    </div>
                </body>
            </section>
            <footer style={{ position: "relative" }}>
                <MyFooter text="Welcome" />
            </footer>
        </article>
    )
}

export default Home