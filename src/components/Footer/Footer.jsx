import { Container } from '@radix-ui/themes'
import FooterBanner from './FooterBanner'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <Container size="4">
        <FooterBanner />
        <FooterBottom />
    </Container>
  )
}

export default Footer