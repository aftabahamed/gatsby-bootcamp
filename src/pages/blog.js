import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {

    // const markDowndata = useStaticQuery(graphql`
    // query {
    //     allMarkdownRemark {
    //       edges {
    //         node{
    //           frontmatter {
    //             title
    //             date
    //           }
    //           fields {
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   }  
    // `);

    const contentfulCmsPosts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publisedDate,
          order: DESC
        }
      ) {
        nodes {
          title
          slug
          publisedDate(formatString:"MMM Do, YYYY")
        }
      }
    }
    `)

    console.log(contentfulCmsPosts);

    return (
            <Layout>
            <Head title="Blogs" />
            <h1>Blogs</h1>
            <ol className={blogStyles.posts}>
                {
                    contentfulCmsPosts.allContentfulBlogPost.nodes.map((node)=>{
                        return (
                            <li className={blogStyles.post}>
                                <h2>{node.title}</h2>
                                <p>{node.publisedDate}</p>
                                <Link to={`/blog/${node.slug}`}>Read More</Link>
                            </li>
                        )
                    })
                }
            </ol>
            </Layout>
    )
}

export default BlogPage;