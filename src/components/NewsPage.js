import Footer from "./Footer.js";

const NewsPage = {
    view: function() {
        return m("div", [
            m("nav", [
                m("ul", [
                    m("li", m(m.route.Link, { href: "/home" }, "Home")),
                    m("li", m(m.route.Link, { href: "/contact" }, "Contact")),
                    m("li", m(m.route.Link, { href: "/news" }, "News")),
                ])
            ]),
                m(Footer)
            ])
    }
};

export default NewsPage;
