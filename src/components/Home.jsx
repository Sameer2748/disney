import {styled} from 'styled-components'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommend';
import NewDisney from './NewDisney';
import Disney from './Disney'
import Pixar from './Pixar'
import Marvel from './Marvel'
import StarWars from './StarWars'
import Original from './Originals';
import Trendings from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase'
import { setMovies } from '../feautres/Movie/MovieSlice';
import { selectUserName } from '../feautres/user/userSlice';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";


const Home = (props)=>{
  const dispatch = useDispatch();
  const username  = useSelector(selectUserName);
  let recommends =[];
  let newDisneys =[];
  let originals =[];
  let trending =[];
  let disney =[];
  let pixar =[];
  let marvel =[];
  let starwars =[];
  let national =[];
  useEffect(() => {
    const q = query(collection(db, "movies"));
    onSnapshot(q, (snapshot) => {
      
      snapshot.docs.map((doc) => {
        // console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
  
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
  
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
  
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          case "disney":
            disney = [...disney, { id: doc.id, ...doc.data() }];
            break;
          case "pixar":
            pixar = [...pixar, { id: doc.id, ...doc.data() }];
            break;
          case "marvel":
            marvel = [...marvel, { id: doc.id, ...doc.data() }];
            break;
          case "starwars":
            starwars = [...starwars, { id: doc.id, ...doc.data() }];
            break;
          case "national":
            national = [...national, { id: doc.id, ...doc.data() }];
            break;
        }
      });
  
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
          disney: disney,
          pixar: pixar,
          marvel: marvel,
          starwars: starwars,
          national: national,
        }
      ));
    });

  }, [username]);
  
    return (
    <Container>
        <ImgSlider/>
        <Viewers/>
        {/* <Disney/> */}

        <Recommends/> 
        <NewDisney/>
        <Original/>
        <Trendings/>
    </Container>
    )
}


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;