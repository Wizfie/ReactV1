package project.restfull.Restfull.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.restfull.Restfull.entity.User;
import project.restfull.Restfull.model.LoginUserRequest;
import project.restfull.Restfull.model.TokenResponse;
import project.restfull.Restfull.model.WebResponse;
import project.restfull.Restfull.service.AuthService;
import project.restfull.Restfull.service.UserService;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@CrossOrigin(origins="http://localhost:5173")

public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    UserService userService;

    @PostMapping(path = "/api/auth/login", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public WebResponse<TokenResponse> login(@RequestBody LoginUserRequest request) {
        TokenResponse tokenResponse = authService.login(request);
        return WebResponse.<TokenResponse>builder().data(tokenResponse).build();

    }

    @DeleteMapping(path = "/api/auth/logout", produces = APPLICATION_JSON_VALUE

    )
    public WebResponse<String> logout(User user) {
        authService.logout(user);
        return WebResponse.<String>builder().data("OK").build();
    }

}
