import { FuelIcon } from 'lucide-react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Input } from 'src/components/ui/input'

const Login = () => {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('section.login')}</title>
      </Helmet>
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-center">
            <FuelIcon className="h-12 w-12" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">{t('login.h2')}</h2>
          <p className="mt-2 text-center text-sm">
            {t('or')}{' '}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              {t('login.signup-message')}
            </Link>
          </p>
          <form className="mt-8 space-y-6">
            <div className="-space-y-px space-y-2 rounded-md shadow-sm">
              <Input size={6} />
              <Input />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Login
