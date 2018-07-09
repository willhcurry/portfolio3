import React from 'react';
import MediaCard from './components/Cards/MediaCard';

const CardList = ({ apps }) => {
    const cardComponent = apps.map((app, i) => {
        return <MediaCard id={apps[i].id} name={apps[i].name} info={apps[i].info}/>
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;