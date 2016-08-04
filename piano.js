var down = [];

var abtn;
var aSbtn;
var bbtn;
var cbtn;
var cSbtn;
var dbtn;
var dSbtn;
var ebtn;
var fbtn;
var fSbtn;
var gbtn;
var gSbtn;

var shift;
var ctrl;

var aL;
var aSL;
var bL;
var cL;
var cSL;
var dL;
var dSL;
var eL;
var fL;
var fSL;
var gL;
var gSL;

var a;
var aS;
var b;
var c;
var cS;
var d;
var dS;
var e;
var f;
var fS;
var g;
var gS;

var aH;
var aSH;
var bH;
var cH;
var cSH;
var dH;
var dSH;
var eH;
var fH;
var fSH;
var gH;
var gSH;

$(document).ready(function()
{
  abtn = $(".a");
  aSbtn = $(".aS");
  bbtn = $(".b");
  cbtn = $(".b");
  cSbtn = $(".bS");
  dbtn = $(".d");
  dSbtn = $(".dS");
  ebtn = $(".e");
  fbtn = $(".f");
  fSbtn = $(".fS");
  gbtn = $(".g");
  gSbtn = $(".gS");

  shift = $("#shift");
  ctrl = $("#ctrl");

  $(document).keydown(function(e)
  {
    down[e.which] = true;

    // low
    if (down[16] && down[90])
    {
      aL = new Audio("keys/aL.wav");
      aL.play();
    }
    if (down[16] && down[83])
    {
      aSL = new Audio("keys/aSL.wav");
      aSL.play();
    }
    if (down[16] && down[88])
    {
      bL = new Audio("keys/bL.wav");
      bL.play();
    }
    if (down[16] && down[67])
    {
      cL = new Audio("keys/cL.wav");
      cL.play();
    }
    if (down[16] && down[70])
    {
      cSL = new Audio("keys/cSL.wav");
      cSL.play();
    }
    if (down[16] && down[86])
    {
      dL = new Audio("keys/dL.wav");
      dL.play();
    }
    if (down[16] && down[71])
    {
      dSL = new Audio("keys/dSL.wav");
      dSL.play();
    }
    if (down[16] && down[66])
    {
      eL = new Audio("keys/eL.wav");
      eL.play();
    }
    if (down[16] && down[78])
    {
      fL = new Audio("keys/fL.wav");
      fL.play();
    }
    if (down[16] && down[74])
    {
      fSL = new Audio("keys/fSL.wav");
      fSL.play();
    }
    if (down[16] && down[77])
    {
      gL = new Audio("keys/gL.wav");
      gL.play();
    }
    if (down[16] && down[75])
    {
      gSL = new Audio("keys/gSL.wav");
      gSL.play();
    }

    // high
    if (down[17] && down[90])
    {
      aH = new Audio("keys/aH.wav");
      aH.play();
    }
    if (down[17] && down[83])
    {
      aSH = new Audio("keys/aSH.wav");
      aSH.play();
    }
    if (down[17] && down[88])
    {
      bH = new Audio("keys/bH.wav");
      bH.play();
    }
    if (down[17] && down[67])
    {
      cH = new Audio("keys/cH.wav");
      cH.play();
    }
    if (down[17] && down[70])
    {
      cSH = new Audio("keys/cSH.wav");
      cSH.play();
    }
    if (down[17] && down[86])
    {
      dH = new Audio("keys/dH.wav");
      dH.play();
    }
    if (down[17] && down[71])
    {
      dSH = new Audio("keys/dSH.wav");
      dSH.play();
    }
    if (down[17] && down[66])
    {
      eH = new Audio("keys/eH.wav");
      eH.play();
    }
    if (down[17] && down[78])
    {
      fH = new Audio("keys/fH.wav");
      fH.play();
    }
    if (down[17] && down[74])
    {
      fSH = new Audio("keys/fSH.wav");
      fSH.play();
    }
    if (down[17] && down[77])
    {
      gH = new Audio("keys/gH.wav");
      gH.play();
    }
    if (down[17] && down[75])
    {
      gSH = new Audio("keys/gSH.wav");
      gSH.play();
    }

    // medium
    if (down[90])
    {
      abtn.addClass("medium");
      a = new Audio("keys/a.wav");
      a.play();
    }
    if (down[83])
    {
      aSbtn.addClass("medium");
      aS = new Audio("keys/aS.wav");
      aS.play();
    }
    if (down[88])
    {
      bbtn.addClass("medium");
      b = new Audio("keys/b.wav");
      b.play();
    }
    if (down[67])
    {
      cbtn.addClass("medium");
      c = new Audio("keys/c.wav");
      c.play();
    }
    if (down[70])
    {
      cSbtn.addClass("medium");
      cS = new Audio("keys/cS.wav");
      cS.play();
    }
    if (down[86])
    {
      dbtn.addClass("medium");
      d = new Audio("keys/d.wav");
      d.play();
    }
    if (down[71])
    {
      dSbtn.addClass("medium");
      dS = new Audio("keys/dS.wav");
      dS.play();
    }
    if (down[66])
    {
      ebtn.addClass("medium");
      e = new Audio("keys/e.wav");
      e.play();
    }
    if (down[78])
    {
      fbtn.addClass("medium");
      f = new Audio("keys/f.wav");
      f.play();
    }
    if (down[74])
    {
      fSbtn.addClass("medium");
      fS = new Audio("keys/fS.wav");
      fS.play();
    }
    if (down[77])
    {
      gbtn.addClass("medium");
      g = new Audio("keys/g.wav");
      g.play();
    }
    if (down[75])
    {
      gSbtn.addClass("medium");
      gS = new Audio("keys/gS.wav");
      gS.play();
    }
  }).keyup(function(e)
  {
    down[e.which] = false;
    if (!down[16])
    {
      shift.removeClass("low medium high");
    }
    if (!down[17])
    {
      ctrl.removeClass("low medium high");
    }
    if (!down[90])
    {
      abtn.removeClass("low medium high");
    }
    if (!down[83])
    {
      aSbtn.removeClass("low medium high");
    }
    if (!down[88])
    {
      bbtn.removeClass("low medium high");
    }
    if (!down[67])
    {
      cbtn.removeClass("low medium high");
    }
    if (!down[70])
    {
      cSbtn.removeClass("low medium high");
    }
    if (!down[86])
    {
      dbtn.removeClass("low medium high");
    }
    if (!down[71])
    {
      dSbtn.removeClass("low medium high");
    }
    if (!down[66])
    {
      ebtn.removeClass("low medium high");
    }
    if (!down[78])
    {
      fbtn.removeClass("low medium high");
    }
    if (!down[74])
    {
      fSbtn.removeClass("low medium high");
    }
    if (!down[77])
    {
      gbtn.removeClass("low medium high");
    }
    if (!down[75])
    {
      gSbtn.removeClass("low medium high");
    }
  });
});
