
$(document).ready(function() {

  /*
   * Plugin intialization
   */
  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
    sectionsColor: ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
    navigation: {
      'position': 'right',
      'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4', 'Pgae 5', 'Pgae 6', 'Pgae 7']
    },
    afterRender: function() {
      $('#pp-nav').addClass('custom');
    },
    afterLoad: function(anchorLink, index) {
      if (index > 1) {
        $('#pp-nav').removeClass('custom');
      } else {
        $('#pp-nav').addClass('custom');
      }
    }
  });

});

