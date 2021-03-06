﻿var bbs_favboard_name = '收藏夹';
var bbs_allboard_name = '所有版面';

var bbs_max_board_count = 9999;
var bbs_post_count = 20;
var bbs_max_post_count = 999;

var accounts9_session_cookie = 'accounts9_session';
var bbs_session_cookie = 'bbs_session';
var bbs_error_session = 'SESSION_ERROR';

var website_address = location.origin;
var path = location.pathname.split('/');
for (var i = 1; i < path.length - 1; i++) {
	website_address += '/' + path[i];
}

var bbs_info = {
	title : 'Rowell ',
	version : '0.2.4',
	send_source : '[Sent from Rowell v'
};

bbs_info.send_source += bbs_info.version + ']';

var accounts9 = {
	server: 'https://accounts.net9.org',
	client_id: 'FYDBDkj2417_TIEuhcf5Juxi3h0',
	client_secret: 'QUwkDZHgShInZ8YRG6Po',
	connect: '/bbs/connect',
	auth: '/api/authorize',
	access_token: '/api/access_token',
	userinfo: '/api/userinfo',
	bbsuserinfo: '/api/bbsuserinfo',
};

accounts9.auth += '?redirect_uri=' + encodeURIComponent(website_address + '/login_accounts9.html');
accounts9.auth += '&client_id=' + accounts9.client_id;

var bbs_query = {
	server 				:			'https://bbs.net9.org:8080',
	client_id 		:			0,
	client_secret :			0,
	auth : {
		auth				:			'/auth/auth',
		token				:			'/auth/token',
		session_verify : '/session/verify'
	},
	view : {
		allboard		:			'/board/list',
		favboard		:			'/favboard/list',
		postlist		:			'/board/post_list',
		viewpost		:			'/post/view',
		sametopic		:			'/post/nextid'
	},
	write_post : {
		get_quote		:			'/post/quote',
		write_post	:			'/post/new',
		prepare			:			'/post/prepare',
		attach			:			'/store/new'
	},
	utility : {
		clear_unread:			'/board/clear_unread'
	}
};

bbs_query.auth.auth += '?redirect_uri=' + encodeURIComponent(website_address + '/login.html');
bbs_query.auth.auth += '&response_type=code&client_id=' + bbs_query.client_id;

var bbs_type = {
	path : {
		allboard	:		'PATH_ALLBOARD',
		favboard	:		'PATH_FAVBOARD',
		folder		:		'PATH_FOLDER',
		board			:		'PATH_BOARD',
		post			:		'PATH_POST',
		digest		:		'PATH_DIGEST'
	},
	entry : {
		allboard	:		'ENTRY_ALLBOARD',
		favboard	:		'ENTRY_FAVBOARD',
		board			:		'ENTRY_BOARD',
		folder		:		'ENTRY_FOLDER',
		post			:		'ENTRY_POST'
	},
	write_post : {
		new		  	: 	'POST_NEW',
		reply			:		'POST_REPLY'
	},
};
	
var bbs_msg = {
	info : {
		zhname : '提示：',
		class_name : 'alert alert-info',
		board_reach_last : '已到达本版最后一页。',
		board_reach_first : '已到达本版第一页。',
		post_reach_last : '已到达本版最后一贴。',
		post_reach_first : '已到达本版第一帖。',
		post_publish_success : '帖子发表成功。',
		sametopic_reach_last : '已到达本主题最后一贴。',
		sametopic_reach_first : '已到达本主题第一帖。',
		sametopic_head_not_exist : '主题贴不存在或已被删除。',
		board_unread_cleared : '本版未读标记已清除。',
		all_unread_cleared : '全站未读标记已清除。'
	},
	error : {
		zhname : '错误：',
		class_name : 'alert alert-error',
		network_error : '网络连接异常，无法完成您的请求。',
		unknown_error : '出现未知错误，请重新请求或联系开发者。',
		cannot_reply	:	'此帖已被设置为不可回复。',
		cannot_post		:	'本版已被设置为只读。'
	},
	warning : {
		class_name : 'alert alert-block',
		zhname : '警告：'
	}
};

