import { Box, Button, Container, Flex, Section } from '@radix-ui/themes'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer';
import { useState } from 'react';

const workouts = [
  {
    id:1,
    url:" /assets/Day_Posters/Day_1_Chest.png",
    type:"Chest",
    day:"Mon"
  },
  {
    id:2,
    url:" /assets/Day_Posters/Day_2_Legs.png",
    type:"Legs",
    day:"Tue"
  },
  {
    id:3,
    url:" /assets/Day_Posters/Day_3_Back.png",
    type:"Back",
    day:"Wed"
  },
  {
    id:4,
    url:" /assets/Day_Posters/Day_4_Shoulders_Core.png",
    type:"Shoulder",
    day:"Thu"
  },
  {
    id:5,
    url:" /assets/Day_Posters/Day_5_Full_Body.png",
    type:"Full Body",
    day:"Fri"
  },
  {
    id:6,
    url:" /assets/Day_Posters/Day_6_Strength.png",
    type:"Strength",
    day:"Sat"
  },
  {
    id:7,
    url:" /assets/Day_Posters/Day_7_Rest.png",
    type:"Rest",
    day:"Sun"
  },
]

const weakDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

function App() {
  const date = new Date();
  const weakDay = date.toString().split(" ")[0]
  const imgSrcArr = workouts.filter((e)=>e.day.includes(weakDay))
  const [imgSrc,setImgSrc] = useState(imgSrcArr)

  const handleChangeDay = (n)=>{
    if(n<0){
      setImgSrc(workouts.filter((e)=>e.day.includes(weakDays[6])))
    }else if(n>0){
      setImgSrc(workouts.filter((e)=>e.day === weakDays[date.getDay()+1]))
    }else{
      setImgSrc(workouts.filter((e)=>e.day === weakDays[date.getDay()]))
    }
  }
  
  return (
    <>
      <Section p="1">
          <Header />
          <Container>
            <Box>
            <Flex
              align="start"
              justify="between"
              gap="3"
            >
              <Button color="orange" onClick={()=>handleChangeDay(-1)}>YesterDay</Button>
              <Button color="cyan" onClick={()=>handleChangeDay(0)}>Today</Button>
              <Button color="grass" onClick={()=>handleChangeDay(1)}>Tomorrow</Button>
            </Flex>
          </Box>
          </Container>
          <Flex align="center" justify="center" style={{
            width:"100%",
            height:"max-content"
          }}>
            <Box mt="5" mb="5">
            {
              imgSrc.map((e,i)=>(
                <img key={i} src={e.url} alt="" style={{
                  width:"300px",
                  height:"500px"
                }}/>
              ))
            }
            
          </Box>
          </Flex>
          <Footer />
      </Section>
    </>
  )
}

export default App
