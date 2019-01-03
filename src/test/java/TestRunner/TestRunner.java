package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\viveku\\eclipse-workspace\\FreeCRM-BDD\\src\\main\\java\\Features\\CreateContact.feature", 
		glue = {"StepDefinition" },
		plugin= {"pretty","html:test_output"},
		monochrome=true,
		dryRun=false
		//strict=true
		)
public class TestRunner {

}
