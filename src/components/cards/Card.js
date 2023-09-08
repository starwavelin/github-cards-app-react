import './CardList.scss';

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

export default Card;