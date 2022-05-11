import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

interface Props {
  id: number
}

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>ArticlePage</h1>
      <p>
        Find me in <code>./web/src/pages/ArticlePage/ArticlePage.tsx</code>
      </p>
      <p>
        My default route is named <code>article</code>, link to me with `
      </p>

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
