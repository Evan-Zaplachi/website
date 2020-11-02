import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faIcons from '@fortawesome/free-solid-svg-icons';

import MyFooter from '../components/footer';
import StickyNavbar from '../components/stickyNavbar';
import Name from '../components/name';


function Home() {
    return(
        <article>
            <section>
                <header className="App-header">
                    <Name />
                </header>
                <StickyNavbar />
                <body>
                    <div className="scnd-header" style={{marginTop: '5vh'}}>
                        <FontAwesomeIcon icon={faIcons.faChevronDown} />
                    </div>
                    <div className="row">
                        <div className="column" style={{ marginTop: '20px' }}>
                            <h3>Header1</h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corrupti ducimus consectetur, provident molestiae aliquid perspiciatis dignissimos accusamus, saepe exercitationem quibusdam consequatur cum eius velit, vitae suscipit asperiores? Architecto, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ratione quasi odio dolore. Libero, illum necessitatibus optio voluptates omnis temporibus non aliquid molestiae nostrum alias incidunt veniam excepturi fugit animi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut voluptatibus magnam fuga animi. Quam velit iure laborum consectetur explicabo non laudantium impedit omnis, laboriosam molestiae quasi debitis, consequuntur vel sed!</p>
                        </div>
                        <div className="column">
                            <h3>Header2</h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veritatis veniam minima voluptates deserunt. Hic, reiciendis aliquid. Eum, rerum dolorum sequi eaque quis amet cum dignissimos deserunt itaque vero quod accusamus sit, aspernatur ipsum reprehenderit quas ullam illum minus odio! Cumque perspiciatis nostrum sint dolorem! Quia qui ex corrupti nisi at blanditiis. Maiores dolor velit, ex fugit molestias maxime? Ad enim dolorum necessitatibus, dignissimos minima illo deleniti sequi animi, beatae at voluptate. Quam omnis totam quo ipsum inventore facilis, voluptate id quibusdam praesentium unde nobis dicta cumque repudiandae hic accusamus, qui repellat ipsam itaque a culpa asperiores. Repellat, vero voluptatum deserunt nostrum aperiam totam quaerat quo tenetur nihil expedita, cupiditate velit numquam sapiente, reprehenderit laborum. Officia deserunt aspernatur perferendis itaque, eos voluptatum ipsum dignissimos nemo quidem, numquam delectus aut fugiat nisi laboriosam fugit quam architecto in dolorem enim ducimus ex quisquam. Repellat facilis error quaerat neque tempore, animi tempora molestias deleniti laboriosam impedit mollitia sint facere quas praesentium non. Dignissimos saepe amet nostrum ducimus. Rerum magnam nihil debitis unde at nam, dolor minus earum accusamus optio, voluptas, officia ullam quia assumenda natus consequatur! Minima veritatis blanditiis doloremque! Fugit veritatis ipsum alias ratione iste dignissimos voluptatum aliquid hic laudantium corrupti rerum sed impedit cum perspiciatis, asperiores quod assumenda commodi vitae quibusdam velit animi sit non ea. Est qui deleniti velit sint! Dolore quibusdam nesciunt inventore esse alias assumenda reiciendis quia explicabo sunt dicta voluptatem voluptas aut fugiat, aliquid dolor saepe tenetur quasi porro animi voluptatibus autem aperiam veritatis adipisci. Quaerat, laboriosam quis fugit rerum asperiores, aliquam magni minima a ex optio molestias maiores, recusandae reiciendis doloribus quisquam nam quidem? Iste suscipit tempore laborum inventore nesciunt accusamus aliquid, consectetur maxime dignissimos deserunt dolore iusto rerum harum vitae perspiciatis illo, aut porro est autem cum impedit expedita quos libero eius? Nihil, minus molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut voluptatibus magnam fuga animi. Quam velit iure laborum consectetur explicabo non laudantium impedit omnis, laboriosam molestiae quasi debitis, consequuntur vel sed!</p>
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