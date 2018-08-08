$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstTest.feature");
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Title of the facebook webpage",
  "description": "",
  "id": "cucumberjava;title-of-the-facebook-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "validate title of facebook webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_have_open_the_browser()"
});
formatter.result({
  "duration": 6134760386,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_open_Facebook_website()"
});
formatter.result({
  "duration": 3730418900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.validate_title_of_facebook_webpage()"
});
formatter.result({
  "duration": 16395640,
  "error_message": "org.junit.ComparisonFailure: Facebook title is correct expected:\u003c...k – log in or sign u[p]\u003e but was:\u003c...k – log in or sign u[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat com.aqua.steps.StepDefinition.validate_title_of_facebook_webpage(StepDefinition.java:51)\n\tat ✽.Then validate title of facebook webpage(FirstTest.feature:9)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Title of the Amazon webpage",
  "description": "",
  "id": "cucumberjava;title-of-the-amazon-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I open Amazon website",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "validate title of Amazon webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_have_open_the_browser()"
});
formatter.result({
  "duration": 8578775864,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_open_Amazon_website()"
});
formatter.result({
  "duration": 9902365833,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.validate_title_of_Amazon_webpage()"
});
formatter.result({
  "duration": 16851806,
  "error_message": "org.junit.ComparisonFailure: Amazon title is correct expected:\u003c...s, Books, DVDs \u0026 mor[e]\u003e but was:\u003c...s, Books, DVDs \u0026 mor[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat com.aqua.steps.StepDefinition.validate_title_of_Amazon_webpage(StepDefinition.java:58)\n\tat ✽.Then validate title of Amazon webpage(FirstTest.feature:17)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "Title of the eBay webpage",
  "description": "",
  "id": "cucumberjava;title-of-the-ebay-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I open eBay website",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "validate title of eBay webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_have_open_the_browser()"
});
formatter.result({
  "duration": 7509091203,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_open_eBay_website()"
});
formatter.result({
  "duration": 3472960420,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.validate_title_of_eBay_webpage()"
});
formatter.result({
  "duration": 8730203,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Title of the Google webpage",
  "description": "",
  "id": "cucumberjava;title-of-the-google-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I open Google website",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "validate title of Google webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_have_open_the_browser()"
});
formatter.result({
  "duration": 11917297850,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_open_Google_website()"
});
formatter.result({
  "duration": 4742599697,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.validate_title_of_Google_webpage()"
});
formatter.result({
  "duration": 17797960,
  "status": "passed"
});
});
