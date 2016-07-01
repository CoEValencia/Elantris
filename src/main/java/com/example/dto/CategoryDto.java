package com.example.dto;

import java.util.ArrayList;

public class CategoryDto {
	private String category;
	private ArrayList<ConversationDto> conversations;
	
	public CategoryDto(String category, ArrayList<ConversationDto> conversations){
		this.category = category;
		this.conversations = conversations;
	}
		
	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public ArrayList<ConversationDto> getConversations() {
		return conversations;
	}

	public void setConversations(ArrayList<ConversationDto> conversations) {
		this.conversations = conversations;
	}
	
	
}
