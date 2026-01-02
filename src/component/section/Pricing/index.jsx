import { Section } from '../../layouts'
import { smallSphere, stars } from '../../../assets'
import { Heading } from '../../ui'
import { LeftLine, RightLine } from '../../designs/Pricing'
import PricingList from './PricingList'

const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere} alt="Sphere"
            className="relative z-1"
            width={255} height={255}
          />

          <div className="absolute top-1/2 left-1/2 w-[60rem -translate-x-1/2
          -translate-y-1/2 pointer-events-auto">
            <img
              src={stars} alt="Starts"
              className="w-full"
              width={950} height={400}
            />
          </div>
        </div>

        <Heading 
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a 
            className="text-xs font-code font-bold tracking-wider
            uppercase border-b cursor-pointer hover:text-color-1"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Pricing