Skipped only 16th step assignment
- extensions = javascript and typescript nightly, material icon theme, prettier code formatter, prettier eslint, pretty typescript errors
- Typescript ka real faida = compile-time safety, galti se bachaata hai, code stable banaata hai, time save krta hai  
- Javascript sirf run-time pe error deta hai; it's run-time language  
- Typescript = development-time safety layer (safety & development experience provide krta hai)
- typescript = programming language to address shortcomings of JS. It is actually javascript with type checking
- benifits = type checking, code completion, refactoring and additional new features
- `npm i -g typescript` = command to install typescript globally
- `tsc index.tsx` = command used to compile ts file
- `tsc --init` = command jis se tsconfig.js file banti hai default settings ke sth
- compile krne ke baad eik index.js file banti hai jis mein saare compiled code hota hota hai aur code run wahi se hoga yaani to see output you will have to run: `node index.js` ya phr agr config file bangai hai aur wahan rootDir & outDir hai to compile ke liye `tsc` and to see output, run: `node dist/index.js`
- jb ham variable declare karen aur initialize naa krna ho to usko type `any` dete hain, `any` means any type of values but har waqt is type ko use krne se type checking ka feature nhi milta aur typescript ke use krne ka major reason bekaar hojaata hai
- jb kbhi project mein bht saare `any` put krne hon uske liye ham config file mein noImplicitAny ko false kr skte hain aur phr type 'any' put naa krne se bhi typescript error nhi deta 
- type dene se eik benifit ye milta hai jese hamne array ko numbers type dia ab hamein array methods mein each element ke liye specifically number waale methods milte hain through vscode intellisense
- typescript has another type called tuples which is a fixed length array jis mein elements ki type different hoti hain aur iska syntax kch aesa hota hai: 
``` let user: [number, string] = [1, "Anas"]; ```
- tuples are useful when we have only 2 values like key value pair
- enums = eik aur built-in-type hai typescript mein jo constants ki list represent krti hai, ye bilkul wesa hi hai jese ham 3 constant variables declare krte hain, enum unko eik sth eik list mein rkhta hai key-value pair ki tarh aur value 0 se start hoti hai by default. To change the value ham pehle waale const ko khud se apni value de skte hain. we use PascalCase for enums
- void = means the function does not return a value
- typescript khud se bhi bht si types ka andaaza lagaa leta hai jese function ki return value type agr hai to type define kro wrna void hai. But as a best practice hamein hamesha functions mein type define krni hai
- functions ke paramter ko optional banaane ke liye ham uske aage '?' lagaate hain jis se wo optional ban jaata hai but is se acha hai ke ham usko eik default value de den
- functions use krte hue (noUnusedLocals, noUnusedParameters, noImplicitReturns) in teeno ko enable krna best practice hai
- sometimes hamein kch property read-only chahiye hoti hain so that ham galti se baad mein change naa krden iske liye we use readonly modifier
- objects ke liye type define krne se code thora messy hojaata hai aur agr hamein same objects hi banaane hain to kb tk aese types repeat krte rahenge so in sbke liye use hota hai type aliases jis se ham wo type annotate waala poora obj eik alag jaga store krwaakr phr har obj ko pass krte hain
- union types = ka use krke ham variable ya function parameter ko eik se zaada types de skte hain
- intersection type = yaani jis mein dono types aayen iske liye `&` symbol use hota hai
- literal types = variable mein assign hone waali values ko limit krne ke liye ham use krte hain, ye exact aur specific hote hain. is mein union type ka use krke ham do teen exact options banaa skte hain jese 50 ya 100
- nullable types = yaani ham parameters mein union use krke null keyword deskte hain aur iske base pr apna code likh skte hain so that null ke aane pr code crash naa ho
- optional chaining = ye hamaari if conditions bachaata hai aur sirf jb hi work karega yaani aage brhega jb value null ya undefined naa ho. so '?' followed by chaining (dot) operator is called optional property access operator
- optional element access operator = this is useful when dealing with arrays 
- enums ka faida code safety + readability + auto-complete ka hai, run-time output ka nhi
- Industry mein modern TS projects enums kam use karte hain, string unions or literal types zyada use hote hain because:
    - Enums JS output mein extra code banate hain (non-const enum case)
    - String unions lightweight hote hain
    - Auto-complete same hota hai (unions mein bhi)  
