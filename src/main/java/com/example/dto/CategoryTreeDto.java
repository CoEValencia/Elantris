package com.example.dto;

import java.util.ArrayList;

public class CategoryTreeDto {
	private String text;
	private boolean expanded = true;
	private ArrayList<ConversationTreeDto> children;
	private String iconCls = "x-fa fa-comments-o";
	
	public CategoryTreeDto(String text, ArrayList<ConversationTreeDto> children){
		this.text = text;
		this.children = children;		
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public boolean isExpanded() {
		return expanded;
	}

	public void setExpanded(boolean expanded) {
		this.expanded = expanded;
	}

	public ArrayList<ConversationTreeDto> getChildren() {
		return children;
	}

	public void setChildren(ArrayList<ConversationTreeDto> children) {
		this.children = children;
	}

	public String getIconCls() {
		return iconCls;
	}

	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}
	
}
