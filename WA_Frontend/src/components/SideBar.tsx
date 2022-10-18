import { useHistory } from "react-router-dom";
import { RiAddLine } from 'react-icons/ri';
import { BsList } from 'react-icons/bs';
import { Container, Content, IconWrapper } from '../styles/components/SideBar.style';

export const SideBar = () => {
    const history = useHistory();

    return (
        <Container>
            <Content onClick={() => history.push("/addTodo")}>
                Add TODO
                <IconWrapper>
                    <RiAddLine />
                </IconWrapper>
            </Content>
            <Content onClick={() => history.push("/")}>
                List TODO
                <IconWrapper>
                    <BsList />
                </IconWrapper>
            </Content>
        </Container>
    );
};