import React from 'react';
import styled from '@emotion/styled';
import { CustomHelmet } from '@/src/components';
import Link from 'next/link';
export const siteTitle = 'Next.js Sample Website';

interface LayoutProps {
    home?: boolean;
    pageTitle?: string;
}

const Header = styled.header`
    position: relative;
    overflow: hidden;

    display: flex;
    background-color: #dc2f2f;
    align-items: center;

    p{
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    p:hover {
        background-color: #ddd;
        a{
            color: black;
        }
      }
    a {
        font-size: 120%;
        text-decoration: none;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Layout: React.FC<LayoutProps> = ({ children, home, pageTitle }) => {
    return (
        <div>
            <CustomHelmet pageTitle={pageTitle ? pageTitle : undefined} />
            <Header>
                <p><Link href="/">Recent Posts</Link></p>
                <p><a target="_blank" href="https://graphqlbackend-blog.herokuapp.com/graphql">Explore Api</a></p>
                <p><a target="_blank" href="https://github.com/Matnabru/GraphqlBlog-backend">Backend Code</a></p>
                <p><a target="_blank" href="https://github.com/Matnabru/GraphqlBlog-frontend">Frontend Code</a></p>
                <p><Link href="/posts/newpost">Add New Post</Link></p>
            </Header>
            <Container>{children}</Container>
        </div>
    );
};
