import { FuelIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from 'src/components/ui/button'

export const HomeLink = () => {
  const { t } = useTranslation('component')
  const translated: { label: string } = t('home-link', { returnObjects: true })
  return (
    <Button variant="link" asChild>
      <Link to="/" className="flex items-center gap-2">
        <FuelIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">{translated.label}</span>
      </Link>
    </Button>
  )
}
