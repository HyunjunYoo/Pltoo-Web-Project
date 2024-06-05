package com.pltoo.membership.controller;

import com.pltoo.membership.Service.GameService;
import com.pltoo.membership.Service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Slf4j
@Controller
@RequiredArgsConstructor
public class MyProfileController {
    private final MemberService memberService;
    private final GameService gameService;

    @PostMapping("profile/myPage")
    public String sendProfile(@RequestParam("memberEmail") String memberEmail,
                              @RequestParam("memberNum") Long memberNum,
                              Model model) {
        model.addAttribute("memberEmail", memberEmail);
        model.addAttribute("memberNum", memberNum);
        log.info("memberEmail: " + memberEmail);
        log.info("memberNum: " + memberNum);

        return "html/my_profile";
    }




}
