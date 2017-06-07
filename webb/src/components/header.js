import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: ""
        };
        //bind to not lose context
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;
        if (scrollTop > 200) {
            this.setState({ isScrolled: "navigation--background" })
        }
        else {
            this.setState({ isScrolled: "" })
        }
    }

    render() {
        return (
            <header>
                <nav className={"navigation " + (this.state.isScrolled)}>
                    <Link to="/" >
                        <img className="logo" src="media/logo_black.png" />
                    </Link>
                    <ul>
                        <li><Link to="/comments">
                            Lämna kommentar
                        </Link></li>
                        <li><Link to="/">
                            Start
                        </Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}