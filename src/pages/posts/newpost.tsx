import { Layout } from '../../layouts/layout';
import React from 'react';
import styled from '@emotion/styled';


const FormStyle = styled.div`

h3{
  margin-bottom: 30px;
}
margin-top:5%;
margin-left:5%;
margin-right:5%;
input {
  width: 100%;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  margin-bottom: 10px
}
textarea {
  height: 200px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
label{
  text-align: center;
}
button[type=submit] {
  background-color: #dc2f2f;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
`;

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
        <FormStyle>

          <h3>Note that post will be visible in the frontend after next deployment</h3>

            <form onSubmit={submitContact}>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" autoComplete="title" required />
                <label htmlFor="title">Body</label>
                <textarea id="body" autoComplete="body" required />
                <button type="submit">Send</button>
            </form>
        </FormStyle>
    </Layout>
    );
};
export default NewPost



