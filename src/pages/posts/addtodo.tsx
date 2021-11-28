import { gql, useMutation } from '@apollo/client';
import client from '@/lib/apollo-client';
const ADD_TODO = gql`
mutation {
    createArticle(article: { title: "IT WORKS", body:"REALLY IT WORKS"}) {
      title,
      body,
      createdAt
    }
  }
`;


const AddTodo = () => {
    let input:any;
  
    const [addTodo, {data, loading, error }] = useMutation(ADD_TODO);
  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
  
            addTodo({ variables: { text: input.value } });
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
export default AddTodo