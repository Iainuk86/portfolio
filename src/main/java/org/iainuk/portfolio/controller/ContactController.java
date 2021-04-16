package org.iainuk.portfolio.controller;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import org.iainuk.portfolio.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.mail.MessagingException;
import java.io.IOException;

@Controller
@EnableAsync
public class ContactController {

    @Autowired
    private SendGrid sendGrid;

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
        Email from = new Email("iaindev86@gmail.com");
        String subject = contact.getSubject();
        Email to = new Email("iaindev86@gmail.com");
        Content content = new Content("text/plain", "Your portfolio has a message from: " + contact.getName() + ".\nMessage: " + contact.getMessage());
        Mail mail = new Mail(from, subject, to, content);

        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sendGrid.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        return "home";
    }
}
