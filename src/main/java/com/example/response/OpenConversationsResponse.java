package com.example.response;

import java.util.ArrayList;

import com.example.dto.CategoryTreeDto;

public class OpenConversationsResponse {
	private boolean success;
	private ArrayList<CategoryTreeDto> children;
	
	public OpenConversationsResponse(){}
	
	public OpenConversationsResponse(boolean success, ArrayList<CategoryTreeDto> children){
		this.success = success;
		this.children = children;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public ArrayList<CategoryTreeDto> getChildren() {
		return children;
	}

	public void setChildren(ArrayList<CategoryTreeDto> children) {
		this.children = children;
	}	
}
