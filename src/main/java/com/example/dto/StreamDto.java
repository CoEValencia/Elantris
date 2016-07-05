package com.example.dto;

public class StreamDto {
	private Long id;
	private String stream;
	private String category;
	
	public StreamDto(Long id, String stream, String category){
		this.id = id;
		this.stream = stream;
		this.category = category;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStream() {
		return stream;
	}

	public void setStream(String stream) {
		this.stream = stream;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
	
}
