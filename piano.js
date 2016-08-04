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
  $(document).keydown(function(e)
  {
    down[e.which] = true;

    // low
    if (down[16] && down[90])
    {
      aL = new Audio("keys/aL.wav");
      aL.play();
    }
    else if (down[16] && down[83])
    {
      aSL = new Audio("keys/aSL.wav");
      aSL.play();
    }
    else if (down[16] && down[88])
    {
      bL = new Audio("keys/bL.wav");
      bL.play();
    }
    else if (down[16] && down[67])
    {
      cL = new Audio("keys/cL.wav");
      cL.play();
    }
    else if (down[16] && down[70])
    {
      cSL = new Audio("keys/cSL.wav");
      cSL.play();
    }
    else if (down[16] && down[86])
    {
      dL = new Audio("keys/dL.wav");
      dL.play();
    }
    else if (down[16] && down[71])
    {
      dSL = new Audio("keys/dSL.wav");
      dSL.play();
    }
    else if (down[16] && down[66])
    {
      eL = new Audio("keys/eL.wav");
      eL.play();
    }
    else if (down[16] && down[78])
    {
      fL = new Audio("keys/fL.wav");
      fL.play();
    }
    else if (down[16] && down[74])
    {
      fSL = new Audio("keys/fSL.wav");
      fSL.play();
    }
    else if (down[16] && down[77])
    {
      gL = new Audio("keys/gL.wav");
      gL.play();
    }
    else if (down[16] && down[75])
    {
      gSL = new Audio("keys/gSL.wav");
      gSL.play();
    }

    // high
    else if (down[17] && down[90])
    {
      aH = new Audio("keys/aH.wav");
      aH.play();
    }
    else if (down[17] && down[83])
    {
      aSH = new Audio("keys/aSH.wav");
      aSH.play();
    }
    else if (down[17] && down[88])
    {
      bH = new Audio("keys/bH.wav");
      bH.play();
    }
    else if (down[17] && down[67])
    {
      cH = new Audio("keys/cH.wav");
      cH.play();
    }
    else if (down[17] && down[70])
    {
      cSH = new Audio("keys/cSH.wav");
      cSH.play();
    }
    else if (down[17] && down[86])
    {
      dH = new Audio("keys/dH.wav");
      dH.play();
    }
    else if (down[17] && down[71])
    {
      dSH = new Audio("keys/dSH.wav");
      dSH.play();
    }
    else if (down[17] && down[66])
    {
      eH = new Audio("keys/eH.wav");
      eH.play();
    }
    else if (down[17] && down[78])
    {
      fH = new Audio("keys/fH.wav");
      fH.play();
    }
    else if (down[17] && down[74])
    {
      fSH = new Audio("keys/fSH.wav");
      fSH.play();
    }
    else if (down[17] && down[77])
    {
      gH = new Audio("keys/gH.wav");
      gH.play();
    }
    else if (down[17] && down[75])
    {
      gSH = new Audio("keys/gSH.wav");
      gSH.play();
    }

    // medium
    else if (down[90])
    {
      a = new Audio("keys/a.wav");
      a.play();
    }
    else if (down[83])
    {
      aS = new Audio("keys/aS.wav");
      aS.play();
    }
    else if (down[88])
    {
      b = new Audio("keys/b.wav");
      b.play();
    }
    else if (down[67])
    {
      c = new Audio("keys/c.wav");
      c.play();
    }
    else if (down[70])
    {
      cS = new Audio("keys/cS.wav");
      cS.play();
    }
    else if (down[86])
    {
      d = new Audio("keys/d.wav");
      d.play();
    }
    else if (down[71])
    {
      dS = new Audio("keys/dS.wav");
      dS.play();
    }
    else if (down[66])
    {
      e = new Audio("keys/e.wav");
      e.play();
    }
    else if (down[78])
    {
      f = new Audio("keys/f.wav");
      f.play();
    }
    else if (down[74])
    {
      fS = new Audio("keys/fS.wav");
      fS.play();
    }
    else if (down[77])
    {
      g = new Audio("keys/g.wav");
      g.play();
    }
    else if (down[75])
    {
      gS = new Audio("keys/gS.wav");
      gS.play();
    }
  }).keyup(function(e)
  {
    down[e.which] = false;
  });
});
