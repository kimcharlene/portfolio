// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const STEMPage = () => {
  return (
    <main>
      <Layout pageTitle="STEM">
      <p>This is the STEM page, that will showcase STEM projects.</p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>STEM</title>

// Step 3: Export your component
export default STEMPage