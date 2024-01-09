import React, { useEffect, useState } from 'react';
import {styled} from 'styled-components';
import db from '../firebase';
import { useLocation, useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";


const Search = (props) => {
    // const [data, setData] = useState({});

    const {id} = useParams();
    const [detailData, setDetailData] = useState({});

  
    async function getDocument (coll, id) {
        const snap = await getDoc(doc(db, coll, id))
        if (snap.exists()){
          setDetailData(snap.data());
        }
        else {return Promise.reject(Error(`No such document: ${coll}.${id}`))}
      }
    getDocument("movies", id);
    
   

   
    
  return (
    <Container>
          
           <video src={detailData.VideoUrl} autoPlay controls></video>
            
            <ContentMeta>
                <h1>{detailData.title}</h1>

              <SubTitle>{detailData.subTitle}</SubTitle>
              <Description>{detailData.description}</Description>
            </ContentMeta>

        </Container>
  )
}


const Container = styled.div`
position:relative;
padding-top:30px;
min-height: calc(100vh-250px);
overflow:hidden;
display:block;
top:72px;
padding:0 calc(3.5vw + 5px);

video{
  width:100%;
  height:49vw;
    border:1px solid black;
    cursor:pointer;
    padding-top:10px;

}
`;
const ContentMeta  = styled.div`
max-width:874px;
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export default Search