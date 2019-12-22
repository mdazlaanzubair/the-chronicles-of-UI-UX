$(document).ready(function() {
  var t = {
    entries: [
      {
        image: "img/tech/html.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "HTML"
      },
      {
        image: "img/tech/css.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "CSS"
      },
      {
        image: "img/tech/boot.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Bootstrap"
      },
      {
        image: "img/tech/bul.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Bulma"
      },
      {
        image: "img/tech/found.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Foundation"
      },
      {
        image: "img/tech/bue.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Buefy"
      },
      {
        image: "img/tech/vue.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Vue JS"
      },
      {
        image: "img/tech/pars.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Parsley JS"
      },
      {
        image: "img/tech/j.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "jQuery"
      },
      {
        image: "img/tech/js.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Javascript"
      },
      {
        image: "img/tech/plug.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Javascript Plugins"
      },
      {
        image: "img/tech/api.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Google APIs"
      },
      {
        image: "img/tech/php.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "PHP"
      },
      {
        image: "img/tech/laravel.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Laravel"
      },
      {
        image: "img/tech/word.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Wordpress"
      },
      {
        image: "img/tech/AM.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Adobe MUSE"
      },
      {
        image: "img/tech/gravit.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Graviat Designer"
      },
      {
        image: "img/tech/c.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "C"
      },
      {
        image: "img/tech/c+.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "C++"
      },
      {
        image: "img/tech/pyth.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Python"
      },
      {
        image: "img/tech/sass.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "SASS"
      },
      {
        image: "img/tech/xml.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "XML"
      },
      {
        image: "img/tech/sub.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Sublime"
      },
      {
        image: "img/tech/vs.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "VS Code"
      },
      {
        image: "img/tech/jsf.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "JS Fiddle"
      },
      {
        image: "img/tech/cp.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Code Pen"
      },
      {
        image: "img/tech/stack.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Stack Overflow"
      },
      {
        image: "img/tech/gd.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Google Drive"
      },
      {
        image: "img/tech/dream.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Dreamweaver"
      },
      {
        image: "img/tech/ms.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "mySQL"
      },
      {
        image: "img/tech/drop.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Dropbox"
      },
      {
        image: "img/tech/git.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Git"
      },
      {
        image: "img/tech/gith.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Github"
      },
      {
        image: "img/tech/xd.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Adobe XD"
      },
      {
        image: "img/tech/gcode.png",
        width: "50",
        height: "50",
        url: "#1",
        target: "_self",
        tooltip: "Google Code"
      }
    ],
    radius: "65%",
    radiusMin: 65,
    bgDraw: !0,
    bgColor: "#11111100",
    opacityOver: 1,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 8e3,
    speed: 1,
    fontFamily: "Oswald, Arial, sans-serif",
    fontSize: "15",
    fontColor: "#fff",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    fontToUpperCase: !0,
    tooltipFontFamily: "Oswald, Arial, sans-serif",
    tooltipFontSize: "11",
    tooltipFontColor: "#0C233F",
    tooltipFontWeight: "bolder",
    tooltipFontStyle: "normal",
    tooltipFontStretch: "normal",
    tooltipFontToUpperCase: !1,
    tooltipTextAnchor: "left",
    tooltipDiffX: 0,
    tooltipDiffY: 10
  };
  $("#holder").svg3DTagCloud(t);
});
