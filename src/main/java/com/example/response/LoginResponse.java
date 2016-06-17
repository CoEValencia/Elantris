package com.example.response;

public class LoginResponse {
	private boolean success;
	private String session;
	
	public LoginResponse(boolean success, String session){
		this.success = success;
		this.session = session;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getSession() {
		return session;
	}

	public void setSession(String session) {
		this.session = session;
	}
	
	
}
