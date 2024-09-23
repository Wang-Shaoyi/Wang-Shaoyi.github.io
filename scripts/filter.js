$(document).ready(function() {
  // 获取localStorage中保存的筛选选项
  var savedFilter = localStorage.getItem('selectedFilter');

  if (savedFilter) {
      // 根据保存的筛选选项找到对应按钮
      var buttonToClick = $(".filter-btn[data-filter='" + savedFilter + "']");
      buttonToClick.addClass("active");
      buttonToClick.trigger("click"); // 模拟点击保存的按钮
  } else {
      // 如果没有保存的选项，默认选中第一个按钮
      $(".filter-btn").first().addClass("active");
      $(".filter-btn").first().trigger("click");
  }

  $(".filter-btn").click(function() {
      // 移除其他按钮的 "active" 样式，当前按钮添加 "active"
      $(".filter-btn").removeClass("active");
      $(this).addClass("active");

      var filterValue = $(this).attr('data-filter');

      // 将用户的选择保存到localStorage
      localStorage.setItem('selectedFilter', filterValue);

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