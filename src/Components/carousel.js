import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './carousel-item'
import slider from '../slider.json'

function Example()
{
    return (
        <Carousel autoPlay indicators= {false}>
            {
                slider.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

export default Example