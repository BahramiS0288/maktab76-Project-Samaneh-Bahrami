import {NavLink , Outlet} from 'react-router-dom'
import React from "react";
import styled from 'styled-components';

const Container = styled.div`
   height :60px;
   
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
`;
const Left =styled.div`
  flex:1;
`;
const Right =styled.div`
direction: rtl;
  flex:2;

`;
const Center =styled.div`
direction: rtl;
  flex:2;

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

export function Header(){

    return(
        <Container>
        <Wrapper>
            <Left>بازگشت به سایت</Left>
            <Center>
                <Nav>
                    <NavLink to='/admin/product'>کالاها</NavLink>
                    <NavLink to='/admin/inventory'>موجودی و قیمت ها</NavLink>
                    <NavLink to='/admin/order'>سفارش ها</NavLink>
                </Nav>
            </Center>
            <Right><Language>پنل مدیریت فروشگاه </Language></Right>
        </Wrapper>
        </Container>
    )
}