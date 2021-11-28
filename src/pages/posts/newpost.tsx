import { Layout } from '../../layouts/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
import client from '@/lib/apollo-client';
import { da } from 'date-fns/locale';

export default () => {
    return (
        <Layout pageTitle={"Add new article"}>
        <div>
            <h1>{"article title"}</h1>
            <p>{"article body"}</p>
            <br></br>
        </div>
    </Layout>
    );
};




