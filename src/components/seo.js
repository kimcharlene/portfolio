import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


// takes in parameter title, queries site title

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{title} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo