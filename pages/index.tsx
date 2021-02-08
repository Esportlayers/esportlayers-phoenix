import { ReactElement } from "react";
import Head from 'next/head';
import Link from 'next/link';

export const heroes = [
    'alchemist',
    'ancient_apparition',
    'antimage',
    'axe',
    'bane',
    'batrider',
    'beastmaster',
    'bloodseeker',
    'bountyhunter',
    'brewmaster',
    'bristleback',
    'broodmother',
    'chaosknight',
    'chen',
    'clinkz',
    'clock',
    'crystalmaiden',
    'darkseer',
    'darkwillow',
    'dazzle',
    'deathprophet',
    'disruptor',
    'doom',
    'dragonknight',
    'drowranger',
    'earth_shaker',
    'earth_spirit',
    'elder_titan',
    'ember_spirit',
    'enchantress',
    'enigma',
    'faceless',
    'grimstroke',
    'gyro',
    'hoodwink',
    'huskar',
    'invoker',
    'jakiro',
    'kotl',
    'kunkka',
    'legion',
    'lesh',
    'lich',
    'lifestealer',
    'lina',
    'lion',
    'lonedruid',
    'luna',
    'lycan',
    'magnus',
    'mars',
    'medusa',
    'meepo',
    'mirana',
    'monkeyking',
    'morphling',
    'naga',
    'naturesprophet',
    'necro',
    'nightstalker',
    'nyx',
    'witch_doctor',
];

export const baseUrl = 'https://api.streamdota.com/static/heroes/vids/';

export default function Index(): ReactElement {
    return <div className={'container'}>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="google" content="notranslate"/>
            <meta httpEquiv="Content-Language" content="de"/>
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
            <title>streamdota.com - Heroes</title>
        </Head>
        {heroes.map((hero) => <Link href={`/${hero}`} key={hero}>
            <video key={hero} height={'150'} loop autoPlay muted playsInline>
                <source src={baseUrl + hero + '/150.mov'} type="video/quicktime" />
                <source src={baseUrl + hero + '/150.webm'} type="video/webm" />
            </video>
        </Link>)}

        <style jsx global>{`
            body, html {
                margin: 0;
                padding: 0;
            }

            * {
                box-sizing: border-box;
            }

            .container { 
                min-height: 100vh;
                width: 100vw;
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