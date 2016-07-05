package com.example.dto;

public class ConversationNewMessagesDto {
	private Long idConversation;
	private String user;
	
	public ConversationNewMessagesDto(){}

	public Long getIdConversation() {
		return idConversation;
	}

	public void setIdConversation(Long idConversation) {
		this.idConversation = idConversation;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
	
	
}
