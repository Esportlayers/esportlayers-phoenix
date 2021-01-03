import { ReactElement } from "react";
import Head from 'next/head';

const heroes = [
    'alchemist',
    'ancient_apparition',
    'antimage',
    'axe',
    'witch_doctor',
];

const baseUrl = 'https://api.streamdota.com/static/heroes/vids/';

export default function Index(): ReactElement {
    return <div className={'container'}>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="google" content="notranslate"/>
            <meta httpEquiv="Content-Language" content="de"/>
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
            <title>streamdota.com - Heroes</title>
        </Head>
        {heroes.map((hero) => <video key={hero} width={'100%'} loop autoPlay muted>
            <source src={baseUrl + hero + '/300.mov'} type="video/quicktime" />
            <source src={baseUrl + hero + '/300.webm'} type="video/webm" />
        </video>)}

        <style jsx global>{`
            body, html {
                margin: 0;
                padding: 0;
            }

            * {
                box-sizing: border-box;
            }

            .container { 
                height: 100%;
                width: 100%;
                left:0;
                right: 0;
                top: 0;
                bottom: 0;
                position: absolute;
                background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
                background-size: 1800% 1800%;
                animation: rainbow 60s ease infinite;
                display: grid;
                grid-template-columns: repeat(auto-fill, 150px);
                grid-gap: 25px;
                padding: 25px;
            }
            @keyframes rainbow { 
                0%{background-position:0% 82%}
                50%{background-position:100% 19%}
                100%{background-position:0% 82%}
            }  
        `}</style>
    </div>;
}