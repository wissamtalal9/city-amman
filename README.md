# Project Name : City Explorer

**Author**: Wissam AbuAresh
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->
I'm using the site : https://locationiq.com/docs
and download library in react js using ubuntu
1. Bootstrap 
2. axios
3. use the Thunder Client To get API by using vs.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
He must type the city amman and he will git address depend what 
I want to search it and click Explorer to see the city

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
The technologies i use it it's 
1. the website https://locationiq.com/docs to get the location
2. the ubuntu to get library :
 . react JS
 . bootstrap
 . axios 

3. vs code to debug the code and use  technologies
. Thunder Client : to get the key and the name of city to git information of the city like :

"place_id": "322997238730",
    "osm_id": "1643504896",
    "osm_type": "node",
    "licence": "https://locationiq.com/attribution",
    "lat": "31.9515694",
    "lon": "35.9239625",
    "boundingbox": [
      "31.7915694",
      "32.1115694",
      "35.7639625",
      "36.0839625"
## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->
in console log I see :
[HMR] Waiting for update signal from WDS...
when I search the city and console log of the key :

{place_id: '14963669', licence: 'https://locationiq.com/attribution', osm_type: 'node', osm_id: '1643504896', boundingbox: Array(4), …}
boundingbox: (4) ['31.7915694', '32.1115694', '35.7639625', '36.0839625']
class: "place"
display_name: "Amman, 2062, Jordan"
icon: "https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png"
importance: 0.7100357861995525
lat: "31.9515694"
licence: "https://locationiq.com/attribution"
lon: "35.9239625"
osm_id: "1643504896"
osm_type: "node"
place_id: "14963669"
type: "city"
[[Prototype]]: Object

So it's working well


## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
.The Location : https://locationiq.com/docs
.the vs code install and get tools the Thunder Client and get started to get the key for each city
. and using ubuntu to install 
-React JS
-inside the React JS install(Bootstrap, axios)
- use the Github to push the code to the repository.


Time Estimates
For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Name of feature: City Explorer

Estimate of time needed to complete: 3 Hourse

Start time: 7 pm

Finish time: 11 pm

Actual time needed to complete: 2 Hourse