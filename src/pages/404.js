import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <Layout>
            <Helmet title="404" />
            <h1>Oops! Looks like the link is broken or the page has been moved.</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound;