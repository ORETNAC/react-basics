import "./App.css"
export function App() {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src="https://media.licdn.com/dms/image/D4E03AQF8ZHzKGzWP1g/profile-displayphoto-shrink_800_800/0/1681166279300?e=1694649600&v=beta&t=pJB3WYM1ViAP1H5mP_9mkjUqm5hWLrwPKLPJlwav2bo" alt="José Cantero Img" />
                <div className="tw-followCard-info ">
                    <strong >José Cantero</strong>
                    <span className="tw-followCard-infoUserName">@ORETNAC</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button ">
                    Seguir
                </button>
            </aside>
        </article>
    );
}

