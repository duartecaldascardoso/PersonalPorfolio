const Footer = {
    view: function () {
        return m("footer", [
            m("p", "Copyright © 2024 Duarte Cardoso"),
            m("div.social-icons", [
                m("a", { href: "https://www.linkedin.com/in/duartecardoso/", target: "_blank", class: "social-icon" }, 
                    m("i", { class: "fab fa-linkedin" })
                ),
                m("a", { href: "https://github.com/duartecaldascardoso", target: "_blank", class: "social-icon" },
                    m("i", { class: "fab fa-github" })
                )                
            ])
        ]);
    }
};

export default Footer;
