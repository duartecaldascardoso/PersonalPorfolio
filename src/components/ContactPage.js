const ContactPage = {
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
                m("h1", { class: "header-text" }, "Contact Me"),
                m("p", [
                    "Have questions or want to get in touch? ",
                    m("strong", "Reach out to me at:"),
                    m("a", { href: "mailto:caldasdcardoso@gmail.com", class: "mail-ref" }, "caldasdcardoso@gmail.com"),
                    m("h2", "Streaming and Socials:"),
                    m("div.social-icons", [
                        m("a", { href: "https://www.linkedin.com/in/duartecardoso/", target: "_blank", class: "social-icon" }, 
                            m("i", { class: "fab fa-linkedin" })
                        ),
                        m("a", { href: "https://github.com/duartecaldascardoso", target: "_blank", class: "social-icon" },
                            m("i", { class: "fab fa-github" })
                        )    
                    ])
                ]),
                
            ])
        ]);
    }
};

export default ContactPage;
