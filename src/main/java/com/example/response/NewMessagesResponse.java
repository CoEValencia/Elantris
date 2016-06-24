package com.example.response;

import java.util.ArrayList;

import com.example.dto.MessageDto;

public class NewMessagesResponse {
	private boolean success;
	private ArrayList<MessageDto> mensajes;
	
	public NewMessagesResponse(boolean success, ArrayList<MessageDto> mensajes){
		this.success = success;
		this.mensajes = mensajes;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public ArrayList<MessageDto> getMensajes() {
		return mensajes;
	}

	public void setMensajes(ArrayList<MessageDto> mensajes) {
		this.mensajes = mensajes;
	}
	
	
}
