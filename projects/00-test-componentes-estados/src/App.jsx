import { useState } from "react";
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        at: 'ORETNAC',
        img: 'https://onx.la/294ed',
        initialFollows: true,
        name: 'José Cantero'
    },
    {
        at: 'MIDUDEV',
        img: 'https://unavatar.io/midudev',
        initialFollows: false,
        name: 'Miguel Durán'
    },
    {
        at: 'JUANAME',
        img: 'https://onx.la/9df33',
        initialFollows: true,
        name: 'Juana De la Hoz'
    },
    {
        at: 'MEJORANDOLA',
        img: 'https://onx.la/c32bf',
        initialFollows: false,
        name: 'Christian Van Der'
    }
]

export function App() {
    //y elementos como props https://youtu.be/7iobxzd_2wY?t=4880

    /*Section 2////////////////////////////////////////////////////////////////////////////////

    const formatAt = (arroba) => `@${arroba}`;//Se pueden pasar funciones como Props 

    const [initial, setInitial] = useState('Cante');

    console.log('renderApp: ' + initial)
    *///////////////////////////////////////////////////////////////////////////////////////////
    return (
        <section className="App">{/* Para aplicar estilos a componentes de una zona del codigo sin comprometer la definición CSS
        de los componentes*/}

            

            {/* Cambio de la prop follows por un ESTADO para que sea el propio componente el que decida cuando mostrar uno u otro

            ./TwitterFollowCard/ln:5

            <TwitterFollowCard follows={true} name={'José Cantero'} at={formatAt('ORETNAC')} img={'https://onx.la/294ed'} />
            <TwitterFollowCard follows={true} name={'Juana De la Hoz'} at={formatAt('JUANAME')} img={'https://onx.la/9df33'} />
            <TwitterFollowCard follows={false} name={'Miguel Durán'} at={formatAt('MIDUDEV')} img={'https://unavatar.io/midudev'} />
            <TwitterFollowCard follows={false} name={'Christian Van Der'} at={formatAt('MEJORANDOLA')} img={'https://onx.la/c32bf'} /> */}

            {/*Section 2//////////////////////////////////////////////////////////////////////////
            <TwitterFollowCard at={formatAt('ORETNAC')} img={'https://onx.la/294ed'} initialFollows={true}>{initial}</TwitterFollowCard>
            <TwitterFollowCard at={formatAt('MIDUDEV')} img={'https://unavatar.io/midudev'} initialFollows={false} >Miguel Durán</TwitterFollowCard>
            <TwitterFollowCard at={formatAt('JUANAME')} img={'https://onx.la/9df33'} initialFollows={true}>Juana De la Hoz</TwitterFollowCard>
            <TwitterFollowCard at={formatAt('MEJORANDOLA')} img={'https://onx.la/c32bf'} initialFollows={false}>Christian Van Der</TwitterFollowCard>
            <button onClick={() => setInitial('José Cantero')}>Cambiar nombre</button>
            ////////////////////////////////////////////////////////////////////////////////////*/}

            {
                users.map(user => {
                    const { at, img, initialFollows, name } = user
                    return (
                        <TwitterFollowCard
                            key={at} // se necesita para identificar el elemento en el DOM al momento de renderizar listas
                            at={at}
                            img={img}
                            initialFollows={initialFollows}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

        </section>
    );
}

