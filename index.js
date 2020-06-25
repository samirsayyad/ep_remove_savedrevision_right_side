
var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
	var str = args.content;

	str = str.replace(/\n/g, "<newline>");
	str = str.replace(/<li data-key="savedRevision">/, "<li class=\"separator\">");
	str = str.replace(/<newline>/g, '\n');
	args.content = str;
  return cb();
};

