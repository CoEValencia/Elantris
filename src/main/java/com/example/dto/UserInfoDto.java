package com.example.dto;

public class UserInfoDto {
	private String profilePic; // 'img/scooby.png',
    private boolean logged = true;
    private String user; // 'Scooby Doo'
    
    public UserInfoDto(String user, String profilePic){
    	this.profilePic = profilePic;
    	this.user = user;
    }

	public String getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}

	public boolean isLogged() {
		return logged;
	}

	public void setLogged(boolean logged) {
		this.logged = logged;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
    
    
}
