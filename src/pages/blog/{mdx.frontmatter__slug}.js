import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'
import Layout from '../../components/layout'

const BlogPost = ({data,children}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
            />    
            {children}
        </Layout>
    )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  `

export const Head = () => <Seo title="Super cool blog posts" />

export default BlogPost