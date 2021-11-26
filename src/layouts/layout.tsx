import React from 'react';
import styled from '@emotion/styled';
import { CustomHelmet } from '@/src/components';

export const siteTitle = 'Next.js Sample Website';

interface LayoutProps {
    home?: boolean;
    pageTitle?: string;
}

const Header = styled.header`
    display: flex;
    height: 150px;
    width: 100%;
    background-color: #dc2f2f;
    align-items: center;

    p {
        margin-right: 25px;
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
                <p>Recent Posts</p>
                <p>Explore Api</p>
                <p>Backend Code</p>
                <p>Frontend Code</p>
                <p>Add new post</p>
            </Header>
            <Container>{children}</Container>
        </div>
    );
};
