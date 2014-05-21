/**
 * @module jquery__config
 * @description Configuration for jQuery
 */

modules.define(
    'jquery__config',
    ['ua', 'objects'],
    function(provide, ua, objects, base) {

var jQueryVer = ua.msie && parseInt(ua.version, 10) < 9 ? '1.11.0' : '2.1.0';
provide(objects.extend(base, { url : '/jquery/' + jQueryVer + '/jquery.min.js' }));

});
