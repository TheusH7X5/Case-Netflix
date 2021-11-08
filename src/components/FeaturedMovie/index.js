import React from 'react'
import './FeaturedMovie.css'
import { FeaturedButtons, FeaturedDescription, FeaturedGenres, FeaturedHorizontal, FeaturedInfo, FeaturedMyListButton, FeaturedName, FeaturedPoints, FeaturedSeasons, FeaturedVertical, FeaturedWatchButton, FeaturedYear } from './styles';

const FeaturedMovie = ({item}) => {


    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if(description.length > 200){
        description = description.substring(0, 200) + '...';
    }

    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <FeaturedVertical>
                <FeaturedHorizontal>
                    <FeaturedName>{item.original_name}</FeaturedName>
                    <FeaturedInfo>
                        <FeaturedPoints>{item.vote_average} pontos</FeaturedPoints>
                        <FeaturedYear>{firstDate.getFullYear()}</FeaturedYear>
                        <FeaturedSeasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</FeaturedSeasons>
                    </FeaturedInfo>
                    <FeaturedDescription>{description}</FeaturedDescription>
                    <FeaturedButtons>
                        <FeaturedWatchButton href={`/watch/${item.id}`}>► Assistir</FeaturedWatchButton>
                        <FeaturedMyListButton href={`/list/add/${item.id}`}>+ Minha Lista</FeaturedMyListButton>
                    </FeaturedButtons>
                    <FeaturedGenres><strong>Gêneros:</strong> {genres.join(', ')}</FeaturedGenres>
                </FeaturedHorizontal>
            </FeaturedVertical>
        </section>
    )
}

export default FeaturedMovie
