import json
import firebase_admin
from firebase_admin import credentials, firestore
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize Firebase
cred = credentials.Certificate('./myntra-927b2-firebase-adminsdk-pkmcv-366e7853c8.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

# Set up Selenium
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# Function to scrape Pinterest for a celebrity
def scrape_pinterest(celebrity_name):
    search_query = f"{celebrity_name} latest fashion"
    url = f"https://www.pinterest.com/search/pins/?q={search_query}"
    driver.get(url)
    
    # Wait until the pins are loaded
    try:
        pins = WebDriverWait(driver, 10).until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, 'div[data-test-id="pin"]'))
        )
    except Exception as e:
        print(f"An error occurred: {e}")
        driver.quit()
        return []
    
    pin_urls = []

    for pin in pins[:7]:  # Get the latest 7 pins
        try:
            pin_url = pin.find_element(By.TAG_NAME, 'a').get_attribute('href')
            pin_urls.append(pin_url)
        except Exception as e:
            print(f"An error occurred while processing a pin: {e}")
    
    return pin_urls

# Save to Firebase
def save_to_firebase(celebrity_name, pin_urls):
    doc_ref = db.collection('celebrities').document(celebrity_name)
    doc_ref.set({'images': pin_urls})

# Example usage
celebrity = "Alia Bhatt"
latest_pins = scrape_pinterest(celebrity)
save_to_firebase(celebrity, latest_pins)

driver.quit()