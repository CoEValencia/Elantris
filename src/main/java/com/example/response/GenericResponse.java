package com.example.response;

public class GenericResponse {
	private boolean success;
	
	public GenericResponse(){
		this.success = true;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	
}
