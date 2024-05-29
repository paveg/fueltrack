import { useTranslation } from 'react-i18next'
import { Button } from '../../ui/button'
import { Link } from 'react-router-dom'

export const RegistrationLink = () => {
  const { t } = useTranslation('component')
  const translated: { label: string } = t('registration-link', { returnObjects: true })
  return (
    <Button variant="link" size="sm" asChild>
      <Link to="/signup">{translated.label}</Link>
    </Button>
  )
}
