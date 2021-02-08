import { ReactElement } from "react";
import { baseUrl, heroes } from ".";
import Head from 'next/head';
import Link from 'next/link';

interface Props {
    hero: string;
}

export default function Hero({hero}: Props): ReactElement {
    return <div className={'container'}>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="google" content="notranslate"/>
            <meta httpEquiv="Content-Language" content="de"/>
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
            <title>streamdota.com - Heroes - {hero}</title>
        </Head>

        <Link href={'/'}><a>Zurück</a></Link>

        <br /><br />
        
        <video height={'300'} loop autoPlay muted playsInline>
            <source src={baseUrl + hero + '/300.mov'} type="video/quicktime" />
            <source src={baseUrl + hero + '/300.webm'} type="video/webm" />
        </video>

        <br /><br />

        <video height={'150'} loop autoPlay muted playsInline>
            <source src={baseUrl + hero + '/150.mov'} type="video/quicktime" />
            <source src={baseUrl + hero + '/150.webm'} type="video/webm" />
        </video>

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
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
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


export async function getStaticProps({params: {hero}}) {

    return {
        props: {hero}
    };
}

export async function getStaticPaths() {
    return {
        paths: heroes.map((hero) => ({params: {hero}})),
        fallback: false,
    };
}