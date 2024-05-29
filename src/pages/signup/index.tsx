import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const Signup = () => {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('section.signup')}</title>
      </Helmet>
      <div className="container"></div>
    </>
  )
}
export default Signup
