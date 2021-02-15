import { ReactElement, useState } from "react";
import Head from 'next/head';
import Link from 'next/link';

export const heroes = [
    'abaddon',
    'abyssal_underlord',
    'alchemist',
    'ancient_apparition',
    'antimage',
    'arc_warden',
    'axe',
    'bane',
    'batrider',
    'beastmaster',
    'bloodseeker',
    'bounty_hunter',
    'brewmaster',
    'bristleback',
    'broodmother',
    'centaur',
    'chaos_knight',
    'chen',
    'clinkz',
    'crystal_maiden',
    'dark_seer',
    'dark_willow',
    'dazzle',
    'death_prophet',
    'disruptor',
    'doom_bringer',
    'dragon_knight',
    'drow_ranger',
    'earth_spirit',
    'earthshaker',
    'elder_titan',
    'ember_spirit',
    'enchantress',
    'enigma',
    'faceless_void',
    'furion',
    'grimstroke',
    'gyrocopter',
    'hoodwink',
    'huskar',
    'invoker',
    'jakiro',
    'juggernaut',
    'keeper_of_the_light',
    'kunkka',
    'legion_commander',
    'leshrac',
    'lich',
    'life_stealer',
    'lina',
    'lion',
    'lone_druid',
    'luna',
    'lycan',
    'magnataur',
    'mars',
    'medusa',
    'meepo',
    'mirana',
    'monkey_king',
    'morphling',
    'naga_siren',
    'necrolyte',
    'nevermore',
    'night_stalker',
    'nyx_assassin',
    'obsidian_destroyer',
    'ogre_magi',
    'omniknight',
    'oracle',
    'pangolier',
    'phantom_assassin',
    'phantom_lancer',
    'phoenix',
    'puck',
    'pudge',
    'pugna',
    'queenofpain',
    'rattletrap',
    'razor',
    'riki',
    'rubick',
    'sand_king',
    'shadow_demon',
    'shadow_shaman',
    'shredder',
    'silencer',
    'skeleton_king',
    'skywrath_mage',
    'slardar',
    'slark',
    'snapfire',
    'sniper',
    'spectre',
    'spirit_breaker',
    'storm_spirit',
    'sven',
    'techies',
    'templar_assassin',
    'terrorblade',
    'tidehunter',
    'tinker',
    'tiny',
    'treant',
    'troll_warlord',
    'tusk',
    'undying',
    'ursa',
    'vengefulspirit',
    'venomancer',
    'viper',
    'visage',
    'void_spirit',
    'warlock',
    'weaver',
    'windrunner',
    'winter_wyvern',
    'wisp',
    'witch_doctor',
    'zuus',
];

export const baseUrl = 'https://api.streamdota.com/static/heroes/vids/';

export default function Index(): ReactElement {
    const [offset, setOffset] = useState(0);
    return <div>
            <div className={'container'}>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="google" content="notranslate"/>
                <meta httpEquiv="Content-Language" content="de"/>
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
                <title>streamdota.com - Heroes</title>
            </Head>
            {heroes.slice(offset, offset + 20).map((hero) => <Link href={`/${hero}`} key={hero}>
                <video key={hero} height={'150'} loop autoPlay muted playsInline>
                    <source src={baseUrl + hero + '/150.mov'} type="video/quicktime" />
                    <source src={baseUrl + hero + '/150.webm'} type="video/webm" />
                </video>
            </Link>)}

            <div className={'buttons'}>
                <button onClick={() => setOffset(o => Math.max(0, o - 20))}>Prev</button>
                <button onClick={() => setOffset(o => Math.min(100, o + 20))}>Next</button>
            </div>
        </div>

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

            .buttons {
                grid-column: 1 / -1;
            }
            @keyframes rainbow { 
                0%{background-position:0% 82%}
                50%{background-position:100% 19%}
                100%{background-position:0% 82%}
            }  
        `}</style>
    </div>;
}