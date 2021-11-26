import { Layout } from '@/src/layouts';
import { LogoAexol } from '@/src/assets';
import { TestMolecules } from '@/src/components';
import Link from 'next/link';
import styled from '@emotion/styled';
import client from '@/lib/apollo-client';
import { ArticleList } from '../components/ArticleList';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";



const ALink = styled.div`
    a {
        color: black;
    }
`;

console.log(process.env.NEXT_PUBLIC_HOST);

const HomePage = ({ articles }: UnwrapStaticPromiseProps<typeof getStaticProps>) => {
    return (
        <Layout pageTitle="HomePage">
            <TestMolecules /> 
            <ALink>
                <Link href="/posts/first">Dynamic Route Post Example</Link>
                <ArticleList articles={articles}></ArticleList>
            </ALink>
        </Layout>
    );
};

export default HomePage;

export const getStaticProps = async () => {
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
    console.log(data.getArticles)
    return {
        props: {
            articles : data.getArticles
        },
    };
};