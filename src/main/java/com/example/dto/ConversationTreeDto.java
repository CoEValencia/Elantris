package com.example.dto;

public class ConversationTreeDto {
	private Long conversationId;
	private String text;
	private boolean leaf = true;	
	private String iconCls = "x-fa fa-comment-o";
	
	public ConversationTreeDto(Long id, String text){
		this.text = text;	
		this.conversationId = id;
	}

	public Long getConversationId() {
		return conversationId;
	}

	public void setConversationId(Long conversationId) {
		this.conversationId = conversationId;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public boolean isLeaf() {
		return leaf;
	}

	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}
	
	public String getIconCls() {
		return iconCls;
	}

	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}
}
