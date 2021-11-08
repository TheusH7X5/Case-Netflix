import React, {useEffect, useState} from 'react'
import FeaturedMovie from '../../components/FeaturedMovie';
import Header from '../../components/HeaderFilmList';
import MovieRow from '../../components/MovieRow';
import loading from '../../assets/netflix_loading.gif'
import Tmdb from '../../constants/Tmdb';
import { Lists, Loading } from './styles';



const FilmListPage = ({
  featureData, 
  blackHeader,
  setFeatureData, 
  setBlackHeader
}) => {

  const [movieList, setMovieList] = useState([]);

  
    useEffect(() => {
        const loadAll = async () => {
          let list = await Tmdb.getHomeList();
          setMovieList(list);
    
          let originals = list.filter(i => i.slug === 'originals');
          let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1)); 
          let chosen = originals[0].items.results[randomChosen];
          let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
          setFeatureData(chosenInfo);
        }
    
        loadAll();
      }, []);
    
      useEffect(() => {
        const scrollListener = () => {
          if(window.scrollY > 10) {
            setBlackHeader(true);
          } else {
            setBlackHeader(false);
          }
        }
    
        window.addEventListener('scroll', scrollListener);
    
        return () => {
          window.removeEventListener('scroll', scrollListener);
        }
      }, [])
    
    return (
        <div>
          <Header black={blackHeader}/>

          {featureData && 
          <FeaturedMovie item={featureData}/>
          }

          <Lists>
            {movieList.map((featureData, key) => (
              <MovieRow key={key} title={featureData.title} items={featureData.items}/>
            ))}
          </Lists>

          {movieList.length <= 0 &&      
            <Loading>
              <img src={loading} alt="Carregando"/>
            </Loading>
          }
            
        </div>
    )
}

export default FilmListPage
