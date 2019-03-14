
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum CodeSystem_PropertyTypeKind {
                code = 'code',
coding = 'coding',
string = 'string',
integer = 'integer',
boolean = 'boolean',
dateTime = 'dateTime',
decimal = 'decimal'
            }
const CodeSystem_PropertyTypeKindKeys = t.keyof({
                [CodeSystem_PropertyTypeKind.code]: null,
[CodeSystem_PropertyTypeKind.coding]: null,
[CodeSystem_PropertyTypeKind.string]: null,
[CodeSystem_PropertyTypeKind.integer]: null,
[CodeSystem_PropertyTypeKind.boolean]: null,
[CodeSystem_PropertyTypeKind.dateTime]: null,
[CodeSystem_PropertyTypeKind.decimal]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
uri: t.string,
_uri: RTTI_Element,
description: t.string,
_description: RTTI_Element,
type: CodeSystem_PropertyTypeKindKeys,
_type: RTTI_Element
        });
        

        export var RTTI_CodeSystem_Property:any = t.intersection([mandatory, partial]);
        

export type ICodeSystem_Property = t.TypeOf<typeof RTTI_CodeSystem_Property>;
        
        