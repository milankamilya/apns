# Apple Push Notification Service ( APNS )
How to send push notification in iPhone, iPad ( iOS devices ) from APNS using App Key

# Prerequisites
Hey Devs, hope you know about Push Notifications (PN) already. If you like to know please use this link [how to setup push notification in your Apple Developer](https://developer.apple.com/documentation/usernotifications) and [how to incorporate it in your iOS Xcode project](https://developer.apple.com/documentation/usernotifications/registering_your_app_with_apns).

To send PN to iOS devices, we need a Certificate ( p12 ) or App Key ( p8 ). Using certificate comes liability of yearly maintenance. You need to update certificate each year as it expires. Using App Key is latest Procedure. [How to generate App Key](https://help.apple.com/developer-account/#/devcdfbb56a3).

*WARNING*: Hope you saved App Key in a secure place because the key is not saved in your developer account and you won’t be able to download it again. If the Download button is disabled, you previously downloaded the key.

We will use nodejs as server. So, please check whether you have nodejs installed on your pc. [To install nodejs follow this.](https://nodejs.org/en/download/)


# How Install
Now, we are ready to go. Download the project and run 'npm install' in terminal from project directory. Open the entire project in a Text Editor (i.e. VSCode, Sublime etc). 

Place auth key in keys folder (i.e. AuthKey_XXXXXXXXXX.p8). Now, open you apns.js file. You need to change following. 
- Name of the AuthKey (i.e. './keys/AuthKey_XXXXXXXXXX.p8' 
- KeyID (i.e. 10 alphanumeric characters followed by 'AuthKey_' )
- TeamID (i.e. 10 alphanumeric characters. you can find it in Xcode as well as in Apple Developer Account )

The setup is completed now.

To run the server, run 'npm start' in terminal from the project directory.

# How to Send First Test Push Notification
We are using Postman for POST http call. 
```
URL     : 'http://127.0.0.1:3000/apn'
Headers : Content-Type = application/json
Body    : {
	"deviceToken": "< collect & put push notification device token from real iOS one >"
}
```
Now, click on send. 

CHEERS!!!, you got the first push notification.

If you face any issue, please create a issue in github. I will help you out

# Troubleshooting APNS
Please check following link to troubleshoot various cases.
- Remote notification delegates aren't getting called 
- Various Cases where you will not get push notifictions
[You will get the answers here](https://developer.apple.com/library/archive/technotes/tn2265/_index.html)

# Author
Milan Kamilya, [twitter](https://twitter.com/Milan_Kamilya), [LinedIn](https://www.linkedin.com/in/milan-kamilya-6427a82a)
