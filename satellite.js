// CUT START
// const disableSetup = true;
var topBarCenterText = "Satellite Dashboard";

// Grid layout desired
var layout_cols = 2;
var layout_rows = 2;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["f3de21ff", "config.js"],
  ["2196F3", "LIGHTNING", "https://map.blitzortung.org/#3.87/36.5/-89.41", "1", "R"],
  ["2196F3", "RADAR", "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON", "1", "R"],
  ["2196F3", "WEATHER", "https://radar.weather.gov/?settings=v1_eyJhZ2VuZGEiOnsiaWQiOiJuYXRpb25hbCIsImNlbnRlciI6Wy05MS4xOTIsNDMuODIzXSwibG9jYXRpb24iOm51bGwsInpvb20iOjcsImxheWVyIjoiYnJlZl9xY2QifSwiYW5pbWF0aW5nIjpmYWxzZSwiYmFzZSI6InN0YW5kYXJkIiwiYXJ0Y2MiOmZhbHNlLCJjb3VudHkiOmZhbHNlLCJjd2EiOmZhbHNlLCJyZmMiOmZhbHNlLCJzdGF0ZSI6dHJ1ZSwibWVudSI6dHJ1ZSwic2hvcnRGdXNlZE9ubHkiOnRydWUsIm9wYWNpdHkiOnsiYWxlcnRzIjowLjgsImxvY2FsIjowLjYsImxvY2FsU3RhdGlvbnMiOjAuOCwibmF0aW9uYWwiOjAuNn19#/", "1", "R"],
  ["2196F3", "WINDS", "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-91.51,43.63,3484/loc=-91.762,43.058", "1", "R"],
  ["2196F3", "WINDY", "https://embed.windy.com/embed2.html?lat=44.01&lon=-79.45&width=900&detailLat=44.01&detailLon=-79.45&height=600&zoom=8&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1", "1", "R"],
];
  
// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var currentDate = new Date();
var aIMG = [
  ["Radar NA", "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  ["Radar Local", "https://radar.weather.gov/ridge/standard/KARX_loop.gif"],
  ["Satellite NA", "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/can/GEOCOLOR/GOES16-CAN-GEOCOLOR-1125x560.gif"],
  ["Satellite Local", "https://cdn.star.nesdis.noaa.gov/GOES19/GLM/SECTOR/umv/EXTENT3/GOES19-UMV-EXTENT3-600x600.gif"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  60100, 60200, 300300, 60400,
];

var aRSS = [
  ["https://weather.gc.ca/rss/battleboard/onrm28_e.xml", 60],
];

// CUT END
