    function LineFitter() {
        this.count = 0;
        this.sumX = 0;
        this.sumX2 = 0;
        this.sumXY = 0;
        this.sumY = 0;
    }
    LineFitter.prototype = {
        'add': function (x, y) {
            this.count++;
            this.sumX += x;
            this.sumX2 += x * x;
            this.sumXY += x * y;
            this.sumY += y;
        },
        'project': function (x) {
            var det = this.count * this.sumX2 - this.sumX * this.sumX;
            var offset = (this.sumX2 * this.sumY - this.sumX * this.sumXY) / det;
            var scale = (this.count * this.sumXY - this.sumX * this.sumY) / det;
            return offset + x * scale;
        }
    };
    
    function suggestedPrice(data, x) {
        var fitter = new LineFitter();
        for (var i = 0; i < data.length; i++) {
            fitter.add(i, data[i]);
        }
        return fitter.project(x);
    }   
    
    // Check function for future
    function check() {
        var basic = 103;
        var add = 0;
        if(document.getElementById("id_1").checked) {
          add += 7;
        }var p = basic + add;
        var price = p;
        return price;
       }