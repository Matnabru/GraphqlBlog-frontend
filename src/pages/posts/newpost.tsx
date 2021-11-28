import { Layout } from '../../layouts/layout';
import React from 'react';

const NewPost = () => {
    async function generateConversationWith(title: string, body: string) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
            mutation{
                createArticle(article: { title: "${title}", body:"${body}"}) {
                  title,
                  body,
                  createdAt
                }
              }`,
          }),
        });
        const responseData = await response.json();
    
        console.log("response", responseData);
      }


    const submitContact = async (event:any) => {
        event.preventDefault();
        alert(`So the title is ${event.target.title.value}?`);
        generateConversationWith(event.target.title.value,event.target.body.value)

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



