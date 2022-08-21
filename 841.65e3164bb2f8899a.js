"use strict";(self.webpackChunkdart_scores_counter=self.webpackChunkdart_scores_counter||[]).push([[841],{3841:(F,m,o)=>{o.r(m),o.d(m,{GameStatusModule:()=>I});var r=o(6019),u=o(6511),i=o(607),h=o(8053),l=o(4835),t=o(3668),b=o(3405);let c=(()=>{class n{constructor(){this.points=0,this.pointsSubject=new b.xQ,this.shouldPassData=!1}setPoints(e){this.points=Number(e),this.pointsSubject.next(this.points)}setPointsSubject(){this.pointsSubject.next(this.points)}setPassData(e){this.shouldPassData=e}getPoints(){return this.pointsSubject.asObservable()}getShouldPassDataFlag(){return this.shouldPassData}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=o(1346);o(3779);let P=(()=>{class n{constructor(e){this.gameStore=e,this.points=0,this.legs={mode:"first to",value:1},this.sets={mode:"first to",value:1},this.gameConfigSubscription=new v.w}ngOnInit(){this.subscribeToGameConfig()}ngOnDestroy(){this.gameConfigSubscription.unsubscribe()}subscribeToGameConfig(){this.gameConfigSubscription=this.gameStore.pipe((0,i.Ys)(l.RO)).subscribe(e=>{this.points=e.points,this.legs=e.legs,this.sets=e.sets})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-info-bar"]],decls:11,vars:4,consts:[[1,"game-info-bar"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"br"),t._uU(2," Legs: "),t.TgZ(3,"b"),t._uU(4),t.qZA(),t._UZ(5,"br"),t._uU(6," Sets: "),t.TgZ(7,"b"),t._uU(8),t.qZA(),t._UZ(9,"br"),t._UZ(10,"br"),t.qZA()),2&e&&(t.xp6(4),t.AsE("",null==a.legs?null:a.legs.mode," ",null==a.legs?null:a.legs.value,""),t.xp6(4),t.AsE("",null==a.sets?null:a.sets.mode," ",null==a.sets?null:a.sets.value,""))},styles:[".game-info-bar[_ngcontent-%COMP%]{text-align:center;background-color:#c5f1c5cc}"]}),n})();function C(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",4),t.NdJ("click",function(){const g=t.CHM(e).$implicit;return t.oxw().clickButton(g)}),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.qZA()}if(2&n){const e=s.$implicit;t.xp6(2),t.Oqu(e)}}let S=(()=>{class n{constructor(e){this.keyboardDataUpdaterService=e,this.currentPoints="",this.buttonNums=["1","2","3","4","5","6","7","8","9","CLR","0",">>"],this.passDataEvent=new t.vpe}ngOnInit(){}clickButton(e){switch(e){case"CLR":this.currentPoints=this.currentPoints.slice(0,-1);break;case">>":console.log("passed to store",this.currentPoints),this.keyboardDataUpdaterService.setPoints(this.currentPoints),this.currentPoints="";break;default:this.currentPoints+=e}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-keyboard"]],outputs:{passDataEvent:"passDataEvent"},decls:5,vars:2,consts:[[1,"keyboard-area"],[1,"keyboard-area__inserted-number"],[1,"keyboard","keyboard-area__keyboard"],["class","keyboard__single-button",3,"click",4,"ngFor","ngForOf"],[1,"keyboard__single-button",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"p",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,C,3,1,"div",3),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Oqu(a.currentPoints),t.xp6(2),t.Q6J("ngForOf",a.buttonNums))},directives:[r.sg],styles:[".keyboard-area[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;grid-gap:.1em;gap:.1em}.keyboard-area__inserted-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:50%;height:2em;font-size:2em;background-color:#fff;border:1px solid black;margin:.1em;background-color:gold}.keyboard[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(4,1fr);background-color:#fff;margin:.15em;width:100%}.keyboard__single-button[_ngcontent-%COMP%]{display:flex;justify-content:center;border:.5px solid rgb(0,0,0)}.keyboard__single-button[_ngcontent-%COMP%]:nth-last-child(1){background-color:#adff2f}.keyboard__single-button[_ngcontent-%COMP%]:nth-last-child(3){background-color:#da2e18}"]}),n})();var d=o(5722),f=o(9204),Z=o(6143),D=o(3634);function X(n,s){1&n&&t._UZ(0,"img",5)}function _(n,s){1&n&&t._UZ(0,"img",6)}function T(n,s){1&n&&t._UZ(0,"img",7)}const O=function(n){return{"background-color":n}};let U=(()=>{class n{constructor(e,a){this.gameStore=e,this.keyboardDataUpdaterService=a,this.playerData=(0,Z.m)("",501),this.updatePointsFlag=!1,this.scoredPoints=0,this.gameConfig=void 0}ngOnInit(){this.gameStore.pipe((0,i.Ys)(l.RO),(0,d.b)(e=>this.gameConfig=e),(0,f.w)(()=>this.gameStore.pipe((0,i.Ys)(l.s$))),(0,d.b)(e=>{const a=e.players.find(p=>p.name===this.playerData.name);a&&(this.playerData=a)}),(0,f.w)(()=>this.keyboardDataUpdaterService.getPoints())).subscribe(e=>{this.scoredPoints=e,console.log("scoredPoints in player",this.playerData.name," : ",e),this.gameConfig&&this.playerData.toThrow&&(console.log(this.playerData.name,this.playerData.toThrow),this.gameStore.dispatch(D.Lm(this.playerData.name,this.scoredPoints,this.gameConfig)),console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"))})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.yh),t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-player-info"]],inputs:{playerData:"playerData",updatePointsFlag:"updatePointsFlag"},decls:15,vars:12,consts:[[1,"player-info",3,"ngStyle"],[1,"head__game-status-icons"],["class","player-to-throw","src","https://img.icons8.com/fluency/48/000000/play.png",4,"ngIf"],["class","player-to-throw","src","https://img.icons8.com/ios-filled/50/000000/circled.png",4,"ngIf"],["class","player-to-throw","src","https://img.icons8.com/emoji/48/000000/green-circle-emoji.png",4,"ngIf"],["src","https://img.icons8.com/fluency/48/000000/play.png",1,"player-to-throw"],["src","https://img.icons8.com/ios-filled/50/000000/circled.png",1,"player-to-throw"],["src","https://img.icons8.com/emoji/48/000000/green-circle-emoji.png",1,"player-to-throw"]],template:function(e,a){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.YNc(3,X,1,0,"img",2),t.YNc(4,_,1,0,"img",3),t.YNc(5,T,1,0,"img",4),t.qZA(),t.TgZ(6,"h2"),t._uU(7),t.ALo(8,"uppercase"),t.qZA(),t.TgZ(9,"h1"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngStyle",t.VKq(10,O,a.playerData.toThrow?"gold":"white")),t.xp6(2),t.Q6J("ngIf",a.playerData.toStart),t.xp6(1),t.Q6J("ngIf",!a.playerData.toThrow),t.xp6(1),t.Q6J("ngIf",a.playerData.toThrow),t.xp6(2),t.Oqu(t.lcZ(8,8,a.playerData.name)),t.xp6(3),t.Oqu(a.playerData.currentPoints),t.xp6(2),t.hij("Legs: ",a.playerData.legs,""),t.xp6(2),t.hij("Sets: ",a.playerData.sets,""))},directives:[r.PC,r.O5],pipes:[r.gd],styles:[".player-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background-color:#fffc;border:.5px solid black;margin:.1em}.player-points[_ngcontent-%COMP%]{background-color:gold;font-size:1.5em;color:#000;border:2px solid salmon;text-align:center;margin:.1em}.player-info__start-info[_ngcontent-%COMP%]{font-size:.8em}.player-to-throw[_ngcontent-%COMP%]{width:1.25em;height:1.25em}.head[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;justify-items:center;min-width:50%}.head__game-status-icons[_ngcontent-%COMP%]{display:flex;align-items:center}h2[_ngcontent-%COMP%]{font-size:2em}"]}),n})();function x(n,s){if(1&n&&(t.TgZ(0,"div",3),t._UZ(1,"app-player-info",4),t.qZA()),2&n){const e=s.$implicit,a=t.oxw();t.xp6(1),t.Q6J("playerData",e)("updatePointsFlag",a.updatePoints)}}const k=[{path:"",component:(()=>{class n{constructor(e,a){this.gameStore=e,this.keyboardDataUpdaterService=a,this.allPlayersStatus=[],this.updatePoints=!1}ngOnInit(){this.getPlayersStatus(),this.getKeyboardUpdate()}getPlayersStatus(){this.gameStore.pipe((0,i.Ys)(l.s$)).pipe((0,h.U)(e=>e.players)).subscribe(e=>{this.allPlayersStatus=e})}getKeyboardUpdate(){}passDataEvent(e){console.log("pass data event = ",e),"stop"===e.toString()&&(console.log("a"),this.updatePoints=!this.updatePoints),this.updatePoints=!0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.yh),t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-status"]],decls:4,vars:1,consts:[[1,"players-list"],["class","players-list__single-item",4,"ngFor","ngForOf"],[3,"passDataEvent"],[1,"players-list__single-item"],[3,"playerData","updatePointsFlag"]],template:function(e,a){1&e&&(t._UZ(0,"app-game-info-bar"),t.TgZ(1,"div",0),t.YNc(2,x,2,2,"div",1),t.qZA(),t.TgZ(3,"app-keyboard",2),t.NdJ("passDataEvent",function(g){return a.passDataEvent(g)}),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",a.allPlayersStatus))},directives:[P,r.sg,S,U],styles:[".players-list[_ngcontent-%COMP%]{display:flex}.players-list__single-item[_ngcontent-%COMP%]{flex-grow:1}"]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(k)],u.Bz]}),n})();var y=o(9010),A=o(138),w=o(7706);let I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,M,A.c,w.lN,y.u5,y.UX]]}),n})()}}]);