import './App.scss';
import CardList from './components/cards/CardList';

// Test cases: GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

const App = ({ title }) => {
    return (
        <div>
            <div className='header'>{title}</div>
            <CardList />
        </div>
    );
}

export default App;
