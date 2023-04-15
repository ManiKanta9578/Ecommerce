import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialCointainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h1`
    margin-bottom: 10px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Contact = styled.h1`
    margin-bottom: 10px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width:50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MK.</Logo>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium eius tempora sit amet consectetur adipisicing elit elit elit elit obcaecati consectetur libero reprehe</Desc>
            <SocialCointainer>
                <SocialIcon color="3B5999">   <Facebook/>  </SocialIcon>
                <SocialIcon color="E4405F">   <Instagram/> </SocialIcon>
                <SocialIcon color="55ACEE">   <Twitter/>   </SocialIcon>
                <SocialIcon color="E60023">   <Pinterest/> </SocialIcon>
            </SocialCointainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Contact>Contact</Contact>
            <ContactItem >  <Room style={{marginRight: "10px"}} /> 622 Street Delhi India 500000 </ContactItem>
            <ContactItem >  <Phone style={{marginRight: "10px"}} />  +91 1234567890</ContactItem>
            <ContactItem> <MailOutlined style={{marginRight: "10px"}} /> contact@mk.com </ContactItem>
            <Payment src="https://th.bing.com/th/id/OIP.KfOgjLAEb3NugdJm8jmhngAAAA?pid=ImgDet&rs=1"></Payment>
        </Right>
    </Container>
  )
}

export default Footer