import '../styles/global.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';
const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ApolloProvider client = {client}>
                <Component {...pageProps} />;
        </ApolloProvider>
    )
};

export default App;
