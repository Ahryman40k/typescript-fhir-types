
# typescript-fhir-types
Typescript / Javascript object model for FHIR standard
Model follows FHIR R4 specifications.

[![npm version](https://badge.fury.io/js/%40ahryman40k%2Fts-fhir-types.svg)](https://badge.fury.io/js/%40ahryman40k%2Fts-fhir-types)
[![Build Status](https://travis-ci.com/Ahryman40k/typescript-fhir-types.svg?branch=4.0.0)](https://travis-ci.com/Ahryman40k/typescript-fhir-types)
[![codecov](https://codecov.io/gh/Ahryman40k/typescript-fhir-types/branch/4.0.0/graph/badge.svg)](https://codecov.io/gh/Ahryman40k/typescript-fhir-types)
[![Known Vulnerabilities](https://snyk.io/test/github/Ahryman40k/typescript-fhir-types/badge.svg)](https://snyk.io/test/github/Ahryman40k/typescript-fhir-types) 
[![Project dependencies overview(Beta)](https://david-dm.org/ahryman40k/typescript-fhir-types.svg)]() 
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Definitions are io-ts based interfaces. See [io-ts github project](https://github.com/gcanti/io-ts) for further details. This means you can check your types at runtime.
  
## Installation
```
npm i -S @ahryman40k/ts-fhir-types
```
or
```
yarn install @ahryman40k/ts-fhir-types
```

## articles
[A medium article: Handle FHIR objects with Typescript](https://medium.com/@ahryman40k.gb/handle-fhir-objects-in-typescript-and-javascript-7110f5a0686f)

## Examples

let's imagine your server or your application is receiving a FHIR Resource like an observation from a server or any external system

```typescript
import { R4 } from '@ahryman40k/ts-fhir-types'
import { either as E } from 'fp-ts'

const json = {
    "resourceType":"Patient"   
 };

const  validationResult = R4.RTTI_Patient.decode(json)

if ( E.isLeft( validationResult) ) {
    console.log(validationResult.left);
}

if ( E.isRight( validationResult) ) {
    console.log(validationResult.right);
}
```

There is 2 points:
* You would like to have strongly typed types (__typescript__)
* You would validate data returned from server and test their validity against FHIR standard
  

FHIR resources are also provided as interface, so you can inherit and implement your own object implementation. 

Please don't hesitate to give me advice and feedback !


