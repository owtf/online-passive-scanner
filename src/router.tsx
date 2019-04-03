import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App/index';
import Header from './components/Header/index';
import Help from './components/Help/index';
import './scss/styles.scss';


export const AppRouter: React.StatelessComponent<{}> = () => {
    const navbar: ILink = {
        brand: { linkTo: '/', text: 'OWASP OWTF' },
        links: [
            { linkTo: "/home", text: "Home" },
            { linkTo: "/help", text: "Help" },
        ]
    };
    return (
        <BrowserRouter>
            <div>
                <Header {...navbar} />
                <Switch>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/home" component={App} />
                    <Route path="/help" component={Help} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

interface ILink {
    brand: ILinkItem;
    links: ILinkItem[];
}

interface ILinkItem {
    linkTo: string;
    text: string;
    dropdown?: boolean;
    links?: ILinkItem[];
}
