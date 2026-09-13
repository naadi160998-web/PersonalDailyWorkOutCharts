import { Container } from '@radix-ui/themes'
import TopBar from './ui/TopBar'
import TitleBar from './ui/TitleBar'

const Header = () => {
  return (
    <Container size="4">
        <TopBar />
        <TitleBar />
    </Container>
  )
}

export default Header