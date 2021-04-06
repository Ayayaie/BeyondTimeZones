function heureUTC() {
     date = new Date;
     g = date.getTimezoneOffset()/-60;
     h = date.getHours();
     if(h<10)
     {
             h = "0"+h;
     }
     m = date.getMinutes();
     if(m<10)
     {
             m = "0"+m;
     }
     s = date.getSeconds();
     if(s<10)
     {
             s = "0"+s;
     }
     if (g>0) 
     {
     	if (g>h) 
        {
        	h2 = 24-(g-h)
            resultat = h2+':'+m+':'+s+':+'+g;
     	}
        if (g<h) 
        {
        	h2 = h-g
            resultat = h2+':'+m+':'+s+':+'+g;
        }
     }
     if (g==0) 
     {
     	resultat = h+':'+m+':'+s+':'+g;
     }
     if (g<0)
     {
     	if (Math.abs(g)>(24-h)) 
        {
        	h2 = Math.abs(g)-(24-h)
            resultat = h2+':'+m+':'+s+':'+g;
     	}
        if (Math.abs(g)<(24-h)) 
        {
        	h2 = h-g
            resultat = h2+':'+m+':'+s+':'+g;
        }
     }
     return resultat;
}
