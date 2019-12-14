package com.example.demo;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * @author Kozakaitakumi
 *
 */
@Controller
public class HelloController {

	/**
	 *
	 */
	@Value("${application.name}")
	private String appName;

	/**
	 * @param form
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/")
	public String hello(@ModelAttribute("form") Form form, Model model) {

		model.addAttribute("message", "Hello World");
		model.addAttribute("now", LocalDateTime.now());
		model.addAttribute("appName", appName);

		List<String> fruits = new ArrayList<String>();
		fruits.add("apple");
		fruits.add("banana");
		fruits.add("cherry");
		model.addAttribute("fruits", fruits);

		this.convertJsonFruitList(model, form);
		model.addAttribute("form", form);

		return "hello";
	}

	/**
	 * @param model
	 * @param form
	 */
	private void convertJsonFruitList(Model model, Form form) {

		Fruit apple = new Fruit("apple", false);
		Fruit banana = new Fruit("banana", true);
		Fruit grape = new Fruit("grape", true);

		ArrayList<Fruit> fruitList = new ArrayList<Fruit>();
		fruitList.add(apple);
		fruitList.add(banana);
		fruitList.add(grape);

		form.setFruitList(fruitList);

		try {
			ObjectMapper objectMapper = new ObjectMapper();
			model.addAttribute("fruitList", replaceSingleQuoteJson(objectMapper.writeValueAsString(fruitList)));

		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}

	}

	/**
	 * @param target
	 * @return
	 */
	private String replaceSingleQuoteJson(String target) {
		return target.replaceAll("'", "\\\\'").replaceAll("(?<!\\\\)\"", "'");
	}

}