import { Layout } from '../../layouts/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    useMutation,
    gql
  } from "@apollo/client";
import client from '@/lib/apollo-client';
import { da } from 'date-fns/locale';
import React from 'react';

const NewPost = () => {

    
    
    const submitContact = async (event:any) => {
        event.preventDefault();
        alert(`So the title is ${event.target.title.value}?`);

    };

    return (
        <Layout pageTitle={"Add new article"}>
        <div>
            <br></br>

            <form onSubmit={submitContact}>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" autoComplete="title" required />
                <label htmlFor="title">Body</label>
                <input id="body" type="text" autoComplete="body" required />
                <button type="submit">Send</button>
            </form>
        </div>
    </Layout>
    );
};
export default NewPost



