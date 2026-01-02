import { useState } from "react"
import { useLocation } from "react-router-dom"
import { enablePageScroll, disablePageScroll } from "scroll-lock"
import Button from "../ui/Button"
import { HamburgerMenu } from "../designs/Header"
import { useComingSoon } from "../../context/ComingSoonContext"

import { brainwave } from "../../assets"
import { navigation } from "../../constants"
import MenuSvg from "../../assets/svg/MenuSvg"

const Header = () => {
  const pathname = useLocation()
  const [openNavigation, setOpenNavigation] = useState(false)
  const { openComingSoon } = useComingSoon();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }


  const handleClick = () => {
    if (!openNavigation) return

    enablePageScroll(false)
    setOpenNavigation(false)
  }

  return (
    <div className={`fixed top-0 left-0 w-full z-50
      border-b border-n-6 lg:bg-n-8/90
      lg:backdrop-blur-sm ${openNavigation ? 
      'bg-n-8 mt-0 border-b-8 border-n-8' : 
      'bg-n-8/90 backdrop-blur-sm'}`}>
      <div className="flex items-center px-5 lg:px-7.5
      xl:px-10 max-lg:py-4">
        <a className="block w-48 xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40}
          alt="Brainwave Logo"/>
        </a>

        <nav className={`${openNavigation ? "flex mt-0" : "hidden"}
          fixed top-20 left-0 right-0
          bottom-0 bg-n-8 lg:static lg:flex
          lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col
            items-center justify-center
            m-auto lg:flex-row"
          >
            {navigation.map((item) => (
              <a 
                key={item.id} 
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code uppercase text-n-1
                  transition-colors hover:text-color-1 ${
                item.onlyMobile ? "lg:hidden" : ""}
                px-6 py-6 md:py-8 lg:-mr-0.25
                lg:text-xs lg:font-semibold ${
                item.url === pathname.hash 
                  ? 'z-2 lg:text-n-1'
                  : 'lg:text-n-1/50'
                } lg:leading-5 lg:hover:text-n-1
                lg:px-12`} >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a 
          onClick={() => openComingSoon("New account")}
          className="button hidden mr-8 text-n-1/50 cursor-pointer
          transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" onClick={() => openComingSoon("Sign in")}>
            Sign in
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3"
          onClick={toggleNavigation}
        >
            <MenuSvg openNavigation={openNavigation}/>
        </Button>
      </div>
    </div>
  )
}

export default Header;