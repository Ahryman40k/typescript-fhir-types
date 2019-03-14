
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum StructureDefinition_ContextTypeKind {
                fhirpath = 'fhirpath',
element = 'element',
extension = 'extension'
            }
const StructureDefinition_ContextTypeKindKeys = t.keyof({
                [StructureDefinition_ContextTypeKind.fhirpath]: null,
[StructureDefinition_ContextTypeKind.element]: null,
[StructureDefinition_ContextTypeKind.extension]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: StructureDefinition_ContextTypeKindKeys,
_type: RTTI_Element,
expression: t.string,
_expression: RTTI_Element
        });
        

        export var RTTI_StructureDefinition_Context:any = t.intersection([mandatory, partial]);
        

export type IStructureDefinition_Context = t.TypeOf<typeof RTTI_StructureDefinition_Context>;
        
        