$("#slider").on("scroll", function() {
  $(".slides").css({
    "background-position": $(this).scrollLeft()/6-100+ "px 0"
  });  
})

var slider = {
  
  el: {
    slider: $("#slider"),
    allSlides: $(".slide")
  },
 
  init: function() {
    // manual scrolling
    this.el.slider.on("scroll", function(event) {
      slider.moveSlidePosition(event);
    });
  },
  
  moveSlidePosition: function(event) {
    // Magic Numbers
    this.el.allSlides.css({
      "background-position": $(event.target).scrollLeft()/6-100+ "px 0"
    });  
  }
  
};

slider.init();

handleNavClick: function(event, el) {
    event.preventDefault();
    var position = $(el).attr("href").split("-").pop();
    
    this.el.slider.animate({
      scrollLeft: position * this.slideWidth
    }, this.timing);
    
    this.changeActiveNav(el);
  },
  
  changeActiveNav: function(el) {
    this.el.allNavButtons.removeClass("active");
    $(el).addClass("active");
  }
  
};
