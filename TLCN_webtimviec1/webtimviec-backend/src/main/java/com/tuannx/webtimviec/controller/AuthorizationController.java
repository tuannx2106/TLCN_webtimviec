package com.tuannx.webtimviec.controller;

import com.tuannx.webtimviec.model.Users;
import com.tuannx.webtimviec.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="//api/users")
public class AuthorizationController {

    @Autowired
    UsersService usersService;

    //show List
    @RequestMapping(value = "/list",
            method = RequestMethod.GET,
            produces = { MediaType.APPLICATION_JSON_VALUE })
    @ResponseBody
    public List<Users> getUsersList() {
        List<Users> list = usersService.findAll();
        return list;
    }

    //Find particular
    @RequestMapping(value = "/{usersId}", //
            method = RequestMethod.GET, //
            produces = { MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public Optional<Users> getUsers(@PathVariable("usersId") String usersId) {
        return usersService.getUsers(Integer.valueOf(usersId));
    }

    //login
    @RequestMapping(value = "/login", //
            method = RequestMethod.POST, //
            produces = { MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public Users VerifyUsers(@RequestBody Users users) {
        Optional<Users> usersLogin = usersService.loginUser(users.getEmail(),users.getPassword());
        if (usersLogin.isPresent()) {
            return usersLogin.get();
        }
        return null;
    }

    //check email

}