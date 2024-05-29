import { useTranslation } from 'react-i18next'
import { Button } from '../../ui/button'
import { Link } from 'react-router-dom'

export const LoginLink = () => {
  const { t } = useTranslation('component')
  const translated: { label: string } = t('login-link', { returnObjects: true })
  return (
    <Button variant="link" size="sm" asChild>
      <Link to="/login">{translated.label}</Link>
    </Button>
  )
}
