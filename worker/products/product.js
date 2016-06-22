/**
 * Created by che on 09.06.16.
 */
'use strict';
var fs = require('fs');

function renderProductPage(res, id, path) {
    var pathname = path + id;
    var json = require(pathname);

    //console.log(json.jProductData.product);
    return res.view(path + '/templates/template.jade', json);

    var file = fs.readFile/*(pathname, 'utf8', function (err, data) {
        if (err) throw err;

        console.log(JSON.parse(data));
    });
    console.log(file);*/
}

exports.product = renderProductPage;