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

    if (down[65])
    {
      a.play();
    }
    else if (down[66])
    {
      aS.play();
    }
  });
});
