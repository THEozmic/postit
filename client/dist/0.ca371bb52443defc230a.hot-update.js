webpackHotUpdate(0,{

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(77)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);

// module
exports.push([module.i, ".steps {\n  margin-top: 30px; }\n  .steps * {\n    font-size: 20px;\n    margin-bottom: 15px; }\n\n.action-buttons {\n  margin-top: 30px; }\n\nbody {\n  background-color: #252830;\n  color: #fff;\n  font-family: 'Open Sans'; }\n\na {\n  color: #0275d8; }\n\n.btn, .btn-large {\n  background-color: #0275d8; }\n\n.btn:hover, .btn-large:hover {\n  background-color: #0684f1; }\n\n.btn:focus, .btn-large:focus, .btn-floating:focus {\n  background-color: #0684f1; }\n\ninput[type=text]:not(.browser-default):focus:not([readonly]),\ninput[type=password]:not(.browser-default):focus:not([readonly]),\ninput[type=email]:not(.browser-default):focus:not([readonly]) {\n  border-bottom: 1px solid #0275d8;\n  box-shadow: 0 1px 0 0 #0275d8; }\n\ninput[type=text]:not(.browser-default),\ninput[type=password]:not(.browser-default),\ninput[type=email]:not(.browser-default) {\n  border-bottom: 1px solid #dcdcdc; }\n\ninput[type=text]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=password]:not(.browser-default):focus:not([readonly]) + label,\ninput[type=email]:not(.browser-default):focus:not([readonly]) + label {\n  color: #0275d8; }\n\nselect {\n  color: #000;\n  height: auto; }\n\n.input-field label {\n  color: #bbbbbb; }\n\n.page-title {\n  font-size: 30px;\n  display: inline-block;\n  text-decoration: none;\n  color: #fff; }\n  .page-title span {\n    font-size: 15px;\n    margin-left: 5px;\n    text-transform: uppercase;\n    border-bottom: 3px solid #0275d8;\n    display: inline;\n    position: relative;\n    top: -7px;\n    font-weight: bolder; }\n  .page-title:hover {\n    text-decoration: none;\n    color: #fff; }\n\n.action-btn {\n  margin: 5px 2px 5px 0px; }\n\n.modal {\n  color: #131418; }\n\n.form {\n  background-color: #fff;\n  border-radius: 3px;\n  padding: 20px;\n  margin-top: 20px; }\n\n.form input, .form input::placeholder {\n  color: #252830; }\n\n.page-container p {\n  font-size: 25px; }\n\n.page-header {\n  margin: 30px 0px; }\n\nfooter img {\n  width: 80px; }\n\nfooter section {\n  display: inline-block;\n  margin: 20px 50px 20px 0px;\n  vertical-align: top; }\n\n.search-results .ingroup {\n  background-color: #252830; }\n\n.search-pages {\n  margin: 10px 0px;\n  background-color: #0275d8;\n  padding: 5px;\n  border-radius: 2px;\n  text-align: center; }\n  .search-pages span {\n    padding: 3px 15px;\n    color: #fff;\n    text-decoration: none;\n    display: inline-block;\n    cursor: pointer; }\n\n.search-results > span {\n  color: #ffffff;\n  padding: 5px 12px;\n  background-color: #8e9095;\n  margin: 5px;\n  border-radius: 2px;\n  display: inline-block;\n  min-width: 70px;\n  cursor: pointer; }\n\n.search-results {\n  margin: 15px 0px; }\n\n.search-prev {\n  float: left;\n  border-right: 1px solid white; }\n\n.search-next {\n  float: right;\n  border-left: 1px solid white; }\n\n.message-type {\n  font-size: 10px;\n  padding: 2px 10px;\n  border-radius: 3px;\n  color: #252830;\n  font-weight: bolder; }\n  .message-type.urgent {\n    background-color: #FFC107; }\n  .message-type.critical {\n    background-color: #FF5722; }\n  .message-type.normal {\n    background-color: #CDDC39; }\n\n.message-container {\n  color: #252830;\n  margin-bottom: 15px;\n  display: block;\n  min-height: 30px; }\n\n.message-filter-container {\n  width: 100px;\n  display: inline-block;\n  vertical-align: middle;\n  float: right; }\n\n.message-details, .message, .message-read-list {\n  display: inline-block;\n  padding: 5px;\n  background-color: #fff;\n  border-radius: 3px;\n  font-size: 13px; }\n\n.message-details {\n  width: initial; }\n\n.message {\n  display: block; }\n\n.message > div {\n  padding: 10px;\n  background-color: #f2f1f1;\n  border-radius: 3px;\n  margin-top: 5px;\n  border: 1px solid #e6e5e5; }\n\n.new-message {\n  position: sticky;\n  bottom: -1px;\n  background-color: #252830;\n  padding: 15px 0px;\n  width: 100%;\n  display: inline-block; }\n\n.message-box {\n  display: inline-block;\n  border: none;\n  background-color: #fff;\n  color: #252830;\n  padding: 10px;\n  border-radius: 3px;\n  max-width: 702px;\n  min-width: 100%;\n  height: auto;\n  resize: none; }\n\n.messenger {\n  margin-right: 10px; }\n\n.priority-level {\n  display: inline-block;\n  width: 100px; }\n\n.group-card {\n  color: #252830;\n  background-color: #fff;\n  display: inline-block;\n  padding: 15px;\n  border-radius: 3px;\n  font-weight: bolder;\n  margin: 10px 20px 10px 0px;\n  text-decoration: none; }\n  .group-card:hover {\n    background-color: rgba(255, 255, 255, 0.8); }\n\n.dashboard-menu {\n  display: inline-block;\n  margin-right: 30px;\n  top: 1px;\n  width: 100%; }\n  .dashboard-menu ul {\n    list-style: none;\n    margin: 0px;\n    padding: 0px; }\n  .dashboard-menu li {\n    margin: 10px 0px; }\n  .dashboard-menu li > a {\n    color: #ccc9c9;\n    text-decoration: none;\n    padding: 10px;\n    display: block;\n    font-size: 14px; }\n    .dashboard-menu li > a.active {\n      background-color: #0275d8;\n      border-radius: 3px; }\n      .dashboard-menu li > a.active:hover {\n        color: #ccc9c9; }\n    .dashboard-menu li > a:hover {\n      color: #fff; }\n\n@media (min-width: 630px) {\n  .dashboard-menu {\n    position: sticky;\n    width: 200px; } }\n\n.page-container.container-fluid {\n  min-height: 350px; }\n\n.page-content {\n  display: inline-block;\n  width: 100%; }\n\n.group-unread-count {\n  border-radius: 50%;\n  padding: 5px;\n  font-size: 10px;\n  color: #ffffff;\n  top: -10px;\n  right: -10px;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  display: inline-block;\n  position: relative; }\n\n.badge-danger {\n  background-color: #d9534f; }\n\n.user-greeting {\n  font-size: 12px;\n  padding: 5px;\n  background-color: white;\n  border-radius: 3px;\n  float: right;\n  color: #252830;\n  margin: 10px; }\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc2Nzcy9pbmRleC5zY3NzPzFlZTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0Esd0ZBQXlGOztBQUV6RjtBQUNBLGlDQUFrQyxxQkFBcUIsRUFBRSxjQUFjLHNCQUFzQiwwQkFBMEIsRUFBRSxxQkFBcUIscUJBQXFCLEVBQUUsVUFBVSw4QkFBOEIsZ0JBQWdCLDZCQUE2QixFQUFFLE9BQU8sbUJBQW1CLEVBQUUsc0JBQXNCLDhCQUE4QixFQUFFLGtDQUFrQyw4QkFBOEIsRUFBRSx1REFBdUQsOEJBQThCLEVBQUUscU1BQXFNLHFDQUFxQyxrQ0FBa0MsRUFBRSxtSUFBbUkscUNBQXFDLEVBQUUsNk5BQTZOLG1CQUFtQixFQUFFLFlBQVksZ0JBQWdCLGlCQUFpQixFQUFFLHdCQUF3QixtQkFBbUIsRUFBRSxpQkFBaUIsb0JBQW9CLDBCQUEwQiwwQkFBMEIsZ0JBQWdCLEVBQUUsc0JBQXNCLHNCQUFzQix1QkFBdUIsZ0NBQWdDLHVDQUF1QyxzQkFBc0IseUJBQXlCLGdCQUFnQiwwQkFBMEIsRUFBRSx1QkFBdUIsNEJBQTRCLGtCQUFrQixFQUFFLGlCQUFpQiw0QkFBNEIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFdBQVcsMkJBQTJCLHVCQUF1QixrQkFBa0IscUJBQXFCLEVBQUUsMkNBQTJDLG1CQUFtQixFQUFFLHVCQUF1QixvQkFBb0IsRUFBRSxrQkFBa0IscUJBQXFCLEVBQUUsZ0JBQWdCLGdCQUFnQixFQUFFLG9CQUFvQiwwQkFBMEIsK0JBQStCLHdCQUF3QixFQUFFLDhCQUE4Qiw4QkFBOEIsRUFBRSxtQkFBbUIscUJBQXFCLDhCQUE4QixpQkFBaUIsdUJBQXVCLHVCQUF1QixFQUFFLHdCQUF3Qix3QkFBd0Isa0JBQWtCLDRCQUE0Qiw0QkFBNEIsc0JBQXNCLEVBQUUsNEJBQTRCLG1CQUFtQixzQkFBc0IsOEJBQThCLGdCQUFnQix1QkFBdUIsMEJBQTBCLG9CQUFvQixvQkFBb0IsRUFBRSxxQkFBcUIscUJBQXFCLEVBQUUsa0JBQWtCLGdCQUFnQixrQ0FBa0MsRUFBRSxrQkFBa0IsaUJBQWlCLGlDQUFpQyxFQUFFLG1CQUFtQixvQkFBb0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsd0JBQXdCLEVBQUUsMEJBQTBCLGdDQUFnQyxFQUFFLDRCQUE0QixnQ0FBZ0MsRUFBRSwwQkFBMEIsZ0NBQWdDLEVBQUUsd0JBQXdCLG1CQUFtQix3QkFBd0IsbUJBQW1CLHFCQUFxQixFQUFFLCtCQUErQixpQkFBaUIsMEJBQTBCLDJCQUEyQixpQkFBaUIsRUFBRSxvREFBb0QsMEJBQTBCLGlCQUFpQiwyQkFBMkIsdUJBQXVCLG9CQUFvQixFQUFFLHNCQUFzQixtQkFBbUIsRUFBRSxjQUFjLG1CQUFtQixFQUFFLG9CQUFvQixrQkFBa0IsOEJBQThCLHVCQUF1QixvQkFBb0IsOEJBQThCLEVBQUUsa0JBQWtCLHFCQUFxQixpQkFBaUIsOEJBQThCLHNCQUFzQixnQkFBZ0IsMEJBQTBCLEVBQUUsa0JBQWtCLDBCQUEwQixpQkFBaUIsMkJBQTJCLG1CQUFtQixrQkFBa0IsdUJBQXVCLHFCQUFxQixvQkFBb0IsaUJBQWlCLGlCQUFpQixFQUFFLGdCQUFnQix1QkFBdUIsRUFBRSxxQkFBcUIsMEJBQTBCLGlCQUFpQixFQUFFLGlCQUFpQixtQkFBbUIsMkJBQTJCLDBCQUEwQixrQkFBa0IsdUJBQXVCLHdCQUF3QiwrQkFBK0IsMEJBQTBCLEVBQUUsdUJBQXVCLGlEQUFpRCxFQUFFLHFCQUFxQiwwQkFBMEIsdUJBQXVCLGFBQWEsZ0JBQWdCLEVBQUUsd0JBQXdCLHVCQUF1QixrQkFBa0IsbUJBQW1CLEVBQUUsd0JBQXdCLHVCQUF1QixFQUFFLDRCQUE0QixxQkFBcUIsNEJBQTRCLG9CQUFvQixxQkFBcUIsc0JBQXNCLEVBQUUscUNBQXFDLGtDQUFrQywyQkFBMkIsRUFBRSw2Q0FBNkMseUJBQXlCLEVBQUUsb0NBQW9DLG9CQUFvQixFQUFFLCtCQUErQixxQkFBcUIsdUJBQXVCLG1CQUFtQixFQUFFLEVBQUUscUNBQXFDLHNCQUFzQixFQUFFLG1CQUFtQiwwQkFBMEIsZ0JBQWdCLEVBQUUseUJBQXlCLHVCQUF1QixpQkFBaUIsb0JBQW9CLG1CQUFtQixlQUFlLGlCQUFpQixnQkFBZ0IsaUJBQWlCLHVCQUF1QiwwQkFBMEIsdUJBQXVCLEVBQUUsbUJBQW1CLDhCQUE4QixFQUFFLG9CQUFvQixvQkFBb0IsaUJBQWlCLDRCQUE0Qix1QkFBdUIsaUJBQWlCLG1CQUFtQixpQkFBaUIsRUFBRTs7QUFFaHVMIiwiZmlsZSI6IjAuY2EzNzFiYjUyNDQzZGVmYzIzMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0ZXBzIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7IH1cXG4gIC5zdGVwcyAqIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XFxuXFxuLmFjdGlvbi1idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI4MzA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJzsgfVxcblxcbmEge1xcbiAgY29sb3I6ICMwMjc1ZDg7IH1cXG5cXG4uYnRuLCAuYnRuLWxhcmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjc1ZDg7IH1cXG5cXG4uYnRuOmhvdmVyLCAuYnRuLWxhcmdlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjg0ZjE7IH1cXG5cXG4uYnRuOmZvY3VzLCAuYnRuLWxhcmdlOmZvY3VzLCAuYnRuLWZsb2F0aW5nOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjg0ZjE7IH1cXG5cXG5pbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSksXFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSxcXG5pbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDI3NWQ4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwICMwMjc1ZDg7IH1cXG5cXG5pbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXFxuaW5wdXRbdHlwZT1lbWFpbF06bm90KC5icm93c2VyLWRlZmF1bHQpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjOyB9XFxuXFxuaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwsXFxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSArIGxhYmVsLFxcbmlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCB7XFxuICBjb2xvcjogIzAyNzVkODsgfVxcblxcbnNlbGVjdCB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbi5pbnB1dC1maWVsZCBsYWJlbCB7XFxuICBjb2xvcjogI2JiYmJiYjsgfVxcblxcbi5wYWdlLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICAucGFnZS10aXRsZSBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAyNzVkODtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcbiAgLnBhZ2UtdGl0bGU6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmFjdGlvbi1idG4ge1xcbiAgbWFyZ2luOiA1cHggMnB4IDVweCAwcHg7IH1cXG5cXG4ubW9kYWwge1xcbiAgY29sb3I6ICMxMzE0MTg7IH1cXG5cXG4uZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cXG5cXG4uZm9ybSBpbnB1dCwgLmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjUyODMwOyB9XFxuXFxuLnBhZ2UtY29udGFpbmVyIHAge1xcbiAgZm9udC1zaXplOiAyNXB4OyB9XFxuXFxuLnBhZ2UtaGVhZGVyIHtcXG4gIG1hcmdpbjogMzBweCAwcHg7IH1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIHdpZHRoOiA4MHB4OyB9XFxuXFxuZm9vdGVyIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAyMHB4IDUwcHggMjBweCAwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XFxuXFxuLnNlYXJjaC1yZXN1bHRzIC5pbmdyb3VwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI4MzA7IH1cXG5cXG4uc2VhcmNoLXBhZ2VzIHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuc2VhcmNoLXBhZ2VzIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAzcHggMTVweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uc2VhcmNoLXJlc3VsdHMgPiBzcGFuIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU5MDk1O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uc2VhcmNoLXJlc3VsdHMge1xcbiAgbWFyZ2luOiAxNXB4IDBweDsgfVxcblxcbi5zZWFyY2gtcHJldiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlOyB9XFxuXFxuLnNlYXJjaC1uZXh0IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7IH1cXG5cXG4ubWVzc2FnZS10eXBlIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6ICMyNTI4MzA7XFxuICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuICAubWVzc2FnZS10eXBlLnVyZ2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7IH1cXG4gIC5tZXNzYWdlLXR5cGUuY3JpdGljYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NzIyOyB9XFxuICAubWVzc2FnZS10eXBlLm5vcm1hbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRERDMzk7IH1cXG5cXG4ubWVzc2FnZS1jb250YWluZXIge1xcbiAgY29sb3I6ICMyNTI4MzA7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtaW4taGVpZ2h0OiAzMHB4OyB9XFxuXFxuLm1lc3NhZ2UtZmlsdGVyLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLm1lc3NhZ2UtZGV0YWlscywgLm1lc3NhZ2UsIC5tZXNzYWdlLXJlYWQtbGlzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAxM3B4OyB9XFxuXFxuLm1lc3NhZ2UtZGV0YWlscyB7XFxuICB3aWR0aDogaW5pdGlhbDsgfVxcblxcbi5tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLm1lc3NhZ2UgPiBkaXYge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYxZjE7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNWU1OyB9XFxuXFxuLm5ldy1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IC0xcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyODMwO1xcbiAgcGFkZGluZzogMTVweCAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5tZXNzYWdlLWJveCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyNTI4MzA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWF4LXdpZHRoOiA3MDJweDtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHJlc2l6ZTogbm9uZTsgfVxcblxcbi5tZXNzZW5nZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLnByaW9yaXR5LWxldmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDBweDsgfVxcblxcbi5ncm91cC1jYXJkIHtcXG4gIGNvbG9yOiAjMjUyODMwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5ncm91cC1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XFxuXFxuLmRhc2hib2FyZC1tZW51IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG4gIHRvcDogMXB4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC5kYXNoYm9hcmQtbWVudSB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7IH1cXG4gIC5kYXNoYm9hcmQtbWVudSBsaSB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7IH1cXG4gIC5kYXNoYm9hcmQtbWVudSBsaSA+IGEge1xcbiAgICBjb2xvcjogI2NjYzljOTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICAgIC5kYXNoYm9hcmQtbWVudSBsaSA+IGEuYWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgICAgIC5kYXNoYm9hcmQtbWVudSBsaSA+IGEuYWN0aXZlOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjY2NjOWM5OyB9XFxuICAgIC5kYXNoYm9hcmQtbWVudSBsaSA+IGE6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYzMHB4KSB7XFxuICAuZGFzaGJvYXJkLW1lbnUge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB3aWR0aDogMjAwcHg7IH0gfVxcblxcbi5wYWdlLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQge1xcbiAgbWluLWhlaWdodDogMzUwcHg7IH1cXG5cXG4ucGFnZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmdyb3VwLXVucmVhZC1jb3VudCB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHRvcDogLTEwcHg7XFxuICByaWdodDogLTEwcHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5iYWRnZS1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjsgfVxcblxcbi51c2VyLWdyZWV0aW5nIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY29sb3I6ICMyNTI4MzA7XFxuICBtYXJnaW46IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NsaWVudC9zY3NzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=