import React from 'react';
import styled from '@emotion/styled';
import { CustomHelmet } from '@/src/components';
import { ArticleItem } from './ArticleItem';
export const siteTitle = 'Next.js Sample Website';

interface LayoutProps {
    articles: [Article];
}

interface Article {
    _id: string;
    createdAt: string;
    title: string;
    body: string;
}

const Header = styled.header`

`;

const Container = styled.div`
    margin-right: 5%;
    margin-left:5%;
`;

export const ArticleList: React.FC<LayoutProps> = ({ articles }) => {
    return (
        <Container>
            {articles.map(article => <ArticleItem key={article._id} article={article}></ArticleItem>)}
        </Container>
    );
};
