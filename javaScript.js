  var up = document.getElementById('GFG_UP');
        var down = document.getElementById('demo');
  
        function gfg() {
            var minm = 1;
            var maxm = 50;
            down.innerHTML = Math.floor(Math
            .random() * (maxm - minm + 1)) + minm;
        }
