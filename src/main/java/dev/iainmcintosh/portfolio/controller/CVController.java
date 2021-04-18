package dev.iainmcintosh.portfolio.controller;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.*;

@Controller
public class CVController {

    @RequestMapping(value="/viewcv")
    public ResponseEntity<InputStreamResource> viewCV() throws FileNotFoundException {

        String fileName = "iain-mcintosh-cv.pdf";
        File file = new File(fileName);
        HttpHeaders headers = new HttpHeaders();
        headers.add("content-disposition", "inline;filename=" + fileName);

        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/pdf"))
                .body(resource);
    }

    @RequestMapping(value="/downloadcv", method=RequestMethod.GET)
    public StreamingResponseBody downloadCV(HttpServletResponse response) throws IOException {

        response.setContentType("text/html;charset=UTF-8");
        response.setHeader("Content-Disposition", "attachment; filename=\"iain-mcintosh-cv.pdf\"");
        InputStream inputStream = new FileInputStream(new File("iain-mcintosh-cv.pdf"));

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
