# Meet_app 📲

# Description.
This app provides a list of upcoming events for any given city, with data provided by Google Calendar. The app works offline using cached data from the last time it was used online. <br> The user can search for events in a specific city or browse all events, customize how many events are shown on screen, click an event for more details, and see how many events are upcoming in certain cities.

# How to Use This App.
When first opening the app, you will be prompted to sign in with Google in order to gain access to the Google Calendar API. Then, you can specify what city and how many events to view, and click on an event to view more details!

# Dependencies

✨  HTML5 <br>
✨  CSS3 <br>
✨  JavaScript (ES6) <br>
✨  React <br>
✨  API <br>

This app used the Google Calendar API to fetch information about upcoming events by 📍 location.

# A Note On Privacy.
The Meetup app requires you to sign in with Google in order to access the data from its Google Calendar. This access goes both ways, as Meetup can also access the user's calendar, HOWEVER it DOES NOT and will never be given this functionality.
<br> Rest assured, the app does not attempt to do anything with the Google user's information in any way. 


#Feature

☁️ Scenario 1: <br>
- Collapsed by Default. <br>
- Given user is on the main page. <br>
- When nothing is selected. <br>
- Then the even details will be 'collapsed'. <br>

☁️ Scenario 2: <br>
- Expanding the details. <br>
- Given user wants to see more about an event. <br>
- When the user clicks clicks on that event. <br>
- Then the details for that event will expand.

☁️ Scenario 3: <br>
- Collapse the details. <br>
- Given user has seen the details and wants to collapse. <br>
- When the user clicks on the expanded details. <br>
- Then the details will collapse again. <br>

# Feature: Specify number of Events
As a user I should be able to choose the number of events I want to see.

☁️ Scenario 1: 
- When the user hasn’t specified a number, 32 is the default number. <br>
- Given: the user searched for event results for a city. 
- When: the user chooses no specific amount of search results. <br>
- Then: the default amount of search results per city will be 32. <br>

☁️ Scenario 2: 
- The user can change the number of events they want to see. <br>
- Given: the user opened the search results query. <br>
- When: the user changes the default number. <br> 
- Then: the default number of results will be changed to what the users select. <br>

# Feature: Use App even when offline
As a user I would like to be able to access events even when offline
 
☁️ Scenario 1: 
- Show cached data when there’s no internet connection. <br>
- Given: the app has no internet connection. <br>
- When: the data is cached. <br>
- Then: that data will be shown. <br>

☁️ Scenario 2: 
- Show error when user changes the settings (city, time range). <br>
- Given: the user opened the settings tab. <br>
- When: the user changes the settings. <br>
- Then: an error will show. <br>

# Feature: Data Visualization
As a user I would like to see charts with the number of upcoming events in my city

☁️ Scenario 1:
- Show a chart with the number of upcoming events in each city. <br>
- Given: the user selected a city. <br>
- When: the user clicks on the city’s upcoming events button. <br>
- Then: a chart will list the upcoming events taking place in the city. 

