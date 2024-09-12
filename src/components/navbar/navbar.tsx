import React, {useEffect, useState} from 'react';
import {Header, NavbarWrapper, NavMenu} from './style';
import {Link, NavLink} from "react-router-dom";
import IconReact from '@/assets/react.svg';
import {ActionIcon, Container, Tooltip} from "@mantine/core";
import {MdExitToApp} from "react-icons/md";


const Navbar = () => {
    const [position, setPosition] = useState(0);
    const [visible, setVisible] = useState(true);


    const handleScroll = () => {
        const moving = window.scrollY || window.pageYOffset;
        setVisible(position > moving);
        setPosition(moving);
    };

    useEffect(() => {
        const isClient = typeof window !== 'undefined';

        if (isClient) {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [position]);

    return (
        <Header className={visible ? 'visible' : 'hidden'}>
            <Container size={1504}>
                <NavbarWrapper>
                    <Link to="/" className="navbar-brand">
                        <img src={IconReact} alt="react-logo"/>
                        <h2>React</h2>
                    </Link>
                    <NavMenu>
                        <NavLink to="/">Products</NavLink>
                        <NavLink to="/users">Users</NavLink>
                        <NavLink to="/posts">Posts</NavLink>
                        <NavLink to="/todos">Todos</NavLink>
                        <Tooltip label="Chiqish" style={{fontSize: '12px'}} color={'red'}>
                            <ActionIcon variant="light" color="#E6483D" ml={9} onClick={() => {
                                localStorage.clear();
                                window.location.reload();
                            }}>
                                <MdExitToApp/>
                            </ActionIcon>
                        </Tooltip>
                    </NavMenu>
                </NavbarWrapper>
            </Container>
        </Header>

    );
};

export default Navbar;
