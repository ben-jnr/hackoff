import React,{useEffect} from 'react';
import './Game.css';

function Game (){

var _0x1ead=['Count','Stay\x20in\x20the\x20range\x201\x20-\x2010','Computer\x20added\x20','Add\x20number\x20between\x201\x20and\x2010','Mssg','target','Number','innerText','Computer\x20Reached\x20100.\x20You\x20Lose!\x20Try\x20Again','getElementById','value'];(function(_0x591086,_0x1ead13){var _0x31b9b4=function(_0x3a90cb){while(--_0x3a90cb){_0x591086['push'](_0x591086['shift']());}};_0x31b9b4(++_0x1ead13);}(_0x1ead,0x1da));var _0x31b9=function(_0x591086,_0x1ead13){_0x591086=_0x591086-0x0;var _0x31b9b4=_0x1ead[_0x591086];return _0x31b9b4;};const changeHandler=_0x545ae0=>{document[_0x31b9('0x8')](_0x31b9('0x5'))[_0x31b9('0x9')]=_0x545ae0[_0x31b9('0x4')][_0x31b9('0x9')];};const clickHandler=_0x152a74=>{var _0x29167a=parseInt(document[_0x31b9('0x8')]('Number')[_0x31b9('0x9')]);var _0x34c815=parseInt(document['getElementById'](_0x31b9('0xa'))[_0x31b9('0x6')]);if(_0x29167a>=0x1&&_0x29167a<=0xa){if(_0x34c815<=0x64&&_0x34c815>0x0){if(_0x34c815+_0x29167a>=0x64){var _0x5863c8=['h','a','c','k','o','f','f','{','m','i','s','p','a','s','p','e','c','s','i','o','n','_','s','e','d','!','_','r','e','s','t','+','}','s','s','e','a','w','{','r','a','}','t','i','c','z','a','g'];var _0x37eb51='';var _0x1bf0a2;for(_0x1bf0a2=0x0;_0x1bf0a2<=0x7;_0x1bf0a2++)_0x37eb51=_0x37eb51+_0x5863c8[_0x1bf0a2];for(_0x1bf0a2=0x8;_0x1bf0a2<=0xa;_0x1bf0a2++)_0x37eb51=_0x37eb51+_0x5863c8[_0x1bf0a2];for(_0x1bf0a2=0x11;_0x1bf0a2<=0x15;_0x1bf0a2++)_0x37eb51=_0x37eb51+_0x5863c8[_0x1bf0a2];for(_0x1bf0a2=0xb;_0x1bf0a2<=0xd;_0x1bf0a2++)_0x37eb51=_0x37eb51+_0x5863c8[_0x1bf0a2];for(_0x1bf0a2=0x16;_0x1bf0a2<=0x1d;_0x1bf0a2++)_0x37eb51=_0x37eb51+_0x5863c8[_0x1bf0a2];for(_0x1bf0a2=0xe;_0x1bf0a2<=0x10;_0x1bf0a2++)_0x37eb51=_0x37eb51+_0x5863c8[_0x1bf0a2];for(_0x1bf0a2=0x1e;_0x1bf0a2<=0x20;_0x1bf0a2++)_0x37eb51=_0x37eb51+_0x5863c8[_0x1bf0a2];document[_0x31b9('0x8')](_0x31b9('0x3'))[_0x31b9('0x6')]=_0x37eb51;document['getElementById']('Count')[_0x31b9('0x6')]=0x1;return;}document[_0x31b9('0x8')](_0x31b9('0xa'))[_0x31b9('0x6')]=_0x29167a+_0x34c815;var _0x244ed0=0xb-_0x29167a;document[_0x31b9('0x8')](_0x31b9('0xa'))[_0x31b9('0x6')]=parseInt(document[_0x31b9('0x8')](_0x31b9('0xa'))['innerText'])+_0x244ed0;document[_0x31b9('0x8')](_0x31b9('0x3'))['innerText']=_0x31b9('0x1')+_0x244ed0+'\x20,\x20Your\x20turn';if(parseInt(document[_0x31b9('0x8')](_0x31b9('0xa'))[_0x31b9('0x6')])>=0x64){document[_0x31b9('0x8')]('Mssg')[_0x31b9('0x6')]=_0x31b9('0x7');document[_0x31b9('0x8')]('Count')[_0x31b9('0x6')]=0x1;return;}}else{document[_0x31b9('0x8')](_0x31b9('0x3'))[_0x31b9('0x6')]='0\x20<\x20Count\x20<=\x20100';document[_0x31b9('0x8')](_0x31b9('0xa'))[_0x31b9('0x6')]=0x1;}}else document[_0x31b9('0x8')](_0x31b9('0x3'))[_0x31b9('0x6')]=_0x31b9('0x0');};useEffect(()=>{document[_0x31b9('0x8')](_0x31b9('0x5'))['value']=0x1;document[_0x31b9('0x8')](_0x31b9('0x3'))[_0x31b9('0x6')]=_0x31b9('0x2');});
    
    return(
        <div id="Game">
            <div id='Instructions'>
                <h2>The Game Is On</h2>
                You vs Computer [First to reach 100 Wins]
            </div>
            <div>
                <h1 id='Count'>1</h1>
            </div>
            <div id="Mssg">
            </div>
            <div id='Form'>
                <input type='text' id='Number' onChange={changeHandler}></input>
            </div>
            <div>
                <input type='button' value='+' id='NumButton' onClick = {clickHandler}></input>
            </div>
        </div>
    )

}

export default Game;