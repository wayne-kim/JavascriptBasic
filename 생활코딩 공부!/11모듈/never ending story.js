/**
 * Created by Napalm on 2016-01-19.
 */
function man(sex, favorite) {
    var value = Math.round(Math.random(favorite.length));
    document.write(sex+" : "+favorite[value]+"<br>");
}

exports.cman = function (sex, favorite) {
    var value = Math.round(Math.random(favorite.length));
    console.log(sex+" : "+favorite[value]);
}