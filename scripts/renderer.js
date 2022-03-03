class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(this.ctx);
                break;
            case 1:
                this.drawSlide1(this.ctx);
                break;
            case 2:
                this.drawSlide2(this.ctx);
                break;
            case 3:
                this.drawSlide3(this.ctx);
                break;
        }
    }

    // ctx:          canvas context
    drawSlide0(ctx) {
        let left_bottom = {x:150,y:250};
        let right_top = {x:650,y:350};
        let color = [255,0,0,255];
        this.drawRectangle(left_bottom,right_top,color,ctx);         
    }

    // ctx:          canvas context
    drawSlide1(ctx) {
        let center = {x:150,y:250};
        let radius = 100;
        let color = [255,0,0,255];
        this.drawCircle(center, radius, color, ctx);
    }

    // ctx:          canvas context
    drawSlide2(ctx) {
        let pt0 = {x:150,y:250};
        let pt1 = {x:200,y:300};
        let pt2 ={x:300,y:300};
        let pt3 = {x:350,y:250};
        let color = [255,0,0,255];
        this.drawBezierCurve(pt0,pt1,pt2,pt3,color,ctx);
    }

    // ctx:          canvas context
    drawSlide3(ctx) {
        let pt0 = {x:175,y:400};
        let pt1 = {x:50,y:400};
        let pt2 = {x:50,y:300};
        let pt3 = {x:150,y:300};
        let color = [255,0,0,255];
        this.drawBezierCurve(pt0,pt1,pt2,pt3,color,ctx);
        let pt4 = {x:150,y:300};
        let pt5 = {x:250,y:300};
        let pt6 = {x:250,y:200};
        let pt7 = {x:100,y:200};
        this.drawBezierCurve(pt4,pt5,pt6,pt7,color,ctx);
        let left_bottom = {x:225,y:200};
        let right_top = {x:250,y:300};
        this.drawRectangle(left_bottom,right_top,color,ctx);
        let center = {x:237,y:325};
        let radius = 20;
        this.drawCircle(center, radius, color, ctx);
        let left_bottom1 = {x:275,y:200};
        let right_top1 = {x:275,y:400};
        this.drawRectangle(left_bottom1,right_top1,color,ctx);
        let left_bottom2 = {x:275,y:400};
        let right_top2 = {x:350,y:400};
        this.drawRectangle(left_bottom2,right_top2,color,ctx);
        let left_bottom3 = {x:275,y:300};
        let right_top3 = {x:350,y:300};
        this.drawRectangle(left_bottom3,right_top3,color,ctx);
        let left_bottom4 = {x:275,y:200};
        let right_top4 = {x:350,y:200};
        this.drawRectangle(left_bottom4,right_top4,color,ctx);
        let left_bottom5 = {x:365,y:200};
        let right_top5 = {x:365,y:325};
        this.drawRectangle(left_bottom5,right_top5,color,ctx);
        let pt8 = {x:365,y:300};
        let pt9 = {x:365,y:350};
        let pt10 = {x:440,y:350};
        let pt11 = {x:440,y:300};
        this.drawBezierCurve(pt8,pt9,pt10,pt11,color,ctx);
        let left_bottom6 = {x:450,y:200};
        let right_top6 = {x:450,y:400};
        this.drawRectangle(left_bottom6,right_top6,color,ctx);
        let left_bottom7 = {x:450,y:400};
        let right_top7 = {x:525,y:400};
        this.drawRectangle(left_bottom7,right_top7,color,ctx);
        let left_bottom8 = {x:450,y:300};
        let right_top8 = {x:525,y:300};
        this.drawRectangle(left_bottom8,right_top8,color,ctx);
        let left_bottom9 = {x:450,y:200};
        let right_top9 = {x:525,y:200};
        this.drawRectangle(left_bottom9,right_top9,color,ctx);
        

    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawRectangle(left_bottom, right_top, color, ctx) {
        let left_top = {x: left_bottom.x, y: right_top.y};
        let right_bottom = {x: right_top.x, y: left_bottom.y};
        this.drawLine(left_bottom, left_top, color, ctx);
        this.drawLine(left_bottom, right_bottom, color, ctx);
        this.drawLine(left_top, right_top, color, ctx);
        this.drawLine(right_bottom, right_top, color, ctx);
        if(this.show_points == true) {
            this.drawPoint(left_bottom, 10, color, ctx);
            this.drawPoint(right_top, 10, color, ctx);
            this.drawPoint(right_bottom, 10, color, ctx);
            this.drawPoint(left_top, 10, color, ctx);
        }
    }

    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawCircle(center, radius, color, ctx, points) {
        let cos = Math.cos(0.0);
        //console.log(cos);
        let sin = Math.sin(0.0);
        let origin = {x: center.x + radius * cos, y: center.y + radius * sin};
        let nextP = {x:1, y:1};
        
        for(let i = 0; i < this.num_curve_sections; i++) {
            cos = Math.cos(((i+1) * 2 * Math.PI)/this.num_curve_sections);
            sin = Math.sin(((i+1) * 2 * Math.PI)/this.num_curve_sections);
            nextP = {x: center.x + radius * cos, y: center.y + radius * sin};
            this.drawLine(origin, nextP, color, ctx);
            if(this.show_points == true) {
                this.drawPoint(nextP, 10, color, ctx);
            }
            origin = nextP;
        }
    }
    drawPoint(center, radius, color, ctx, points) {
        let cos = Math.cos(0.0);
        //console.log(cos);
        let sin = Math.sin(0.0);
        let origin = {x: center.x + radius * cos, y: center.y + radius * sin};
        let nextP = {x:1, y:1};
        
        for(let i = 0; i < this.num_curve_sections; i++) {
            cos = Math.cos(((i+1) * 2 * Math.PI)/this.num_curve_sections);
            sin = Math.sin(((i+1) * 2 * Math.PI)/this.num_curve_sections);
            nextP = {x: center.x + radius * cos, y: center.y + radius * sin};
            this.drawLine(origin, nextP, color, ctx);
            origin = nextP;
        }
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawBezierCurve(pt0, pt1, pt2, pt3, color, ctx, points) {
        let origin = {x: pt0.x, y: pt0.y};
        let nextP = {x:1, y:1}; 
        let t = 0;
        if(this.show_points == true) {
            this.drawPoint(origin, 10, color, ctx);
        }
        for(let i = 0; i < this.num_curve_sections; i++) {
            t = 0 + (i+1)/this.num_curve_sections;
            nextP = {x: Math.pow(1-t, 3) * pt0.x + 3 * Math.pow((1-t),2) * t * pt1.x + 3 * (1-t) * Math.pow(t, 2) * pt2.x + Math.pow(t,3) * pt3.x, 
                y: Math.pow(1-t, 3) * pt0.y + 3 * Math.pow((1-t),2) * t * pt1.y + 3 * (1-t) * Math.pow(t, 2) * pt2.y + Math.pow(t,3) * pt3.y}
            this.drawLine(origin, nextP, color, ctx);
            if(this.show_points == true) {
                this.drawPoint(nextP, 10, color, ctx);
            }
            origin = nextP;
        }
    }


    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawLine(pt0, pt1, color, ctx)
    {
        ctx.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (color[3]/255.0) + ')';
        ctx.beginPath();
        ctx.moveTo(pt0.x, pt0.y);
        ctx.lineTo(pt1.x, pt1.y);
        ctx.stroke();
    }
};
