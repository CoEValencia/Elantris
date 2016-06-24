package com.example.dto;

import java.util.Date;

public class MessageDto {
	private Long id;
	private String userName;
	private String imageSrc;
	private Date timestamp;
	private String messageText;
	
	public MessageDto(){}
	
	public MessageDto(Long id, String userName, String imageSrc, Date timestamp, String messageText){
		this.id = id;
		this.userName = userName;
		this.imageSrc = imageSrc;
		this.timestamp = timestamp;
		this.messageText = messageText;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	
	public String getImageSrc() {
		return imageSrc;
	}

	public void setImageSrc(String imageSrc) {
		this.imageSrc = imageSrc;
	}

	public Date getTimestamp() {
		return timestamp;
	}
	
	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
	
	public String getMessageText() {
		return messageText;
	}
	
	public void setMessageText(String messageText) {
		this.messageText = messageText;
	}	
	
}