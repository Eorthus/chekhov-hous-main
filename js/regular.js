export default
    function phone_format() {
    let pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
    document.body.innerHTML = document.body.innerHTML.replace(pattern, '+7 ($2) $3 $4 $5</a>');
}