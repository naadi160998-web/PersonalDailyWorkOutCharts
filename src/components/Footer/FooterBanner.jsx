import { Box, Grid } from '@radix-ui/themes'

const FooterBanner = () => {
  return (
    <Grid columns={{ initial: "1", xs:"2",sm:'3',md: "3",lg:"3" }} gap="3" width="auto">
        <Box>
            <img src=" /assets/Day_Posters/Pushup_Progression.png" alt="" />
        </Box>
        <Box>
            <img src=" /assets/Day_Posters/Pullup_Progression.png" alt="" />
        </Box>
        <Box>
            <img src=" /assets/Day_Posters/Hand_Arm_Strength.png" alt="" />
        </Box>
    </Grid>
  )
}

export default FooterBanner