package com.example.response;

import java.util.ArrayList;

import com.example.dto.StreamDto;

public class ListOfConversationsResponse {
	private boolean success;
	private ArrayList<StreamDto> streams;
	
	public ListOfConversationsResponse(boolean success, ArrayList<StreamDto> streams){
		this.streams = streams;
		this.success = success;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public ArrayList<StreamDto> getStreams() {
		return streams;
	}

	public void setStreams(ArrayList<StreamDto> streams) {
		this.streams = streams;
	}	
	
}
