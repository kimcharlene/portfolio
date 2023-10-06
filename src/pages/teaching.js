// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const TeachingPage = () => {
  return (
    <main>
      <Layout pageTitle="Teaching">
      <p>This is the Teaching page, that will showcase education projects.</p>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Teaching"/>

// Step 3: Export your component
export default TeachingPage