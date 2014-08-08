/*global Backbone */
'use strict';

var Router = Backbone.Router.extend({
	routes : {
		'' : 'home'
	}
});

var FolderListView = Backbone.View.extend({
	el : '.qrcode',
	render : function() {
		this.$el.qrcode('test message');
	}
});

var router = new Router();
router.on('route:home', function () {
	var folder_list_view = new FolderListView();
	folder_list_view.render();
});

Backbone.history.start();