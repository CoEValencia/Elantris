package com.example.dto;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonFormat;

public class MessageDto {
	private Long messageId;
	private String userName;
	private String imageSrc;
	@JsonFormat(pattern="dd-MM-yyyy HH:mm")
	private Date timestamp;
	private String messageText;
	
	
	public MessageDto(){}
	
	public MessageDto(Long messageId, String userName, String imageSrc, Date timestamp, String messageText){
		this.messageId = messageId;
		this.userName = userName;
		this.imageSrc = imageSrc;
		this.timestamp = timestamp;
		this.messageText = messageText;
	}
	
	public Long getMessageId() {
		return messageId;
	}
	
	public void setMessageId(Long messageId) {
		this.messageId = messageId;
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