package com.example.dto;

public class UserSessionDto {
	private String userName;
	private String session;
	
	public UserSessionDto(){}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getSession() {
		return session;
	}

	public void setSession(String session) {
		this.session = session;
	}
	
}
