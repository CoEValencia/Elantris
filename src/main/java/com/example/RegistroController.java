package com.example;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.UserInfoDto;
import com.example.dto.UserLoginDto;
import com.example.dto.UserSessionDto;
import com.example.response.LoginResponse;

@RestController
public class RegistroController {
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@Transactional(readOnly = false)
	@ResponseBody
	public LoginResponse buscarAlgo(@RequestBody UserLoginDto dto){
		boolean exists = true;
		
		LoginResponse response = new LoginResponse(exists, dto.getName());				
		
		return response;
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	@Transactional(readOnly = false)
	@ResponseBody
	public LoginResponse buscarAlgoGet(@RequestBody UserLoginDto dto){
		boolean exists = true;
		
		LoginResponse response = new LoginResponse(exists, dto.getName());				
		
		return response;
	}
	
	@RequestMapping(value = "/getsession")//, method = RequestMethod.POST)
	@Transactional(readOnly = false)
	@ResponseBody //@RequestParam("session") 
	public UserInfoDto enterElantris(String session){
		String profilePic = ""; 
		String user = ""; 
		switch(session){
			case "nerea":
				user = "Lola";
				profilePic = "img/lola.jpg";
				break;
			case "juan":
				user = "Darth Vader";
				profilePic = "img/darth.JPG";
				break;
			case "pablo":
				user = "Batman";
				profilePic = "img/batman.jpg";
				break;
			case "nico":
				user = "Scooby Doo";
				profilePic = "img/scooby.png";
				break;
		}
								
		UserInfoDto response = new UserInfoDto(user, profilePic);
		return response;
	}	
}
