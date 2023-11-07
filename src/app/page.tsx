import Image from 'next/image'
import styles from './page.module.css'
import Faq from '@/shared/ui/Faq/Faq'
import HeroSection from '@/shared/ui/HeroSection/HeroSection'
import GreenBlock from '@/shared/ui/GreenBlock/GreenBlock'
import { greenBlock1, greenBlock2 } from '../../data/greenblock'
import { Footer } from '@/widgets/Footer'
import InfoBlock from '@/shared/ui/InfoBlock/InfoBlock'
import { climate, financials, politics, science } from '../../data/datas'

export default function Home() {
  return (
    <>
    <main className={styles.main}>
        <HeroSection />
        <GreenBlock upperBlock={true} data={greenBlock1} />
        <InfoBlock title="Politics" data={politics} appearance='column2' />
        <InfoBlock title="Climate" data={climate} appearance='column4' />
        <GreenBlock upperBlock={false} data={greenBlock2} />
        <InfoBlock title="Science" data={science} appearance='column2' />
        <InfoBlock title="Financials" data={financials} appearance='column4' />
        <Faq /> 
      </main>
      <Footer />
    </>
  )
}
