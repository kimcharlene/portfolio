// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ProjectCard from '../components/project-card.js'
import Seo from '../components/seo'

// Step 2: Define your component
const DesignPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle="Design">
        {
          data.allMdx.nodes.map(node => (
            <ProjectCard title={node.frontmatter.title} description={node.frontmatter.description} image={node.frontmatter.image.childImageSharp.gatsbyImageData} />
          ))
        }
      </Layout>
    </main>
  )
}

export const query = graphql`
  {
    allMdx(sort: {frontmatter: {order: ASC}}) {
      nodes {
        frontmatter {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Design" />

// Step 3: Export your component
export default TeachingPage