import "./App.scss";

const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

const CardList = () => {
    return (
        <div className='profiles'>
            {testData.map(profile => <Card key={profile.id} {...profile} />)}
        </div>
    );
}

const Card = (props) => {
    const profile = props; // For each card, the props is an object of one record of the profile data
    return (
        <div className='github-profile'>
            <img src={profile.avatar_url} />
            <div className='info'>
                <div className='name'>{profile.name}</div>
                <div className='company'>{profile.company}</div>
            </div>
        </div>
    );
}

const App = ({ title }) => {
    return (
        <div>
            <div className='header'>{title}</div>
            <CardList />
        </div>
    );
}

export default App;
