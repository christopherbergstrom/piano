var down = [];

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
  aL = new Audio("keys/aL.wav");
  aSL = new Audio("keys/aSL.wav");
  bL = new Audio("keys/bL.wav");
  cL = new Audio("keys/cL.wav");
  cSL = new Audio("keys/cSL.wav");
  dL = new Audio("keys/dL.wav");
  dSL = new Audio("keys/dSL.wav");
  eL = new Audio("keys/eL.wav");
  fL = new Audio("keys/fL.wav");
  fSL = new Audio("keys/fSL.wav");
  gL = new Audio("keys/gL.wav");
  gSL = new Audio("keys/gSL.wav");

  a = new Audio("keys/a.wav");
  aS = new Audio("keys/aS.wav");
  b = new Audio("keys/b.wav");
  c = new Audio("keys/c.wav");
  cS = new Audio("keys/cS.wav");
  d = new Audio("keys/d.wav");
  dS = new Audio("keys/dS.wav");
  e = new Audio("keys/e.wav");
  f = new Audio("keys/f.wav");
  fS = new Audio("keys/fS.wav");
  g = new Audio("keys/g.wav");
  gS = new Audio("keys/gS.wav");

  aH = new Audio("keys/aH.wav");
  aSH = new Audio("keys/aSH.wav");
  bH = new Audio("keys/bH.wav");
  cH = new Audio("keys/cH.wav");
  cSH = new Audio("keys/cSH.wav");
  dH = new Audio("keys/dH.wav");
  dSH = new Audio("keys/dSH.wav");
  eH = new Audio("keys/eH.wav");
  fH = new Audio("keys/fH.wav");
  fSH = new Audio("keys/fSH.wav");
  gH = new Audio("keys/gH.wav");
  gSH = new Audio("keys/gSH.wav");

  $(document).keydown(function(e)
  {
    down[e.which] = true;

    // low
    if (down[16] && down[90])
    {
      aL.play();
    }
    else if (down[16] && down[83])
    {
      aSL.play();
    }
    else if (down[16] && down[88])
    {
      bL.play();
    }
    else if (down[16] && down[67])
    {
      cL.play();
    }
    else if (down[16] && down[70])
    {
      cSL.play();
    }
    else if (down[16] && down[86])
    {
      dL.play();
    }
    else if (down[16] && down[71])
    {
      dSL.play();
    }
    else if (down[16] && down[66])
    {
      eL.play();
    }
    else if (down[16] && down[78])
    {
      fL.play();
    }
    else if (down[16] && down[74])
    {
      fSL.play();
    }
    else if (down[16] && down[77])
    {
      gL.play();
    }
    else if (down[16] && down[75])
    {
      gSL.play();
    }

    // medium
    if (down[90])
    {
      a.play();
    }
    else if (down[83])
    {
      aS.play();
    }
    else if (down[88])
    {
      b.play();
    }
    else if (down[67])
    {
      c.play();
    }
    else if (down[70])
    {
      cS.play();
    }
    else if (down[86])
    {
      d.play();
    }
    else if (down[71])
    {
      dS.play();
    }
    else if (down[66])
    {
      e.play();
    }
    else if (down[78])
    {
      f.play();
    }
    else if (down[74])
    {
      fS.play();
    }
    else if (down[77])
    {
      g.play();
    }
    else if (down[75])
    {
      gS.play();
    }

    // high
    if (down[17] && down[90])
    {
      aH.play();
    }
    else if (down[17] && down[83])
    {
      aSH.play();
    }
    else if (down[17] && down[88])
    {
      bH.play();
    }
    else if (down[17] && down[67])
    {
      cH.play();
    }
    else if (down[17] && down[70])
    {
      cSH.play();
    }
    else if (down[17] && down[86])
    {
      dH.play();
    }
    else if (down[17] && down[71])
    {
      dSH.play();
    }
    else if (down[17] && down[66])
    {
      eH.play();
    }
    else if (down[17] && down[78])
    {
      fH.play();
    }
    else if (down[17] && down[74])
    {
      fSH.play();
    }
    else if (down[17] && down[77])
    {
      gH.play();
    }
    else if (down[17] && down[75])
    {
      gSH.play();
    }
  });
});
