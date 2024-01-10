import {styled} from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { selectNewDisney } from '../feautres/Movie/MovieSlice';
import { Link } from 'react-router-dom';


const ImgSlider = (props)=>{
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
      const movies = useSelector(selectNewDisney); 


    return (
        <Carousel className='Slider' {...settings} >
            <Wrap>

                  <Link to="/detail/Transformers: Rise of the Beasts">
                    <img src="https://news.tfw2005.com/wp-content/uploads/sites/10/2023/04/ROTB-Promotional-poster-00.jpg" width="100%" height="400vh"  alt="" />
                  </Link>
            </Wrap>
            
            <Wrap>

                <Link to="/detail/Fastx">
                    <img src="https://performancegarage.com.au/images/blog/5/desktop-cropped-v2.jpeg"  width="100%" height="400vh"  alt="" />
                  </Link>

            </Wrap>
            <Wrap>

                <Link to="/detail/Raya">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/pp_rayaandthelastdragon_herobanner_21294_52e0c962.jpeg"  width="100%" height="400vh"  alt="" />
                  </Link>

            </Wrap>
            <Wrap>

                <Link to="/detail/Avatar: The Way of Water">
                    <img src="https://4kwallpapers.com/images/wallpapers/avatar-the-way-of-water-avatar-2-2022-movies-sam-3440x1440-8963.jpg"  width="100%" height="400vh"  alt="" />
                  </Link>
            </Wrap>
        </Carousel>
        )
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  Link {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;