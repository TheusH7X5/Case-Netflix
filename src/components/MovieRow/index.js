import React, {useState} from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './MovieRow.css'
import { ListArea, MovieRowItem, MovieRowItemImg, MovieRowList, Title } from './styles';


const MovieRow = ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
      let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x ) {
            x = (window.innerWidth - listW) - 60; 
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <Title>{title}</Title>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <ListArea>
                <MovieRowList style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <MovieRowItem key={key}>
                            <MovieRowItemImg src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                        </MovieRowItem>
                    ))}
                </MovieRowList>
            </ListArea>
        </div>
    )
}

export default MovieRow
