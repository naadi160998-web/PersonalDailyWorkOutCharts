import { Box, Flex, Heading, Text } from "@radix-ui/themes"

const TitleBar = () => {
    const date = new Date();
    const fullDate = `${date.getDate()}:${date.getMonth() < 10 ? 0 : ""}${date.getMonth()+1}:${date.getFullYear()}`
    const weatherTime = date.getHours()
    console.log("date:",weatherTime);
    const greetingTime = () =>{
        if(weatherTime >= 4 && weatherTime < 12){
            return "Good Morning"
        }else if(weatherTime >= 12 && weatherTime <= 16){
            return "Good Afternoon"
        }else if(weatherTime >=16 && weatherTime <=18){
            return "Good Evening"
        }else{
            return "Good Night"
        }
    }
  return (
    <Box align="center">
        <Flex align="start" justify="between" gap="2">
            <Text size="5">{date.toString().split(" ")[0]}day</Text>
            <Text size="5">{fullDate}</Text>
        </Flex>
        <Heading size="7" className="text-center" mb="1">Welcome Gowtham</Heading>
        <Heading size="5" className="text-center">{greetingTime()} Let's Start</Heading>
    </Box>
  )
}

export default TitleBar