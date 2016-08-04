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
  cbtn = $(".c");
  cSbtn = $(".cS");
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
      shift.addClass("low");
      abtn.addClass("low");
      aL = new Audio("keys/aL.wav");
      aL.play();
    }
    else if (down[16] && down[83])
    {
      shift.addClass("low");
      aSbtn.addClass("low");
      aSL = new Audio("keys/aSL.wav");
      aSL.play();
    }
    else if (down[16] && down[88])
    {
      shift.addClass("low");
      bbtn.addClass("low");
      bL = new Audio("keys/bL.wav");
      bL.play();
    }
    else if (down[16] && down[67])
    {
      shift.addClass("low");
      cbtn.addClass("low");
      cL = new Audio("keys/cL.wav");
      cL.play();
    }
    else if (down[16] && down[70])
    {
      shift.addClass("low");
      cSbtn.addClass("low");
      cSL = new Audio("keys/cSL.wav");
      cSL.play();
    }
    else if (down[16] && down[86])
    {
      shift.addClass("low");
      dbtn.addClass("low");
      dL = new Audio("keys/dL.wav");
      dL.play();
    }
    else if (down[16] && down[71])
    {
      shift.addClass("low");
      dSbtn.addClass("low");
      dSL = new Audio("keys/dSL.wav");
      dSL.play();
    }
    else if (down[16] && down[66])
    {
      shift.addClass("low");
      ebtn.addClass("low");
      eL = new Audio("keys/eL.wav");
      eL.play();
    }
    else if (down[16] && down[78])
    {
      shift.addClass("low");
      fbtn.addClass("low");
      fL = new Audio("keys/fL.wav");
      fL.play();
    }
    else if (down[16] && down[74])
    {
      shift.addClass("low");
      fSbtn.addClass("low");
      fSL = new Audio("keys/fSL.wav");
      fSL.play();
    }
    else if (down[16] && down[77])
    {
      shift.addClass("low");
      gbtn.addClass("low");
      gL = new Audio("keys/gL.wav");
      gL.play();
    }
    else if (down[16] && down[75])
    {
      shift.addClass("low");
      gSbtn.addClass("low");
      gSL = new Audio("keys/gSL.wav");
      gSL.play();
    }

    // high
    else if (down[17] && down[90])
    {
      ctrl.addClass("high");
      abtn.addClass("high");
      aH = new Audio("keys/aH.wav");
      aH.play();
    }
    else if (down[17] && down[83])
    {
      ctrl.addClass("high");
      aSbtn.addClass("high");
      aSH = new Audio("keys/aSH.wav");
      aSH.play();
    }
    else if (down[17] && down[88])
    {
      ctrl.addClass("high");
      bbtn.addClass("high");
      bH = new Audio("keys/bH.wav");
      bH.play();
    }
    else if (down[17] && down[67])
    {
      ctrl.addClass("high");
      cbtn.addClass("high");
      cH = new Audio("keys/cH.wav");
      cH.play();
    }
    else if (down[17] && down[70])
    {
      ctrl.addClass("high");
      cSbtn.addClass("high");
      cSH = new Audio("keys/cSH.wav");
      cSH.play();
    }
    else if (down[17] && down[86])
    {
      ctrl.addClass("high");
      dbtn.addClass("high");
      dH = new Audio("keys/dH.wav");
      dH.play();
    }
    else if (down[17] && down[71])
    {
      ctrl.addClass("high");
      dSbtn.addClass("high");
      dSH = new Audio("keys/dSH.wav");
      dSH.play();
    }
    else if (down[17] && down[66])
    {
      ctrl.addClass("high");
      ebtn.addClass("high");
      eH = new Audio("keys/eH.wav");
      eH.play();
    }
    else if (down[17] && down[78])
    {
      ctrl.addClass("high");
      fbtn.addClass("high");
      fH = new Audio("keys/fH.wav");
      fH.play();
    }
    else if (down[17] && down[74])
    {
      ctrl.addClass("high");
      fSbtn.addClass("high");
      fSH = new Audio("keys/fSH.wav");
      fSH.play();
    }
    else if (down[17] && down[77])
    {
      ctrl.addClass("high");
      gbtn.addClass("high");
      gH = new Audio("keys/gH.wav");
      gH.play();
    }
    else if (down[17] && down[75])
    {
      ctrl.addClass("high");
      gSbtn.addClass("high");
      gSH = new Audio("keys/gSH.wav");
      gSH.play();
    }

    // medium
    else if (down[90])
    {
      abtn.addClass("medium");
      a = new Audio("keys/a.wav");
      a.play();
    }
    else if (down[83])
    {
      aSbtn.addClass("medium");
      aS = new Audio("keys/aS.wav");
      aS.play();
    }
    else if (down[88])
    {
      bbtn.addClass("medium");
      b = new Audio("keys/b.wav");
      b.play();
    }
    else if (down[67])
    {
      cbtn.addClass("medium");
      c = new Audio("keys/c.wav");
      c.play();
    }
    else if (down[70])
    {
      cSbtn.addClass("medium");
      cS = new Audio("keys/cS.wav");
      cS.play();
    }
    else if (down[86])
    {
      dbtn.addClass("medium");
      d = new Audio("keys/d.wav");
      d.play();
    }
    else if (down[71])
    {
      dSbtn.addClass("medium");
      dS = new Audio("keys/dS.wav");
      dS.play();
    }
    else if (down[66])
    {
      ebtn.addClass("medium");
      e = new Audio("keys/e.wav");
      e.play();
    }
    else if (down[78])
    {
      fbtn.addClass("medium");
      f = new Audio("keys/f.wav");
      f.play();
    }
    else if (down[74])
    {
      fSbtn.addClass("medium");
      fS = new Audio("keys/fS.wav");
      fS.play();
    }
    else if (down[77])
    {
      gbtn.addClass("medium");
      g = new Audio("keys/g.wav");
      g.play();
    }
    else if (down[75])
    {
      gSbtn.addClass("medium");
      gS = new Audio("keys/gS.wav");
      gS.play();
    }
    else if (down[16])
    {
      shift.addClass("low");
    }
    else if (down[17])
    {
      ctrl.addClass("high");
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
