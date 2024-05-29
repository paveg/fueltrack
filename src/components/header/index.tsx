import { LanguageSelector } from '../language-selector'
import { useTranslation } from 'react-i18next'
import { LoginLink } from '../buttons/login-link'
import { RegistrationLink } from '../buttons/registration-link'
import { HomeLink } from '../buttons/home-link'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="flex h-16 items-center justify-between px-4 md:px-6">
      <HomeLink />
      <div className="flex items-center gap-1">
        <LoginLink />
        <RegistrationLink />
        <LanguageSelector />
        {/* <Button size={'icon'} asChild className="rounded-full">
          <a href="https://github.com/paveg/fueltrack" target="_blank" rel="noreferrer">
            <Github />
          </a>
        </Button> */}
      </div>
    </header>
  )
}
