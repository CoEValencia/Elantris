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
import com.example.dto.ConversationNewMessagesDto;
import com.example.dto.ConversationTreeDto;
import com.example.dto.MessageDto;
import com.example.dto.StreamDto;
import com.example.dto.UserSessionDto;
import com.example.response.GenericResponse;
import com.example.response.ListOfConversationsResponse;
import com.example.response.NewMessagesResponse;
import com.example.response.OpenConversationsResponse;

@RestController
public class StreamController {
	
	@RequestMapping(value = "/getnewmessages", method = RequestMethod.POST)
	@Transactional(readOnly = false)
	@ResponseBody
	public NewMessagesResponse getNewMessages(@RequestBody ConversationNewMessagesDto dto){
		boolean exists = true;
		
		ArrayList<MessageDto> mensajes = new ArrayList<MessageDto>();
		
		mensajes.add(new MessageDto(1L, "Darth Vader", "img/darth.JPG", new Date(), "Aca probando con algun mensajito, viste?", dto.getIdConversation()));
		mensajes.add(new MessageDto(2L, "Scooby Doo", "img/scooby.png", new Date(), "Pero vos sos loco, vi'te? Como va' a decir eso, vi'te?", dto.getIdConversation()));
		mensajes.add(new MessageDto(3L, "Batman", "img/batman.jpg", new Date(), "I'm... BATMAN", dto.getIdConversation()));
		
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
		System.out.println("Conversation:\t" + dto.getConversationId());
		System.out.println("\n\n\n");
		
		GenericResponse response = new GenericResponse();
		return response;
	}
	
	@RequestMapping(value = "/getopenconversations", method = RequestMethod.POST)
	@Transactional(readOnly = false)
	@ResponseBody
	public OpenConversationsResponse getOpenConversations(@RequestBody UserSessionDto dto){		
		ArrayList<CategoryTreeDto> categories = new ArrayList<CategoryTreeDto>();
		ArrayList<ConversationTreeDto> conver11 = new ArrayList<ConversationTreeDto>();
		Long hash1 = Long.parseLong("" + "Conversation 1".hashCode());
		conver11.add(new ConversationTreeDto(hash1, "Conversation 1"));		
		CategoryTreeDto cat1 = new CategoryTreeDto("Categoria1", conver11);
		
		Long hash2 = Long.parseLong("" + "Conversation 2".hashCode());
		ArrayList<ConversationTreeDto> conver12 = new ArrayList<ConversationTreeDto>();
		conver12.add(new ConversationTreeDto(hash2, "Conversation 2"));
		CategoryTreeDto cat2 = new CategoryTreeDto("Categoria2", conver12);
		
		categories.add(cat1);
		categories.add(cat2);
		OpenConversationsResponse response = new OpenConversationsResponse(true, categories);
		
		return response;
	}
	
	@RequestMapping(value = "/getstreams")
	@Transactional(readOnly = true)
	@ResponseBody
	public ListOfConversationsResponse getListOfStreams(String query){
		ArrayList<StreamDto> streams = new ArrayList<StreamDto>();
		if(query != null && !query.isEmpty()){
			Long hash = Long.parseLong("" + query.hashCode());
			
			StreamDto str1 = new StreamDto(hash+1L, query + "1", "Categoria1");
			StreamDto str2 = new StreamDto(hash+2L, query + "2", "Categoria2");
			StreamDto str3 = new StreamDto(hash+3L, query + "3", "Categoria3");
			StreamDto str4 = new StreamDto(hash+4L, query + "4", "Categoria4");
			streams.add(str1);
			streams.add(str2);
			streams.add(str3);
			streams.add(str4);
		}
		ListOfConversationsResponse response = new ListOfConversationsResponse(true, streams);
		
		return response;
	}
	
}
