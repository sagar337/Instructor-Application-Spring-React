package com.fullstack.maven.crud.springbootfullstack;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CoursesHardcodedService {

	private static List<Course> courses = new ArrayList<>();
	private static long isCounter = 0;
	
	static {
		
		
		courses.add(new Course(++isCounter,"Application","Learn Full stack with Spring Boot and Angular"));
		courses.add(new Course(++isCounter,"Application","Learn Full stack with Spring Boot and React"));
		courses.add(new Course(++isCounter,"Application","Master Microservices with Spring Boot and Spring Cloud"));
		
	}
	
	public List<Course> findAll() {
		System.out.println("findAll called");
		return courses;
	}
	public Course save(Course course) {
		
		System.out.println("save called");
		
		if(course.getId() == -1 || course.getId() ==0) {
			course.setId(++isCounter);
			courses.add(course);
		}
		else {
			//deleteById(course.getId());
			courses.add(course);
		}
		return course;
	}
	
	public Course deleteById(long id) {
		Course course = findById(id);
		
		if(course ==null) {
			return null;
		}
		if(courses.remove(course)) {
			return course;
		}
		return null;
	}
	
	public Course findById(long id) {
		for(Course course:courses) {
			
			if(course.getId() == id) {
				return course;
			}
		}
		return null;
	}
}
