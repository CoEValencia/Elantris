package com.example.dto;

import java.util.ArrayList;
import java.util.Date;

public class ConversationDto {
	private String title;
	private Date creationDate;
	private ArrayList<MessageDto> messages;
	
	
	public ConversationDto(){}
	
	public ConversationDto(String title, Date creationDate, ArrayList<MessageDto> messages){
		this.title = title;
		this.creationDate = creationDate;
		this.messages = messages;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public ArrayList<MessageDto> getMessages() {
		return messages;
	}

	public void setMessages(ArrayList<MessageDto> messages) {
		this.messages = messages;
	}
	
}
