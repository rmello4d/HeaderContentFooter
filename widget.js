(function() {
    var widget = WAF.require('waf-core/widget');
    
    //creating the widget
    var HeaderContentFooter = widget.create('HeaderContentFooter');
    
    // inheriting from the composed behavior
    HeaderContentFooter.inherit(WAF.require('waf-behavior/layout/composed'));       
    
       
    // creating empty <div> widgets 
    var simple1 = widget.create('simple1');
    var simple2 = widget.create('simple2');
    var simple3 = widget.create('simple3');
    
    // setting each part of the composed with an empty widget                      
    HeaderContentFooter.setPart('header', 	simple1); 
    HeaderContentFooter.setPart('content', 	simple2);
    HeaderContentFooter.setPart('footer', 	simple3);  

	// define the widget's init method
 	HeaderContentFooter.prototype.init = function() {
    
    	// adding a general class to the widget
        this.addClass('waf-skin-box');
              
        //creating an internal event that will change the color of the content to yellow       
 		$(this.node).on('click', function() {
			this.getPart('content').style('background', 'yellow');
		}.bind(this));
	}

})();