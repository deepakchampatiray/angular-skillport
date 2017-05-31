"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("taskListController", [
      function(){
          var vm = this;
          vm.taskList = [
                          {
                            "taskTitle": "labore ex velit magna et",
                            "dueDate": "Wed Jun 07 2017 21:36:50 GMT-0400 (Eastern Daylight Time)",
                            "taskDetails": "Pariatur aliquip minim cupidatat reprehenderit consectetur esse voluptate ullamco sint esse culpa voluptate quis fugiat. Sunt proident velit qui in elit id eu. Quis cillum culpa ullamco labore sit proident mollit laboris non commodo labore non duis. Aliqua ullamco minim adipisicing in pariatur."
                          },
                          {
                            "taskTitle": "ea non proident esse sit",
                            "dueDate": "Tue Jun 13 2017 04:20:03 GMT-0400 (Eastern Daylight Time)",
                            "taskDetails": "Occaecat aliquip ullamco laboris ex dolore non cupidatat. Ipsum ipsum adipisicing exercitation officia dolor velit."
                          },
                          {
                            "taskTitle": "qui commodo officia duis ut",
                            "dueDate": "Wed Jun 14 2017 18:21:12 GMT-0400 (Eastern Daylight Time)",
                            "taskDetails": "Adipisicing eu pariatur aliquip incididunt Lorem id sint. Ullamco sunt ipsum cillum laboris eiusmod."
                          },
                          {
                            "taskTitle": "amet aliqua minim quis qui",
                            "dueDate": "Mon Jun 05 2017 12:25:11 GMT-0400 (Eastern Daylight Time)",
                            "taskDetails": "Duis excepteur sunt deserunt amet do est et irure consequat. Duis pariatur eu cillum officia. Officia ullamco exercitation cupidatat aliqua sint duis proident. Dolor exercitation exercitation do dolore excepteur do ipsum. Incididunt laboris ipsum id excepteur nostrud ex fugiat."
                          },
                          {
                            "taskTitle": "in tempor aliquip ex aliquip",
                            "dueDate": "Thu Jun 08 2017 11:42:50 GMT-0400 (Eastern Daylight Time)",
                            "taskDetails": "Aliqua dolore exercitation est Lorem aliquip qui ut dolore qui sint ut nulla. Nulla deserunt ea eu culpa qui. Mollit et sint veniam eiusmod veniam laboris officia incididunt esse dolore aliqua voluptate."
                          },
                          {
                            "taskTitle": "anim minim do tempor excepteur",
                            "dueDate": "Mon Jun 12 2017 19:33:33 GMT-0400 (Eastern Daylight Time)",
                            "taskDetails": "Eiusmod anim est velit nisi. Pariatur ut velit occaecat enim proident id exercitation consectetur eu."
                          },
                          {
                            "taskTitle": "reprehenderit veniam Lorem nisi consequat",
                            "dueDate": "Sun Jun 04 2017 12:02:53 GMT-0400 (Eastern Daylight Time)",
                            "taskDetails": "Do dolore id laborum magna eu non enim ea eu anim magna enim. Do minim velit commodo ipsum do aliqua excepteur quis sit cillum. Nostrud aute qui duis proident incididunt non. Veniam sit pariatur in aliquip nostrud exercitation fugiat ullamco commodo laborum do in laboris consequat. Consectetur elit aliqua excepteur do sunt aute est sunt irure eu elit do."
                          },
                          {
                            "taskTitle": "amet fugiat occaecat excepteur sit",
                            "dueDate": "Fri Jun 09 2017 13:35:51 GMT-0400 (Eastern Daylight Time)",
                            "taskDetails": "Commodo incididunt dolor cupidatat culpa eu qui amet elit. Et ipsum commodo consectetur occaecat aliqua anim tempor exercitation culpa fugiat. Ex ipsum nulla quis fugiat. Qui exercitation sunt duis exercitation Lorem culpa occaecat."
                          },
                          {
                            "taskTitle": "laborum duis enim aliqua deserunt",
                            "dueDate": "Sat Jun 10 2017 21:13:28 GMT-0400 (Eastern Daylight Time)",
                            "taskDetails": "Excepteur mollit culpa nisi sunt et sint irure non ad ex eiusmod culpa eiusmod do. Commodo cillum Lorem nostrud tempor laboris consequat reprehenderit est fugiat aute velit minim."
                          },
                          {
                            "taskTitle": "ea reprehenderit enim ullamco cupidatat",
                            "dueDate": "Wed Jun 07 2017 04:16:41 GMT-0400 (Eastern Daylight Time)",
                            "taskDetails": "Aliquip magna do qui incididunt minim. Culpa nisi cillum dolore enim dolore duis sunt et magna minim. Exercitation pariatur commodo sunt do aute aute. Amet ea ad quis est est. Quis consequat irure reprehenderit labore officia nulla excepteur amet eu aute."
                          }
                        ];

          vm.isShortFormat = false;
      }
    ])
    .filter("toDate", function() {
      return dtStr => new Date(dtStr);
    })
    .filter('wrapFilter', function(){
      return function(str, isOn) {
        var strArr = str.split(' ');
        if(!isOn ||  strArr.length < 20)
          return str;
        else
          return strArr.slice(0, 20).join(' ') + " ...";
      }
    })
    })();
