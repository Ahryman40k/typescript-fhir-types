
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum CapabilityStatement_DocumentModeKind {
                producer = 'producer',
consumer = 'consumer'
            }
const CapabilityStatement_DocumentModeKindKeys = t.keyof({
                [CapabilityStatement_DocumentModeKind.producer]: null,
[CapabilityStatement_DocumentModeKind.consumer]: null
            });


        const mandatory = t.type({
           profile: t.string
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
mode: CapabilityStatement_DocumentModeKindKeys,
_mode: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element
        });
        

        export var RTTI_CapabilityStatement_Document:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_Document = t.TypeOf<typeof RTTI_CapabilityStatement_Document>;
        
        