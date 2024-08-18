import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Assets } from './assets'
import { Container, Main, Wrapper } from './components'
import SocialIcon from './components/socialIcon'

export default function App() {

  function socialsContent() {
    const socialsData = [
      faFacebookF,
      faTwitter,
      faInstagram
    ]

    return (
      <Wrapper className='flex justify-center items-center gap-[10px]'>
        {
          socialsData.map((social, index) => (
            <SocialIcon key={index} icon={social} />
          ))
        }
      </Wrapper>
    )
  }

  return (
    <Main className='flex flex-col gap-[65px] min-w-full bg-[#684BB1] bg-[url(/src/assets/bg-mobile.svg)] xs:bg-[url(/src/assets/bg-desktop.svg)] bg-no-repeat px-[36px] py-[40px] md:px-[80px] md:justify-between'>
      <header>
        <img className='w-[120px] md:w-[200px]' src={Assets.logo} alt="" />
      </header>

      <Container className='flex flex-col flex-nowrap gap-[60px] md:flex-row '>
        <img className='flex-grow object-contain max-w-[700px] md:w-[50%]' src={Assets.illustrationMockups} alt="" />

        <Wrapper className='flex-grow flex flex-col  text-white text-center md:text-left md:self-center'>
          <h1 className='font-poppins font-semibold text-[24px] leading-[36px] md:text-[40px] md:leading-[60px]'>
            Build The Community Your Fans Will Love
          </h1>

          <p className='font-open-sans leading-[24px] mt-[16px] md:text-[18px] md:leading-[27px]'>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
          </p>

          <button className='font-poppins text-[12px] md:text-[18px] text-[#684BB1] bg-white w-[200px] h-[40px] md:h-[56px] self-center md:self-start rounded-full mt-[24px] leading-[18px] shadow-[1px_3px_5px_0px_rgba(0,0,0,.260)] hover:bg-[#E880E8] hover:text-white transition-colors '>
            Register
          </button>
        </Wrapper>
      </Container>

      <footer className='flex flex-col md:items-end'>
        {socialsContent()}
      </footer>
    </Main>
  )
}
