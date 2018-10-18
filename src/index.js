import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { SocialIcon } from 'react-social-icons';

function Introduction() {
    return(
    <div>
        <h1><img src="public/me.jpg" alt="" width='75px' height='75px'/> Introduction </h1>
        <p>My name is Sebastien Guillemot. </p>
        <p>I work as an R&amp;D Engineering Lead for <a href="https://emurgo.io/"><img src="public/emurgo.png" alt="" width='15px' height='15px'/>Emurgo</a> focusing on the <a href="https://www.cardano.org"><img src="public/cardano.png" alt="" width='15px' height='15px'/>Cardano</a> project. I write code and create educational content.</p>
        <h3> How to pronounce my name</h3>
        <audio src={process.env.PUBLIC_URL + "/audio/sebastien.mp3"} controls/>< br/>
        <audio src={process.env.PUBLIC_URL + "/audio/guillemot.mp3"} controls/>
        <h2>Personal channels</h2>
        <SocialIcon url="http://twitter.com/SebastienGllmt" />
        <SocialIcon url="https://github.com/SebastienGllmt" />
        <SocialIcon url="https://www.youtube.com/c/SebastienGuillemot" />
        <h2>Work channels</h2>
        <SocialIcon url="https://www.youtube.com/channel/UCgFQ0hHuPO1QDcyP6t9KZTQ" />
        <SocialIcon url="https://medium.com/@emurgo_io" />
    </div>
    );
}

function Notes() {
    return(
    <div>
        <h1>Notes</h1>
        <p>Check out some notes I took (embedded within the papers)</p>
        <ul>
            <li><a href={process.env.PUBLIC_URL + "/papers/nipopows_annotated.pdf"}>NiPoPoW</a></li>
        </ul>
    </div>
    );
}

ReactDOM.render(<div className='markdown-body'><Introduction /><Notes /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
