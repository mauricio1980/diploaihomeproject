//from https://codeconqueror.com/blog/get-the-current-url-in-next-js
export const absoluteUrl = (req, setLocalhost) => {

    let protocol = "https:";
    let host = req ? req.headers["x-forwarded-host"] || req.headers["host"] : window.location.host;

    if (host.indexOf("localhost") > -1) {
        if (setLocalhost) host = setLocalhost;
        protocol = "http:";
    }

    return {
        protocol,
        host,
        origin: `${protocol}//${host}`
    };
};