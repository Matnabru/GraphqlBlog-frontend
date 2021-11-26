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

export default ({ article }: UnwrapStaticPromiseProps<typeof getStaticProps>) => {
    return (
        <Layout pageTitle={article.title}>
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br></br>
        </div>
    </Layout>
    );
};

export async function getStaticPaths() {
    const getAllArticles = gql`query {
        getArticles{
          title
          body
          _id
          createdAt
        }
      }`

    const { data } = await client.query({
        query: getAllArticles
      })
    const ids = data.getArticles.map( (article:any) => article._id);
    console.log(ids)
    const paths = ids.map( (id:String) => ({params: {id}}))
    console.log(paths)
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async ({
    params,
}: {
    params: {
        id: string;
    };
}) => {
    const getPost = gql`
    query {
        getArticle(_id: "${params.id}"){
          title
          body
          _id
          createdAt
        }
      }
    `
    const { data } = await client.query({
        query: getPost
      })
      console.log(data);
    return {
        props: {
            article : data.getArticle
        }
    };
};
