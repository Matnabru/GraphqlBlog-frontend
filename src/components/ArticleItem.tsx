import React from 'react';
import styled from '@emotion/styled';
import Link from "next/dist/client/link";

export const siteTitle = 'Next.js Sample Website';

interface LayoutProps {
    article: Article;
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

`;

export const ArticleItem: React.FC<LayoutProps> = ({ article }) => {
    return (
        <Link href="/posts/[id]" as={`/posts/${article._id}`}>
            <a>
                <h3>
                    {article.title} &rarr;
                </h3>
                <p>
                    {article.body}
                </p>
            </a>
        </Link>
    );
};
