import { benefits } from '../../../constants'
import Section from '../../layouts/Section'
import { Heading } from '../../ui'

import { GradientLight } from '../../designs/Benefits'
import Arrow from "../../../assets/svg/Arrow"
import ClipPath from "../../../assets/svg/ClipPath"
import { useComingSoon } from '../../../context/ComingSoonContext'

const Benefits = () => {
  const { openComingSoon } = useComingSoon()
  
  return (
    <Section
      id="features"
    >
      <div className="container relative z-2">
        <Heading 
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with
          Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div 
              className="block relative p-0.5 
              bg-no-repeat bg-size-[100%_100%]
              md:max-w-[22rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col
              min-h-[22rem] p-[2.4rem]
              ">
                <h5 className="h5 mb-5 pointer-events-none">{item.title}</h5>
                <p className='body-2 mb-6 text-n-3 pointer-events-none'>{item.text}</p>
                <div className='flex items-center mt-auto cursor-pointer'>
                  <img 
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p onClick={() => openComingSoon("Explore more")} className='ml-auto font-code font-bold text-xs
                  text-n-1 uppercase tracking-wider
                  hover:text-color-1'>
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className='absolute inset-0.5 bg-n-8'
                style={{ clipPath: "url(#benefits" }}
              >
                <div className='absolute inset-0 opacity-0 
                transition-opacity
                hover:opacity-10'>
                {item.imageUrl &&
                  <img
                    src={item.imageUrl}
                    width={380}
                    height={386}
                    alt={item.title} 
                    className='w-full h-full object-cover'
                  />
                }
                </div>
              </div>

            <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits