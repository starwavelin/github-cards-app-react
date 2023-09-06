import "./App.scss";

const Card = () => {
    return (
        <div className="github-profile">
            <img src="https://placehold.it/75" />
            <div className="info">
                <div className="name">Name here...</div>
                <div className="company">Company Name here...</div>
            </div>
        </div>
    );
}

const App = ({ title }) => {
    return (
        <div>
            <div className='header'>{title}</div>
            <Card />
        </div>
    );
}

export default App;
