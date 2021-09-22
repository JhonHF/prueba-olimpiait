import styled from "styled-components";
import { Layout } from "antd";
const { Header, Content } = Layout;

export const StyledHeader = styled(Header)`
    color: white;
    font-size: 2rem;
    font-weight: bold;
`;

export const StyledLayout = styled(Layout)`
    min-height: 100vh;
`;

export const StyledContent = styled(Content)`
    padding: 1rem;
`;