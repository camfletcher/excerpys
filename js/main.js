const repeat = (x, func) => { for (var i = 0; i < x; i++) func(i); };
const getElm = (id) => document.getElementById(id);
const getDefaultExercise = () => getExercise(getUrlParameters("id", "", true));
const toHtml = (tag, attributes, body) => body ? `<${tag} ${attributes.join(" ")}>${body}</${tag}>` : `<${tag} ${attributes.join(" ")}>`;

function getUrlParameters(parameter, staticURL, decode) {
    var currLocation = (staticURL.length) ? staticURL : window.location.search,
        parArr = currLocation.split("?")[1].split("&");

    for (var i = 0; i < parArr.length; i++){
        parr = parArr[i].split("=");
        
        if (parr[0] == parameter) {
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
        } else return false;
    }
}