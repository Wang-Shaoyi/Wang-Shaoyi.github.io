$(document).ready(function(){
    // 默认选中第一个按钮
    $(".filter-btn").first().addClass("active");
    $(".filter-btn").first().trigger("click");
  
    $(".filter-btn").click(function(){
      $(".filter-btn").removeClass("active");
      $(this).addClass("active");
  
      var filterValue = $(this).attr('data-filter');
  
      // 先淡出所有项目
      $("#stage li").fadeOut(400).promise().done(function() {
        // 当所有项目淡出后，执行这个回调函数
  
        if (filterValue == "all") {
          $("#stage li").fadeIn(400); // 显示所有项目，并淡入
        } else {
          // 只显示符合条件的项目，并淡入
          $("#stage li").filter(function() {
            return $(this).attr('data-tags').includes(filterValue);
          }).fadeIn(400);
        }
      });
    });
  });