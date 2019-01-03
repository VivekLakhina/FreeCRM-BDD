$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/viveku/eclipse-workspace/FreeCRM-BDD/src/main/java/Features/CreateContact.feature");
formatter.feature({
  "line": 1,
  "name": "Create new contacts",
  "description": "",
  "id": "create-new-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create a new contact",
  "description": "",
  "id": "create-new-contacts;create-a-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user moves to CreateContact screen",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cfirstName\u003e\", \"\u003clastName\u003e\" and \"\u003cPhNo\u003e\" and clicks on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Contact is created.",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "create-new-contacts;create-a-new-contact;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "PhNo"
      ],
      "line": 10,
      "id": "create-new-contacts;create-a-new-contact;;1"
    },
    {
      "cells": [
        "vivek",
        "kumar",
        "1234567890"
      ],
      "line": 11,
      "id": "create-new-contacts;create-a-new-contact;;2"
    },
    {
      "cells": [
        "akash",
        "singh",
        "2345678901"
      ],
      "line": 12,
      "id": "create-new-contacts;create-a-new-contact;;3"
    },
    {
      "cells": [
        "kiran",
        "raju",
        "12344556567"
      ],
      "line": 13,
      "id": "create-new-contacts;create-a-new-contact;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25804401533,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Create a new contact",
  "description": "",
  "id": "create-new-contacts;create-a-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user moves to CreateContact screen",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters \"vivek\", \"kumar\" and \"1234567890\" and clicks on submit button",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Contact is created.",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContactTest.user_is_on_HomePage()"
});
formatter.result({
  "duration": 225977094,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactTest.user_moves_to_CreateContact_screen()"
});
formatter.result({
  "duration": 2899006623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vivek",
      "offset": 13
    },
    {
      "val": "kumar",
      "offset": 22
    },
    {
      "val": "1234567890",
      "offset": 34
    }
  ],
  "location": "CreateContactTest.user_enters_and_and_clicks_on_submit_button(String,String,String)"
});
formatter.result({
  "duration": 25227638071,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactTest.contact_is_created()"
});
formatter.result({
  "duration": 71395965,
  "status": "passed"
});
formatter.after({
  "duration": 1205588496,
  "status": "passed"
});
formatter.before({
  "duration": 39740092002,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create a new contact",
  "description": "",
  "id": "create-new-contacts;create-a-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user moves to CreateContact screen",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters \"akash\", \"singh\" and \"2345678901\" and clicks on submit button",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Contact is created.",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContactTest.user_is_on_HomePage()"
});
formatter.result({
  "duration": 84875215,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactTest.user_moves_to_CreateContact_screen()"
});
formatter.result({
  "duration": 2228925244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "akash",
      "offset": 13
    },
    {
      "val": "singh",
      "offset": 22
    },
    {
      "val": "2345678901",
      "offset": 34
    }
  ],
  "location": "CreateContactTest.user_enters_and_and_clicks_on_submit_button(String,String,String)"
});
formatter.result({
  "duration": 2869442815,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactTest.contact_is_created()"
});
formatter.result({
  "duration": 60952084,
  "status": "passed"
});
formatter.after({
  "duration": 1247817489,
  "status": "passed"
});
formatter.before({
  "duration": 40841458805,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create a new contact",
  "description": "",
  "id": "create-new-contacts;create-a-new-contact;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user moves to CreateContact screen",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters \"kiran\", \"raju\" and \"12344556567\" and clicks on submit button",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Contact is created.",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContactTest.user_is_on_HomePage()"
});
formatter.result({
  "duration": 88710301,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactTest.user_moves_to_CreateContact_screen()"
});
formatter.result({
  "duration": 3898823119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran",
      "offset": 13
    },
    {
      "val": "raju",
      "offset": 22
    },
    {
      "val": "12344556567",
      "offset": 33
    }
  ],
  "location": "CreateContactTest.user_enters_and_and_clicks_on_submit_button(String,String,String)"
});
formatter.result({
  "duration": 496672949,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Please enter a first name\n}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VIVEKU01\u0027, ip: \u002710.196.60.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\viveku\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:63751}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: f68d2ffd507fdafab6c0171f4f879857\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:922)\r\n\tat pages.CreateNewContact.createNewContact(CreateNewContact.java:42)\r\n\tat StepDefinition.CreateContactTest.user_enters_and_and_clicks_on_submit_button(CreateContactTest.java:44)\r\n\tat ✽.When user enters \"kiran\", \"raju\" and \"12344556567\" and clicks on submit button(C:/Users/viveku/eclipse-workspace/FreeCRM-BDD/src/main/java/Features/CreateContact.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateContactTest.contact_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1268397899,
  "status": "passed"
});
});