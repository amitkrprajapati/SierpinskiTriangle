function setup() {
    sz = min(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);
    strokeWeight(10); 
    stroke('blue');
    offset = 20
    fixedPoint = [[sz/2 , offset]
                ,[offset, sz - offset],
              [sz - offset, sz - offset]]
    point(fixedPoint[0][0], fixedPoint[0][1]);
    point(fixedPoint[1][0], fixedPoint[1][1]);
    point(fixedPoint[2][0], fixedPoint[2][1]);

    v = [windowHeight/2 , windowHeight/2];
  }
  
  function midPoint(point1, point2)
  {
    res = [(point1[0] + point2[0])/2 , (point1[1] + point2[1])/2]
    return res;
  }
  function draw() {
    rn = random([0,1,2]);
    v = midPoint(v, fixedPoint[rn])
    console.log(v)
    point(v[0], v[1]);
  }
