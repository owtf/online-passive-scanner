import * as React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component<IHeaderProps, {}> {
    public render(): JSX.Element {
        return (
            <Navbar inverse={true} collapseOnSelect={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={this.props.brand.linkTo}>{this.props.brand.text}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <NavMenu links={this.props.links} />
            </Navbar>
        );
    }
}

interface IHeaderProps {
    brand: ILinkItem;
    links: ILinkItem[];
}

interface ILinkItem {
    linkTo: string;
    text: string;
    dropdown?: boolean;
    links?: ILinkItem[];
}

export const NavMenu: React.StatelessComponent<INavMenuProps> = (props) => {
    const links = props.links.map((link: ILinkItem, index: number) => {
        if (link.dropdown && link.links) {
            return (
                <NavLinkDropdown key={index} index={index} links={link.links} text={link.text} />
            );
        }

        return (
            <LinkContainer key={index} to={link.linkTo}>
                <NavItem key={link.text} eventKey={index}>
                    {link.text}
                </NavItem>
            </LinkContainer>

        );
    });
    return (
        <Navbar.Collapse>
            <Nav pullRight={true}>
                {links}
            </Nav>
        </Navbar.Collapse>
    );
}

interface INavMenuProps {
    links: ILinkItem[];
}

export const NavLinkDropdown: React.StatelessComponent<INavLinkDropdownProps> = (props) => {
    const key: number = props.index;
    const links = props.links.map((link: ILinkItem, index: number) => {
        return (
            <LinkContainer key={link.text} to={link.linkTo}>
                <MenuItem key={link.text} eventKey={key + (index * 0.1)}>{link.text}</MenuItem>
            </LinkContainer>

        );
    });
    return (
        <NavDropdown eventKey={props.index} title={props.text} id="basic-nav-dropdown">
            {links}
        </NavDropdown>
    );
}

interface INavLinkDropdownProps {
    key: number;
    index: number;
    links: ILinkItem[];
    text: string;
}

