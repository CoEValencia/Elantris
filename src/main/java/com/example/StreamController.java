package com.example;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.MessageDto;
import com.example.response.NewMessagesResponse;

@RestController
public class StreamController {
	
	@RequestMapping(value = "/getnewmessages", method = RequestMethod.POST)
	@Transactional(readOnly = false)
	@ResponseBody
	public NewMessagesResponse getNewMessages(){
		boolean exists = true;
		
		ArrayList<MessageDto> mensajes = new ArrayList<MessageDto>();
		
		mensajes.add(new MessageDto(1L, "Darth Vader", "img/darth.JPG", new Date(), "Aca probando con algun mensajito, viste?"));
		mensajes.add(new MessageDto(2L, "Scooby Doo", "img/scooby.png", new Date(), "Pero vos sos loco, vi'te? Como va' a decir eso, vi'te?"));
		
		NewMessagesResponse response = new NewMessagesResponse(exists, mensajes);				
		
		return response;
	}
	
}
