Typescript ka real faida = compile-time safety, galti se bachaata hai, code stable banaata hai, time save krta hai  
Javascript sirf run-time pe error deta hai

Javascript = run-time language  
Typescript = development-time safety layer (safety & development experience provide krta hai)

- typescript = programming language to address shortcomings of JS. It is actually javascript with type checking
- benifits = type checking, code completion, refactoring and additional new features
- `npm i -g typescript` = command to install typescript globally
- `tsc index.tsx` = command used to compile ts file
- compile krne ke baad eik index.js file banti hai jis mein saare compiled code hota hota hai aur code run wahi se hoga yaani to see output you will have to run: `node index.js`
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