function customereact(reactelement, root) {
    //      const createdom = document.createElement(reactelement.type)
    //      createdom.innerHTML = reactelement.Children;
    //      createdom.setAttribute("href",reactelement.props.href);
    //      createdom.setAttribute("alt",reactelement.props.alt);

    // contain.appendChild(createdom);
}


    const reactelement = {
        type: "a",
        props: {
            href: "https://gmail.com",
            alt: "gmail"
        },
        Children: "Gmail is used for communication"
    }

    const root = document.querySelector("#root");

    customereact(reactelement, root);