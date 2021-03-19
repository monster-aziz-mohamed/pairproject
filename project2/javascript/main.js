const playlist = [
  { name: "Devil eyes", src: "./html/song1.html", class: "1" },
  { name: "50 cent candyshop", src: "./html/song2.html", class: "2" },
  { name: "sickick", src: "./html/song3.html", class: "3" },
  { name: "snoopdog", src: "./html/song4.html", class: "4" },
  { name: "bebe cocaina", src: "./html/song5.html", class: "5" },
  { name: "baya tabac roule", src: "./html/song6.html", class: "6" },
  { name: "glimmer", src: "./html/song7.html", class: "7" },
  { name: "take me to church", src: "./html/song8.html", class: "8" },
];
console.log(playlist);
$(".listen").click(function () {
  var src = "";
  var value = $(this).text();
  console.log(value);
  for (var i = 0; i < playlist.length; i++) {
    if (playlist[i].class === value[0]) {
      src = playlist[i].src;
    }
    location.replace(src);
  }
});

$(".effect1").click(function () {

  location.replace('../home.html');
})
