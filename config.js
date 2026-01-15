const disableSetup = false;
var topBarCenterText = `N0HOT - EN43es`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
//
//  LEFT SIDE
//  
  ["f3de21ff", "satellite.js"],
  ["2196F3", "TIME.IS", "https://time.is/", "1"],
  ["2196F3", "APRS", "iframe|https://aprs.fi/#!lat=43.7947&lng=-91.5582", "1"],
  ["2196F3", "AQI", "https://gispub.epa.gov/airnow/?contours=ozonepm&monitors=ozonepm&basemap=imagery&xmin=-19369175.65103267&xmax=-1758084.3341327459&ymin=545027.7336073034&ymax=8636345.79976077&tab=loops&showgreencontours=false", "1", "R"],
  ["2196F3", "Bands", "https://www.arrl.org/files/file/Regulatory/Band%20Chart/Hambands4_Color_11x8_5.pdf", "1"]
  ["2196F3", "Club Log", "https://clublog.org/livestream/N0HOT", "1.3"],
  ["2196F3", "CONTEST", "https://www.contestcalendar.com/fivewkcal.html", "1"],
  ["2196F3", "Int Cluster", "https://holycluster.iarc.org/", "1"],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  ["2196F3", "POTA", "https://pota.app/embed", "1"],
//
//  RIGHT SIDE
//  
  ["2196F3", "ADSB", "https://globe.adsbexchange.com", "1", "R"],
  ["2196F3", "Deep Space", "https://eyes.nasa.gov/apps/dsn-now/dsn.html", "1", "R"],
  ["2196F3", "LIGHTNING", "https://map.blitzortung.org/#10.91/43.7763/-91.5206", "1", "R"],
  ["2196F3", "Ham Sonde", "https://amateur.sondehub.org/#!mt=Mapnik&mz=5&qm=12h&mc=43.77017,-91.58347", "1", "R"],
  ["2196F3", "MUF", "https://muf.hb9vqq.ch/", "1", "R"],
  ["2196F3", "Aurora Map", "https://www.northernlightsmap.com/#map-section", "1", "R"],
  ["2196F3", "WEATHER", "https://www.ventusky.com/#p=43.55;-91.71;7", "1", "R"],
  ["2196F3", "WINDS", "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-99.98,41.55,922/loc=-91.869,43.672", "1", "R"],
];
// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  ["USA RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  ["LOCAL RADAR", "https://radar.weather.gov/ridge/standard/KARX_loop.gif"],
  ["NOAA D-RAP", "https://services.swpc.noaa.gov/images/animations/d-rap/global/latest.png"],
  ["ISS POSITION", "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544"],
  ["CAN", "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/can/EXTENT3/GOES16-CAN-EXTENT3-1125x560.gif"],
  ["UMV", "https://cdn.star.nesdis.noaa.gov/GOES19/GLM/SECTOR/umv/EXTENT3/GOES19-UMV-EXTENT3-600x600.gif"],
  ["MUF", "iframe|https://muf.hb9vqq.ch/"],
  ["Electrons", "iframe|https://tec.hb9vqq.ch"],
  ["LIGHTNING", "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa"],
  ["Weather Local", "https://zoom.earth/maps/satellite-hd/#view=43.77,-91.584,6z/date=2026-01-11,pm"],
  ["", "https://services.swpc.noaa.gov/experimental/images/aurora_dashboard/tonights_static_viewline_forecast.png"],
  ["HAM Bands", "https://www.arrl.org/images/view//Charts/Band_Chart_Image_for_ARRL_Web.jpg"],
];
// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,11000,10100,
  10200,10500,10300,10600,
  30400,60700,60900,10800
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  ["https://www.amsat.org/feed/", 60],           // Example RSS feed, refresh every 60 minutes
  ["https://daily.hamweekly.com/atom.xml", 120], // Example Atom feed, refresh every 120 minutes
  ];
