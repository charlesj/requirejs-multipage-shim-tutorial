define(["jquery","d3"],function(e,t){return function(){function f(f){var l=i||0,c=s||100,h=t.scale.linear().domain([l,c]).range([0,e]),p=f.append("svg").attr("class","visualization-bar").attr("viewBox",[0,0,e,n]).attr("preserveAspectRatio","xMinYMid"),d=p.selectAll("rect").data(f.data()).enter().append("svg:g"),v=n;if(a){var m=d.append("text").attr("class","num").attr("dy",-17).attr("text-anchor","start").text(f.data());d.attr("transform","translate(0,"+m.node().getBBox().height+")");var g=m.node().getBBox();v=n-g.height,v=Math.max(g.height/2,v),e=Math.max(e,g.width),n=Math.max(n,g.height+v),p.attr("viewBox",[0,0,e,n])}d.append("rect").attr("class","bg").attr("width",e).attr("height",v).attr("rx",r).attr("ry",r);var y=d.append("rect").attr("class","fg").attr("width",h).attr("height",v).attr("rx",r).attr("ry",r),b=p.append("defs").append("linearGradient").attr("id","wash").attr("gradientTransform","rotate(90)");b.append("stop").attr("offset",0).attr("stop-color","white"),b.append("stop").attr("offset",1).attr("stop-color","black"),d.append("rect").attr("class","gradient").attr("width",h).attr("height",v).attr("fill","url(#wash)").attr("fill-opacity",.1);if(o!==null)var w=d.append("circle").attr("class","tick").attr("r",u).attr("cx",h(o)).attr("cy",v/2)}var e=100,n=40,r=10,i=0,s=100,o=null,u=3.5,a=!0;return f.width=function(t){return arguments.length?(e=t,f):e},f.height=function(e){return arguments.length?(n=e,f):n},f.rounded=function(e){return arguments.length?(r=e,f):r},f.max=function(e){return arguments.length?(s=e,f):s},f.min=function(e){return arguments.length?(i=e,f):i},f.tick=function(e){return arguments.length?(o=e,f):o},f.tickRadius=function(e){return arguments.length?(u=e,f):u},f.showText=function(e){return arguments.length?(a=e,f):a},f}})