import Footer from "./Footer.js";

const Homepage = {
    view: function () {
        return m("div", [
            m("nav", [
                m("ul", [
                    m("li", m(m.route.Link, { href: "/home" }, "Home")),
                    m("li", m(m.route.Link, { href: "/contact" }, "Contact")),
                    m("li", m(m.route.Link, { href: "/news" }, "News"))
                ])
            ]),
            m("div.content", [
                m("h1", { class: "header-text" }, "Hi, I am Duarte!"),
                m("p", { class: "main-page-text" }, [
                    m("strong", "Software engineer, student and musician. "),
                    "Stick around to learn more about me and my projects!"
                ]),
        
            ]),
            m(Footer)
        ]);
    }
};

export default Homepage;
