package dev.iainmcintosh.portfolio.entities;

import lombok.Data;

@Data
public class Contact {

    private String name;
    private String email;
    private String subject;
    private String message;

}
