import {NavLink , Outlet} from 'react-router-dom'
import React from "react";
import styled from 'styled-components';
import logo from '../../../asset/images/istockphoto-1188700274-612x612-removebg-preview.png'

const Container = styled.div`
   height :60px;
   margin :10px;
   background-color:gainsboro
   
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
`;
const Left =styled.div`
  flex:1;
  margin-top: 10px;
`;
const Right =styled.div`
direction: rtl;
  flex:2;

`;
const Center =styled.div`
direction: rtl;
  flex:2;
  margin-top:5px

`;
const Language = styled.span`
    font-size: 24px;
`
const Nav=styled.nav`
   padding: 5px;
   a{
    margin-left: 25px;
    text-decoration: none;
   }
   a.active{
    
    font-weight: bold;
   }
`
const Image =styled.img`
height: 50px;
width: 80px;
`
const A=styled.a`
text-decoration: none;
color: black;
`

export function Header(){

    return(
        <Container>
        <Wrapper>
            <Left><A href="/">بازگشت به سایت</A></Left>
            <Center>
                <Nav>
                    <NavLink to='/admin/product'>کالاها</NavLink>
                    <NavLink to='/admin/inventory'>موجودی و قیمت ها</NavLink>
                    <NavLink to='/admin/order'>سفارش ها</NavLink>
                </Nav>
            </Center>
            <Right>
                <Image src={logo} alt="" />
                <Language>پنل مدیریت فروشگاه </Language></Right>
        </Wrapper>
        </Container>
    )
}