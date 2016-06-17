package com.example;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.UserLoginDto;
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
	
	@RequestMapping(value = "/getsession", method = RequestMethod.POST)
	@Transactional(readOnly = false)
	@ResponseBody
	public String enterElantris(@RequestParam("session") String session){
		return "user";
	}
}
