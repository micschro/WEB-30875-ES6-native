import {MyClass} from '../lib/subdir/module.js' // no documentation from .d.ts available, works in browser
// import {MyClass} from 'subdir/module' // documentation from .d.ts available, needs post-processing to work in browser
let myClass = new MyClass()
myClass.doStuff()