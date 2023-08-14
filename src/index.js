import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { SocialIcon } from 'react-social-icons';

function Introduction() {
    return(
    <div>
        <h1><img src={process.env.PUBLIC_URL + "/me.jpg"} alt="" width='75px' height='75px'/> Introduction </h1>
        <p>My name is Sebastien Guillemot. </p>
        <p>I'm the co-founder of
        <ul>
            <li><a href="https://dcspark.io/"><img src={process.env.PUBLIC_URL + "/dcSpark.png"} alt="" width='15px' height='15px'/>dcSpark</a></li>
            <li><a href="https://paimastudios.com/"><img src={process.env.PUBLIC_URL + "/paima.png"} alt="" width='15px' height='15px'/>Paima Studios</a></li>
            {/* <li><a href="https://milkomeda.com/"><img src={process.env.PUBLIC_URL + "/milkomeda.png"} alt="" width='15px' height='15px'/>Milkomeda</a></li>
            <li><a href="https://zeko.io/"><img src={process.env.PUBLIC_URL + "/zeko.png"} alt="" width='15px' height='15px'/>Zeko</a></li>
            <li><a href="https://tbd.com/"><img src={process.env.PUBLIC_URL + "/shinkai.png"} alt="" width='15px' height='15px'/>Shinkai</a></li> */}
        </ul>

        I usually write code, draft standards and create educational content.</p>

        I operate the「<a href="https://cexplorer.io/pool/pool1h4gwh638485yd0xcw0pkrm935nvm4aecqsxjx2yzzz0u6dfj73q/">SEBA</a>」pool. Announcement <a href="https://twitter.com/SebastienGllmt/status/1684002101893140480">here</a>.
        <h3> How to pronounce my name</h3>
        <audio src={process.env.PUBLIC_URL + "/audio/sebastien.mp3"} controls/>< br/>
        <audio src={process.env.PUBLIC_URL + "/audio/guillemot.mp3"} controls/>
        <h2>Personal channels</h2>
        <SocialIcon url="http://twitter.com/SebastienGllmt" />
        <SocialIcon url="https://github.com/SebastienGllmt" />
        <SocialIcon url="https://www.youtube.com/c/SebastienGuillemot" />
        <h2>Work channels (dcSpark)</h2>
        <SocialIcon url="https://www.youtube.com/channel/UC-S2_W1qS9YcKxhx6vt0SjQ" />
        <SocialIcon url="https://medium.com/dcspark" />
        <SocialIcon url="http://twitter.com/dcspark_io" />
        <h2>Work channels (Paima)</h2>
        <SocialIcon url="https://www.youtube.com/@paimastudios" />
        <SocialIcon url="http://twitter.com/PaimaStudios" />
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
            <li><a href={process.env.PUBLIC_URL + "/papers/incentive_annotated.pdf"}>Reward Sharing Schemes for Stake Pools (Incentive Paper)</a></li>
        </ul>
    </div>
    );
}

ReactDOM.render(<div className='markdown-body'><Introduction /><Notes /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
