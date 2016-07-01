package com.example;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.CategoryDto;
import com.example.dto.CategoryTreeDto;
import com.example.dto.ConversationDto;
import com.example.dto.ConversationTreeDto;
import com.example.dto.MessageDto;
import com.example.dto.UserSessionDto;
import com.example.response.GenericResponse;
import com.example.response.NewMessagesResponse;
import com.example.response.OpenConversationsResponse;

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
	
	@RequestMapping(value = "/addnewmessage", method = RequestMethod.POST)
	@Transactional(readOnly = false)
	public GenericResponse addMessageToStream(@RequestBody MessageDto dto){
		System.out.println("\n\n\n");
		System.out.println("UserName:\t" + dto.getUserName());
		System.out.println("Timestamp:\t" + dto.getTimestamp());
		System.out.println("Message:\t" + dto.getMessageText());
		System.out.println("\n\n\n");
		
		GenericResponse response = new GenericResponse();
		return response;
	}
	
	@RequestMapping(value = "/getopenconversations", method = RequestMethod.POST)
	@Transactional(readOnly = false)
	@ResponseBody
	public OpenConversationsResponse getOpenConversations(@RequestBody UserSessionDto dto){		
		ArrayList<CategoryTreeDto> categories = new ArrayList<CategoryTreeDto>();
		
//		ArrayList<MessageDto> mensajes1 = new ArrayList<MessageDto>();
//		mensajes1.add(new MessageDto(1L, "Darth Vader", "img/darth.JPG", new Date(), "Aca probando con algun mensajito, viste?"));
//		mensajes1.add(new MessageDto(2L, "Scooby Doo", "img/scooby.png", new Date(), "Pero vos sos loco, vi'te? Como va' a decir eso, vi'te?"));
		ArrayList<ConversationTreeDto> conver11 = new ArrayList<ConversationTreeDto>();
		conver11.add(new ConversationTreeDto(1L, "Conversation 1"));		
		CategoryTreeDto cat1 = new CategoryTreeDto("Categoria1", conver11);
		
//		ArrayList<MessageDto> mensajes2 = new ArrayList<MessageDto>();
//		mensajes1.add(new MessageDto(3L, "Darth Vader", "img/darth.JPG", new Date(), "Siempre igual, boludo"));
//		mensajes1.add(new MessageDto(4L, "Scooby Doo", "img/scooby.png", new Date(), "Mira quien fue a hablar!!!"));
		ArrayList<ConversationTreeDto> conver12 = new ArrayList<ConversationTreeDto>();
		conver12.add(new ConversationTreeDto(2L, "Conversation 2"));
		CategoryTreeDto cat2 = new CategoryTreeDto("Categoria2", conver12);
		
		categories.add(cat1);
		categories.add(cat2);
		OpenConversationsResponse response = new OpenConversationsResponse(true, categories);
		
		return response;
	}
	
	
}
