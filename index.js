
var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
	var str = args.content;

	str = str.replace(/\n/g, "<newline>");
	str = str.replace(/<li data-type="button" data-key="savedRevision">/, `<li data-type="button" style="display:none" data-key="savedRevision">`);
	str = str.replace(/<newline>/g, '\n');
	args.content = str;
  return cb();
};

