function _removeClass(selector, classes) {
    if (!selector || !classes)
        throw "Nie przekazano wymaganych parametrów. `_removeClass`";

    if (!Array.isArray(classes))
        throw "Parametr `classes` nie jest tablicą. `_removeClass`";

    selector = document.querySelectorAll(selector);
    [...selector].forEach((item, ind) => {
        classes.forEach((cItem, cInd) => {
            item.classList.remove(cItem);
        });
    });
}


function _addClass(selector, classes) {
    if (!selector || !classes)
        throw "Nie przekazano wymaganych parametrów. `_addClass`";
    if (!Array.isArray(classes))
        throw "Parametr `classes` nie jest tablicą. `_addClass`";

    selector = document.querySelectorAll(selector);
    [...selector].forEach((item, ind) => {
        classes.forEach((cItem, cInd) => {
            item.classList.add(cItem);
        });
    });
}