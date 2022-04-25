import {writable} from 'svelte/store'

let data = {'6210742497':{number:'6210742497',pin:'1234',name:'จิรภาส คำศรีสุข',quotasf210:[],quotasf220:[],quotasf230:[]},
           '6310742405':{number:'6310742405',pin:'1234',name:'อาภาภัทร บุญฉลวย',quotasf210:[],quotasf220:[],quotasf230:[]},
           '6410742529':{number:'6410742529',pin:'1234',name:'สิระ อินสัน',quotasf210:[],quotasf220:[],quotasf230:[]},
           '6410742578':{number:'6410742578',pin:'1234',name:'ชยพัทธ์ กุลรัตนรักษ์',quotasf210:[],quotasf220:[],quotasf230:[]},
           '6410742701':{number:'6410742701',pin:'1234',name:'รัชพล แซ่โง้ว',quotasf210:[],quotasf220:[],quotasf230:[]}}

let a = {'sf220':{name:'SF220', quota:'3'},
        'sf210':{name:'SF210', quota:'3'},
        'sf230':{name:'SF230', quota:'3'}}




export const accounts = writable(data);
export const islogin = writable(false);
export const mode = writable('');
export const account = writable('');
export const subjects = writable(a);
export const subject = writable('');