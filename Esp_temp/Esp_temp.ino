#include <DHT.h>
#include<ESP8266WiFi.h>

#define DHTPIN D4
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
const char* ssid = "hamza123"; //Enter SSID
const char* password = "hammy12345"; //Enter Password

void setup(){

  Serial.begin(9600);
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) 
  {
     delay(500);
     Serial.print("*");
  }
  
  Serial.println("");
  Serial.println("WiFi connection Successful");
  Serial.print("The IP Address of ESP8266 Module is: ");
  Serial.print(WiFi.localIP());// Print the IP address
  dht.begin();
}


void loop(){
  delay(2000);

  float h = dht.readHumidity();
  float t = dht.readTemperature();

  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  Serial.print((String)"Temperature = " + t + " °C");
  Serial.println();
  Serial.print((String)"Humidity    = " + h + " %");
  Serial.println();
}
