import {sort, search, newsList } from "./main.js";

//Example testing for search function
//test("Search function testing", () => {
  //expect(search(newsList)).toBe("I am a cool web developer");
//});

//test 1.
test("checks if search function is working", () => {
  expect(search(newsList)).toContain("What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",);
});

//test 2.
test("Search function keyword 'decoder' as input", () => {
  const input = "decoder";
  const result = search(input);
  expect(result).toBe[newsList[2], newsList[5]];
});

//test 3.
test("Search function keyword 'what' as input", () => {
  const input = "what";
  const result = search(input);
  expect(result).toHaveLength[newsList[0], newsList[6]];
});

//test 4.
test("Search exact keyword", () =>{
  const keyword = "Euphoria ";
  const result = search(keyword);
  expect(result).toEqual[newsList[4]];
});

//test 5.
test("Ascending function test", () => {
  const type = "ascending";
  const result = sort(type);
  expect(result).toContain("'Nightmare' TV show 'Euphoria — health threat or high art?",
  'Buried underpants and tea bags help scientists evaluate soil',
  'Decoder: Armenia in a bind as Ukraine war resets global order',
  'Decoder: Mining asteroids for minerals can help spare Earth',
  'Marie Colvin shined a light on war-torn corners of the world',
  'Media glare can enrich tennis pros yet imperil mental health',
  'What books should an aspiring journalist read?',
  'What films should an aspiring journalist watch?',);
});

//test 6.
test("Descending function test", () => {
  const type = "descending";
  const result = sort(type);
  expect(result).toContain('What films should an aspiring journalist watch?',
  'What books should an aspiring journalist read?',
  'Media glare can enrich tennis pros yet imperil mental health',
  'Marie Colvin shined a light on war-torn corners of the world',
  'Decoder: Mining asteroids for minerals can help spare Earth',
  'Decoder: Armenia in a bind as Ukraine war resets global order',
  'Buried underpants and tea bags help scientists evaluate soil',
  "'Nightmare' TV show 'Euphoria — health threat or high art?",);
});
