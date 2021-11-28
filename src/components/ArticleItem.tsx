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

const Container = styled.div`
    margin-top:5%;
    
    a{
        text-decoration: none;
    }

    h3{
        margin-bottom:15px
    }
    .date{
        margin-bottom:5px
    }
    
`;
export const ArticleItem: React.FC<LayoutProps> = ({ article }) => {
    var epoch = parseInt(article.createdAt);
    var myDate = new Date(epoch).toString();
    myDate = myDate.slice(0,15)
    console.log(myDate)
    return (
        <Container>
            <Link href="/posts/[id]" as={`/posts/${article._id}`}>
                <a>
                    <h3>
                        {article.title}
                    </h3>
                    <p className="date">
                        {myDate}
                    </p>
                    <p>
                        {article.body}
                    </p>
                </a>
            </Link>
        </Container>

    );
};
