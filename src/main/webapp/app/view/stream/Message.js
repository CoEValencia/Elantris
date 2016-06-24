Ext.define('ProjectElantris.view.stream.Message', {
	extend: 'Ext.view.View',
	xtype: 'message',	
	margin: 5,
	emptyText: 'No images to display',	
	tpl: [
		'<tpl for=".">',
			'<tpl if="userName != User.user">',
			'<div id="{messageId}-message" class="stream-message">',
			'<tpl else>',
			'<div id="{messageId}-message" class="stream-message-own">',
			'</tpl>',
				'<div class="stream-profile"><img src="{imageSrc}" alt="profile image" style="vertical-align:text-top" class="profile-icon"/></div>',
				'<div class="stream-body">',
					'<div class="stream-message-title">',
						'<b>{userName}&nbsp;</b><span class="stream-message-timestamp">{timestamp:date("d-m-Y H:i")}</span>',
					'</div>',
					'<div class="stream-message-content">',
						'<p><span>{messageText}</span></p>',
					'</div>',
				'</div>',
			'</div></br>',
		'</tpl>',
		'<div class="x-clear"></div>'
	  ],
	  itemSelector: 'div.stream-message',
	  emptyText: 'No images to display'

});	