import testData from '../../mockData/testData';
import Card from './Card';
import './CardList.scss';


const CardList = () => {
    return (
        <div className='profiles'>
            {testData.map(profile => <Card key={profile.id} {...profile} />)}
        </div>
    );
}

export default CardList;