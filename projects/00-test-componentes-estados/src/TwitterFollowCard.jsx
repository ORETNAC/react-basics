import { useState } from "react";

export const TwitterFollowCard = ({ at, children, img, initialFollows }) => {
    

    console.log('renderTwitterCard: '+at)

    const [itFollows, setItFollows] = useState(initialFollows);//se puede utilizar un prop como valor inicial
    const clickAction = () => {
        setItFollows(!itFollows);
    }
    const text = itFollows ? 'Siguiendo' : 'Seguir';
    const buttonClassName = itFollows
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    

    return (<article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" src={img} alt="José Cantero Img" />
            <div className="tw-followCard-info ">
                <strong >{children}</strong>
                <span className="tw-followCard-infoUserName">{at}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={clickAction}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>

        </aside>
    </article>);
}