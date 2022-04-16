package de.kittlaus.backend;

import de.kittlaus.backend.models.user.MyRegisterUser;
import de.kittlaus.backend.models.user.MyUser;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class IntegrationTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    //TestObjekte


    @Test
    @Order(1)
    void shouldRegisterNewUser(){
        //GIVEN
        MyRegisterUser testUser = MyRegisterUser.builder().username("Peter").password("12345678").passwordAgain("12345678").build();
        //WHEN
        ResponseEntity<MyUser> actualEnt = testRestTemplate.exchange("/api/user", HttpMethod.POST, new HttpEntity<>(testUser), MyUser.class);
        //THEN
        assert(actualEnt.getStatusCode()).is2xxSuccessful();
        MyUser actual = actualEnt.getBody();
        assert(actual.getUsername()).equals(testUser.getUsername());
    }

    @Test
    @Order(2)
    void shouldDenyNonMatchingPasswordOnRegister(){
        //GIVEN
        MyRegisterUser testUser = MyRegisterUser.builder().username("Peter1").password("12345678").passwordAgain("1234567").build();
        //WHEN
        ResponseEntity<MyUser> actualEnt = testRestTemplate.exchange("/api/user", HttpMethod.POST, new HttpEntity<>(testUser), MyUser.class);
        //THEN
        assert(actualEnt.getStatusCode()).is4xxClientError();
    }

    @Test
    @Order(3)
    void shouldDenyExistingUsernameOnRegister(){
        //GIVEN
        MyRegisterUser testUser = MyRegisterUser.builder().username("Peter").password("12345678").passwordAgain("12345678").build();
        //WHEN
        ResponseEntity<MyUser> actualEnt = testRestTemplate.exchange("/api/user", HttpMethod.POST, new HttpEntity<>(testUser), MyUser.class);
        //THEN
        assert(actualEnt.getStatusCode()).is4xxClientError();
    }



    //Hilfmethoden
    private HttpHeaders createHeaders(String token){
        String authHeader = "Bearer " + token;
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", authHeader);

        return headers;
    }

}