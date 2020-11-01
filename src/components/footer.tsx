import * as React from 'react';

import '../styles/footer.css';

const MyFooter = (props: { text: React.ReactNode; }) => {
    return(
     <section>
         <div className="footerSpace" />
        <div className="footer">
            <h3>{props.text}</h3>
        </div>
    </section>   
    )
}

export default MyFooter