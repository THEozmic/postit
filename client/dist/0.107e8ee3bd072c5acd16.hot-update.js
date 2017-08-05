webpackHotUpdate(0,{

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(77)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);

// module
exports.push([module.i, ".steps {\n  margin-top: 30px; }\n  .steps * {\n    font-size: 20px;\n    margin-bottom: 15px; }\n\n.action-buttons {\n  margin-top: 30px; }\n\nbody {\n  background-color: #252830;\n  color: #fff;\n  font-family: 'Open Sans'; }\n\na {\n  color: #0275d8; }\n\n.btn, .btn-large {\n  background-color: #0275d8; }\n\n.btn:hover, .btn-large:hover {\n  background-color: #0684f1; }\n\n.btn:focus, .btn-large:focus, .btn-floating:focus {\n  background-color: #0684f1; }\n\ninput[type=text]:not(.browser-default):focus:not([readonly]),\ninput[type=password]:not(.browser-default):focus:not([readonly]),\ninput[type=email]:not(.browser-default):focus:not([readonly]) {\n  border-bottom: 1px solid #0275d8;\n  box-shadow: 0 1px 0 0 #0275d8; }\n\ninput[type=text]:not(.browser-default),\ninput[type=password]:not(.browser-default),\ninput[type=email]:not(.browser-default) {\n  border-bottom: 1px solid #dcdcdc; }\n\ninput[type=text]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=password]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=email]:not(.browser-default):focus:not([readonly]) + label {\n  color: #0275d8; }\n\nselect {\n  color: #000;\n  height: auto; }\n\n.input-field label {\n  color: #bbbbbb; }\n\n.page-title {\n  font-size: 30px;\n  display: inline-block;\n  text-decoration: none;\n  color: #fff; }\n  .page-title span {\n    font-size: 15px;\n    margin-left: 5px;\n    text-transform: uppercase;\n    border-bottom: 3px solid #0275d8;\n    display: inline;\n    position: relative;\n    top: -7px;\n    font-weight: bolder; }\n  .page-title:hover {\n    text-decoration: none;\n    color: #fff; }\n\n.action-btn {\n  margin: 5px 2px 5px 0px; }\n\n.modal {\n  color: #131418; }\n\n.form {\n  background-color: #fff;\n  border-radius: 3px;\n  padding: 20px;\n  margin-top: 20px; }\n\n.form input, .form input::placeholder {\n  color: #252830; }\n\n.page-container p {\n  font-size: 25px; }\n\n.page-header {\n  margin: 30px 0px; }\n\nfooter img {\n  width: 80px; }\n\nfooter section {\n  display: inline-block;\n  margin: 20px 50px 20px 0px;\n  vertical-align: top; }\n\n.search-results .ingroup {\n  background-color: #252830; }\n\n.search-pages {\n  margin: 10px 0px;\n  background-color: #0275d8;\n  padding: 5px;\n  border-radius: 2px;\n  text-align: center; }\n  .search-pages span {\n    padding: 3px 15px;\n    color: #fff;\n    text-decoration: none;\n    display: inline-block;\n    cursor: pointer; }\n\n.search-results > span {\n  color: #ffffff;\n  padding: 5px 12px;\n  background-color: #8e9095;\n  margin: 5px;\n  border-radius: 2px;\n  display: inline-block;\n  min-width: 70px;\n  cursor: pointer; }\n\n.search-results {\n  margin: 15px 0px; }\n\n.search-prev {\n  float: left;\n  border-right: 1px solid white; }\n\n.search-next {\n  float: right;\n  border-left: 1px solid white; }\n\n.message-type {\n  font-size: 10px;\n  padding: 2px 10px;\n  border-radius: 3px;\n  color: #252830;\n  font-weight: bolder; }\n  .message-type.urgent {\n    background-color: #FFC107; }\n  .message-type.critical {\n    background-color: #FF5722; }\n  .message-type.normal {\n    background-color: #CDDC39; }\n\n.message-container {\n  color: #252830;\n  margin-bottom: 15px;\n  display: block;\n  min-height: 30px; }\n\n.message-filter-container {\n  width: 100px;\n  display: inline-block;\n  vertical-align: middle;\n  float: right; }\n\n.group-header-container {\n  position: sticky;\n  top: -1px;\n  background-color: #252830;\n  height: 50px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  width: 100%; }\n\n.message-details, .message, .message-read-list {\n  display: inline-block;\n  padding: 5px;\n  background-color: #fff;\n  border-radius: 3px;\n  font-size: 13px; }\n\n.message-details {\n  width: initial; }\n\n.message {\n  display: block; }\n\n.message > div {\n  padding: 10px;\n  background-color: #f2f1f1;\n  border-radius: 3px;\n  margin-top: 5px;\n  border: 1px solid #e6e5e5; }\n\n.new-message {\n  position: sticky;\n  bottom: -1px;\n  background-color: #252830;\n  padding: 15px 0px;\n  width: 100%;\n  display: inline-block; }\n\n.message-box {\n  display: inline-block;\n  border: none;\n  background-color: #fff;\n  color: #252830;\n  padding: 10px;\n  border-radius: 3px;\n  max-width: 702px;\n  min-width: 100%;\n  height: auto;\n  resize: none; }\n\n.messenger {\n  margin-right: 10px; }\n\n.priority-level {\n  display: inline-block;\n  width: 100px; }\n\n.group-card {\n  color: #252830;\n  background-color: #fff;\n  display: inline-block;\n  padding: 15px;\n  border-radius: 3px;\n  font-weight: bolder;\n  margin: 10px 20px 10px 0px;\n  text-decoration: none; }\n  .group-card:hover {\n    background-color: rgba(255, 255, 255, 0.8); }\n\n.dashboard-menu {\n  display: inline-block;\n  margin-right: 30px;\n  top: 1px;\n  width: 100%; }\n  .dashboard-menu ul {\n    list-style: none;\n    margin: 0px;\n    padding: 0px; }\n  .dashboard-menu li {\n    margin: 10px 0px; }\n  .dashboard-menu li > a {\n    color: #ccc9c9;\n    text-decoration: none;\n    padding: 10px;\n    display: block;\n    font-size: 14px; }\n    .dashboard-menu li > a.active {\n      background-color: #0275d8;\n      border-radius: 3px; }\n      .dashboard-menu li > a.active:hover {\n        color: #ccc9c9; }\n    .dashboard-menu li > a:hover {\n      color: #fff; }\n\n@media (min-width: 630px) {\n  .dashboard-menu {\n    position: sticky;\n    width: 200px; } }\n\n.page-container.container-fluid {\n  min-height: 350px; }\n\n.page-content {\n  display: inline-block;\n  width: 100%; }\n\n.group-unread-count {\n  border-radius: 50%;\n  padding: 5px;\n  font-size: 10px;\n  color: #ffffff;\n  top: -10px;\n  right: -10px;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  display: inline-block;\n  position: relative; }\n\n.badge-danger {\n  background-color: #d9534f; }\n\n.user-greeting {\n  font-size: 12px;\n  padding: 5px;\n  background-color: white;\n  border-radius: 3px;\n  float: right;\n  color: #252830;\n  margin: 10px; }\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc2Nzcy9pbmRleC5zY3NzPzFlZTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0Esd0ZBQXlGOztBQUV6RjtBQUNBLGlDQUFrQyxxQkFBcUIsRUFBRSxjQUFjLHNCQUFzQiwwQkFBMEIsRUFBRSxxQkFBcUIscUJBQXFCLEVBQUUsVUFBVSw4QkFBOEIsZ0JBQWdCLDZCQUE2QixFQUFFLE9BQU8sbUJBQW1CLEVBQUUsc0JBQXNCLDhCQUE4QixFQUFFLGtDQUFrQyw4QkFBOEIsRUFBRSx1REFBdUQsOEJBQThCLEVBQUUscU1BQXFNLHFDQUFxQyxrQ0FBa0MsRUFBRSxtSUFBbUkscUNBQXFDLEVBQUUsNk5BQTZOLG1CQUFtQixFQUFFLFlBQVksZ0JBQWdCLGlCQUFpQixFQUFFLHdCQUF3QixtQkFBbUIsRUFBRSxpQkFBaUIsb0JBQW9CLDBCQUEwQiwwQkFBMEIsZ0JBQWdCLEVBQUUsc0JBQXNCLHNCQUFzQix1QkFBdUIsZ0NBQWdDLHVDQUF1QyxzQkFBc0IseUJBQXlCLGdCQUFnQiwwQkFBMEIsRUFBRSx1QkFBdUIsNEJBQTRCLGtCQUFrQixFQUFFLGlCQUFpQiw0QkFBNEIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFdBQVcsMkJBQTJCLHVCQUF1QixrQkFBa0IscUJBQXFCLEVBQUUsMkNBQTJDLG1CQUFtQixFQUFFLHVCQUF1QixvQkFBb0IsRUFBRSxrQkFBa0IscUJBQXFCLEVBQUUsZ0JBQWdCLGdCQUFnQixFQUFFLG9CQUFvQiwwQkFBMEIsK0JBQStCLHdCQUF3QixFQUFFLDhCQUE4Qiw4QkFBOEIsRUFBRSxtQkFBbUIscUJBQXFCLDhCQUE4QixpQkFBaUIsdUJBQXVCLHVCQUF1QixFQUFFLHdCQUF3Qix3QkFBd0Isa0JBQWtCLDRCQUE0Qiw0QkFBNEIsc0JBQXNCLEVBQUUsNEJBQTRCLG1CQUFtQixzQkFBc0IsOEJBQThCLGdCQUFnQix1QkFBdUIsMEJBQTBCLG9CQUFvQixvQkFBb0IsRUFBRSxxQkFBcUIscUJBQXFCLEVBQUUsa0JBQWtCLGdCQUFnQixrQ0FBa0MsRUFBRSxrQkFBa0IsaUJBQWlCLGlDQUFpQyxFQUFFLG1CQUFtQixvQkFBb0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsd0JBQXdCLEVBQUUsMEJBQTBCLGdDQUFnQyxFQUFFLDRCQUE0QixnQ0FBZ0MsRUFBRSwwQkFBMEIsZ0NBQWdDLEVBQUUsd0JBQXdCLG1CQUFtQix3QkFBd0IsbUJBQW1CLHFCQUFxQixFQUFFLCtCQUErQixpQkFBaUIsMEJBQTBCLDJCQUEyQixpQkFBaUIsRUFBRSw2QkFBNkIscUJBQXFCLGNBQWMsOEJBQThCLGlCQUFpQix3QkFBd0IscUJBQXFCLDRCQUE0QiwwQkFBMEIsZ0JBQWdCLEVBQUUsb0RBQW9ELDBCQUEwQixpQkFBaUIsMkJBQTJCLHVCQUF1QixvQkFBb0IsRUFBRSxzQkFBc0IsbUJBQW1CLEVBQUUsY0FBYyxtQkFBbUIsRUFBRSxvQkFBb0Isa0JBQWtCLDhCQUE4Qix1QkFBdUIsb0JBQW9CLDhCQUE4QixFQUFFLGtCQUFrQixxQkFBcUIsaUJBQWlCLDhCQUE4QixzQkFBc0IsZ0JBQWdCLDBCQUEwQixFQUFFLGtCQUFrQiwwQkFBMEIsaUJBQWlCLDJCQUEyQixtQkFBbUIsa0JBQWtCLHVCQUF1QixxQkFBcUIsb0JBQW9CLGlCQUFpQixpQkFBaUIsRUFBRSxnQkFBZ0IsdUJBQXVCLEVBQUUscUJBQXFCLDBCQUEwQixpQkFBaUIsRUFBRSxpQkFBaUIsbUJBQW1CLDJCQUEyQiwwQkFBMEIsa0JBQWtCLHVCQUF1Qix3QkFBd0IsK0JBQStCLDBCQUEwQixFQUFFLHVCQUF1QixpREFBaUQsRUFBRSxxQkFBcUIsMEJBQTBCLHVCQUF1QixhQUFhLGdCQUFnQixFQUFFLHdCQUF3Qix1QkFBdUIsa0JBQWtCLG1CQUFtQixFQUFFLHdCQUF3Qix1QkFBdUIsRUFBRSw0QkFBNEIscUJBQXFCLDRCQUE0QixvQkFBb0IscUJBQXFCLHNCQUFzQixFQUFFLHFDQUFxQyxrQ0FBa0MsMkJBQTJCLEVBQUUsNkNBQTZDLHlCQUF5QixFQUFFLG9DQUFvQyxvQkFBb0IsRUFBRSwrQkFBK0IscUJBQXFCLHVCQUF1QixtQkFBbUIsRUFBRSxFQUFFLHFDQUFxQyxzQkFBc0IsRUFBRSxtQkFBbUIsMEJBQTBCLGdCQUFnQixFQUFFLHlCQUF5Qix1QkFBdUIsaUJBQWlCLG9CQUFvQixtQkFBbUIsZUFBZSxpQkFBaUIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsMEJBQTBCLHVCQUF1QixFQUFFLG1CQUFtQiw4QkFBOEIsRUFBRSxvQkFBb0Isb0JBQW9CLGlCQUFpQiw0QkFBNEIsdUJBQXVCLGlCQUFpQixtQkFBbUIsaUJBQWlCLEVBQUU7O0FBRXA4TCIsImZpbGUiOiIwLjEwN2U4ZWUzYmQwNzJjNWFjZDE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGVwcyB7XFxuICBtYXJnaW4tdG9wOiAzMHB4OyB9XFxuICAuc3RlcHMgKiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxcblxcbi5hY3Rpb24tYnV0dG9ucyB7XFxuICBtYXJnaW4tdG9wOiAzMHB4OyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyODMwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7IH1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjMDI3NWQ4OyB9XFxuXFxuLmJ0biwgLmJ0bi1sYXJnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4OyB9XFxuXFxuLmJ0bjpob3ZlciwgLmJ0bi1sYXJnZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY4NGYxOyB9XFxuXFxuLmJ0bjpmb2N1cywgLmJ0bi1sYXJnZTpmb2N1cywgLmJ0bi1mbG9hdGluZzpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY4NGYxOyB9XFxuXFxuaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pLFxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSksXFxuaW5wdXRbdHlwZT1lbWFpbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAyNzVkODtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMDI3NWQ4OyB9XFxuXFxuaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCksXFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpLFxcbmlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYzsgfVxcblxcbmlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSArIGxhYmVsLFxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCxcXG5pbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwge1xcbiAgY29sb3I6ICMwMjc1ZDg7IH1cXG5cXG5zZWxlY3Qge1xcbiAgY29sb3I6ICMwMDA7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4uaW5wdXQtZmllbGQgbGFiZWwge1xcbiAgY29sb3I6ICNiYmJiYmI7IH1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLnBhZ2UtdGl0bGUgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMjc1ZDg7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC03cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG4gIC5wYWdlLXRpdGxlOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24tYnRuIHtcXG4gIG1hcmdpbjogNXB4IDJweCA1cHggMHB4OyB9XFxuXFxuLm1vZGFsIHtcXG4gIGNvbG9yOiAjMTMxNDE4OyB9XFxuXFxuLmZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuLmZvcm0gaW5wdXQsIC5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI1MjgzMDsgfVxcblxcbi5wYWdlLWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogMjVweDsgfVxcblxcbi5wYWdlLWhlYWRlciB7XFxuICBtYXJnaW46IDMwcHggMHB4OyB9XFxuXFxuZm9vdGVyIGltZyB7XFxuICB3aWR0aDogODBweDsgfVxcblxcbmZvb3RlciBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMjBweCA1MHB4IDIwcHggMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxcblxcbi5zZWFyY2gtcmVzdWx0cyAuaW5ncm91cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyODMwOyB9XFxuXFxuLnNlYXJjaC1wYWdlcyB7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzVkODtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnNlYXJjaC1wYWdlcyBzcGFuIHtcXG4gICAgcGFkZGluZzogM3B4IDE1cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnNlYXJjaC1yZXN1bHRzID4gc3BhbiB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlOTA5NTtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLXdpZHRoOiA3MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnNlYXJjaC1yZXN1bHRzIHtcXG4gIG1hcmdpbjogMTVweCAwcHg7IH1cXG5cXG4uc2VhcmNoLXByZXYge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTsgfVxcblxcbi5zZWFyY2gtbmV4dCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlOyB9XFxuXFxuLm1lc3NhZ2UtdHlwZSB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiAjMjUyODMwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcbiAgLm1lc3NhZ2UtdHlwZS51cmdlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTA3OyB9XFxuICAubWVzc2FnZS10eXBlLmNyaXRpY2FsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTcyMjsgfVxcbiAgLm1lc3NhZ2UtdHlwZS5ub3JtYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0REQzM5OyB9XFxuXFxuLm1lc3NhZ2UtY29udGFpbmVyIHtcXG4gIGNvbG9yOiAjMjUyODMwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWluLWhlaWdodDogMzBweDsgfVxcblxcbi5tZXNzYWdlLWZpbHRlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZsb2F0OiByaWdodDsgfVxcblxcbi5ncm91cC1oZWFkZXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IC0xcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyODMwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm1lc3NhZ2UtZGV0YWlscywgLm1lc3NhZ2UsIC5tZXNzYWdlLXJlYWQtbGlzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAxM3B4OyB9XFxuXFxuLm1lc3NhZ2UtZGV0YWlscyB7XFxuICB3aWR0aDogaW5pdGlhbDsgfVxcblxcbi5tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLm1lc3NhZ2UgPiBkaXYge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYxZjE7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNWU1OyB9XFxuXFxuLm5ldy1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IC0xcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyODMwO1xcbiAgcGFkZGluZzogMTVweCAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5tZXNzYWdlLWJveCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyNTI4MzA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWF4LXdpZHRoOiA3MDJweDtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHJlc2l6ZTogbm9uZTsgfVxcblxcbi5tZXNzZW5nZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLnByaW9yaXR5LWxldmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDBweDsgfVxcblxcbi5ncm91cC1jYXJkIHtcXG4gIGNvbG9yOiAjMjUyODMwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5ncm91cC1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XFxuXFxuLmRhc2hib2FyZC1tZW51IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG4gIHRvcDogMXB4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC5kYXNoYm9hcmQtbWVudSB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7IH1cXG4gIC5kYXNoYm9hcmQtbWVudSBsaSB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7IH1cXG4gIC5kYXNoYm9hcmQtbWVudSBsaSA+IGEge1xcbiAgICBjb2xvcjogI2NjYzljOTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAgIC5kYXNoYm9hcmQtbWVudSBsaSA+IGEuYWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgICAgIC5kYXNoYm9hcmQtbWVudSBsaSA+IGEuYWN0aXZlOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjY2NjOWM5OyB9XFxuICAgIC5kYXNoYm9hcmQtbWVudSBsaSA+IGE6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYzMHB4KSB7XFxuICAuZGFzaGJvYXJkLW1lbnUge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB3aWR0aDogMjAwcHg7IH0gfVxcblxcbi5wYWdlLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQge1xcbiAgbWluLWhlaWdodDogMzUwcHg7IH1cXG5cXG4ucGFnZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmdyb3VwLXVucmVhZC1jb3VudCB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHRvcDogLTEwcHg7XFxuICByaWdodDogLTEwcHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5iYWRnZS1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjsgfVxcblxcbi51c2VyLWdyZWV0aW5nIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY29sb3I6ICMyNTI4MzA7XFxuICBtYXJnaW46IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NsaWVudC9zY3NzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=