- Agr readable output chahiye = union types best  
- Agr strict, numeric, optimized enum chahiye = const enum use kro
- interfaces = use hote hain component props, object structure aur API responses ke liye jbke types use krte hain for unions, string combinations and literal types
- Dono ka kaam similar hai but:
    - type = flexible power, rules, combinations, unions
    - interface = objects ka blueprint
- interface extend hota rehta hai ye iski unique ability hai:  
```
interface Person {
  name: string;
}

interface Person {
  age: number;
}
```
- dono merge hojaate hain: final interface = `{ name: string; age: number }`
- generic = reusbale + type-safe yaani ye eik tareeqa hai type ko dynamic banaane ka, koi bhi type dedo ye usi tarh treat karega so generic means type  ko input ke hisaab se dynamic banaana
- but yahan `any` use krne se eik to auto-complete nhi milta aur doosra value ka type hi khatam hojaata hai jbke generics ke sth compiler automatically calling ke waqt detect krleta hai
- typescript aksar arguments ke base pr generic type ka andaaza lagaa leta hai wrna ham khud se bhi type define kr skte hain
- ab kbhi kbhi ham chahte hain ke generic to ho but kch rules follow karay isko kehte hain generic constraint.
- utility types = typescript ke pre-built tools jo types ko modify krte hain
  - Partial type = sb properties optional krdeta hai
  - Required type = sb properties required krdeta hai
  - Readonly types = properties readonly bnte hain, unchangeable krdeta hai
  - Pick <Type, Keys> = sirf selected properties rkhta hai
  - Omit <Type, Keys> = kch properties hataa deta hai
- Har .ts file apna ek module hota hai mtlb ham file ke andr jo bhi chz export karengay usko kisi doosri file mein import krke use kr skte hain
- named export = mein import brackets `{}` use hote hain
- default export = eik file mein sirf eik hi hota hai (most imp for React), is mein brackets nhi aate aur import krte hue naam apni marzi ka rkh skte hain
- `tsc --watch` = command jiksa use krke phr baar baar compile krne ki need nhi parti
- programming langugaes 2 tarh ki hoti hai statically typed aur dynamically typed language. Statically typed language jese c++, java etc mein variable ki type declare krna requirement hoti hai compile time ya coding krte waqt. Aur dynamically types language jese javascript aur ruby etc ye allow krte hain ke variable dynamic types rkhe aur runtime ke waqt decide kare aur execution ke waqt change bhi hoskta hai isi waja se flexibility ke sth sth errors bhi aate hain
- transpolation = jb typescript compile kare code ko into js
- dynamic type determination = typescript automatically khud se bhi variable ki type ka andaaza lagaa leta hai based on declaration but phr bhi ye recommend nhi hai
- defining types through type annotation is best practice
- `!` ka matlab = I promise ye value undefined nahi hoga.
- never = type un values ko represent krta hai jo kbhi nhi hongay jese infinity loop yaani function jo kbhi return nhi karega bcuz of infinity loop or bcuz of throwing error msg
- type aliases = iska use krke ham apne custom types banaate hain jese string, number, null etc ham apna eik alag se banaa skte hain
- class access modifiers typescript mein 3 tarh ke hain;
  - public = inside and outside from classes dono se access kr skte hain 
  - private = iside mein hi access kr skte hain, outside ke liye koi method hona zaroori hai
  - protected = class aur uski sub classes mein accessible hota hai bs not accesible outside.

**Typescript with Reactjs**
- for components we use = `React.FC` type like `const App: React.FC`
- for setState function we use this type based on jo bhi is function ko milega jese for string = `React.Dispatch<React.SetStateAction<string>>` 
- useRef ke liye ham html element type dete hain aur ye type hamein easily element pr hover krne se mil jaati hai jese `useRef<HTMlInputElement>`
- dependencies in typescript = jb bhi ham typescript use krte hain to koi bhi library ya dependency install krte waqt uski uski types bhi install krna zaroori hai