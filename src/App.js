import './App.scss';
import CardList from './components/cards/CardList';

const App = ({ title }) => {
    return (
        <div>
            <div className='header'>{title}</div>
            <CardList />
        </div>
    );
}

export default App;
