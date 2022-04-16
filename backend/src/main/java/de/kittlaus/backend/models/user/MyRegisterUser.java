package de.kittlaus.backend.models.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class MyRegisterUser {


    private String username;
    private String password;
    private String passwordAgain;

}
