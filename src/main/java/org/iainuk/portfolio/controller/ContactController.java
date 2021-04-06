package org.iainuk.portfolio.controller;

import org.iainuk.portfolio.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Date;

@Controller
@EnableAsync
public class ContactController {

    @Autowired
    private JavaMailSender javaMailSender;

    @GetMapping("/")
    public String redirect()
    {
        return "redirect:/home";
    }

    @GetMapping("/home")
    public String showContactForm(Model model)
    {
        model.addAttribute("contact", new Contact());
        return "home";
    }

    @Async
    @PostMapping("/home")
    public String sendForm(@ModelAttribute("contact") Contact contact) throws MessagingException
    {
        String content = "Your Portfolio has a new message from: " + contact.getName();
        content += "<br><br>Email address: " + contact.getEmail();
        content += "<br><br>Message:<br>" + contact.getMessage();

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

        mimeMessageHelper.setTo("iaindev86@gmail.com");
        mimeMessageHelper.setSubject(contact.getSubject());
        mimeMessageHelper.setText(content, true);
        mimeMessageHelper.setSentDate(new Date());
        javaMailSender.send(mimeMessage);

        return "home";
    }
}
