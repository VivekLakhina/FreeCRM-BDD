package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BaseClass {

	public static Properties prop;
	public static WebDriver driver;
	public static JavascriptExecutor js;

	public BaseClass() {

		try {
			prop = new Properties();
			FileInputStream fis = new FileInputStream(
					"C:\\Users\\viveku\\eclipse-workspace\\FreeCRM-BDD\\src\\main\\java\\config\\testConfig.properties");
			prop.load(fis);
			
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}

	public void initialization(String browser) {
		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", prop.getProperty("chromeDriverPath"));
			driver = new ChromeDriver();
		}
		if (browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", prop.getProperty("ffDriverPath"));
			driver = new FirefoxDriver();
		}
		driver.manage().window().maximize();
		//driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.get(prop.getProperty("appUrl"));
		js = (JavascriptExecutor) driver;
	}
}
