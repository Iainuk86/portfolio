package org.iainuk.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

@Controller
public class CVController {

    @RequestMapping(value = "/downloadcv", method = RequestMethod.GET)
    public StreamingResponseBody getSteamingFile(HttpServletResponse response) throws IOException {

        response.setContentType("text/html;charset=UTF-8");
        response.setHeader("Content-Disposition", "attachment; filename=\"iain-mcintosh-cv.pdf\"");
        InputStream inputStream = new FileInputStream(new File("C:\\Users\\iainu\\IdeaProjects\\Portfolio\\src\\main\\resources\\iain-mcintosh-cv.pdf"));

        return outputStream -> {
            int nRead;
            byte[] data = new byte[1024];
            while ((nRead = inputStream.read(data, 0, data.length)) != -1) {
                outputStream.write(data, 0, nRead);
            }
            inputStream.close();
        };
    }
}
