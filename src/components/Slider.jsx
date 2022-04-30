import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { sliderItems } from '../components/data'
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom';



const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    /* background-color:coral ; */
    position:relative;
    overflow:hidden;
    ${mobile({display:"none" })}

`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color : #fff7f7;
    border-radius:50%;
    display: flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height:100%;
    display: flex;
    transition: all 1.5s ease;
    transform:translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items:center;
    height:100vh;
    width:100vw;
    background-color: #${props => props.bg}; 
`


const ImgContainer = styled.div`
    height:100%;
    flex:1;
    // margin-left:50px;
`
const Img = styled.img`
    height:80%;
    padding-left:100px;
`



const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`
const Title = styled.h1`
    font-size:70px;
`
const Desc = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color: transparent;
    cursor:pointer;
`



function Slider() {
    
    const navigate=useNavigate();

    const [slideIndex, setslideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        // <Routes>
        //   <Route path="/productlist" element={<ProductList />} />
        // </Routes>
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>

                {sliderItems.map(items => (


                    <Slide bg={items.bg} key={items.id}>
                        <ImgContainer>
                            <Img src={items.img} />
                        </ImgContainer>

                        <InfoContainer>
                            <Title>{items.title}</Title>
                            <Desc>{items.desc}</Desc>
                            <Button onClick={()=>navigate("/productlist")}>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>

                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider