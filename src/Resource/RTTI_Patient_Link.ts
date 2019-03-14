
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';

export enum Patient_LinkTypeKind {
                replacedBy = 'replacedBy',
replaces = 'replaces',
refer = 'refer',
seealso = 'seealso'
            }
const Patient_LinkTypeKindKeys = t.keyof({
                [Patient_LinkTypeKind.replacedBy]: null,
[Patient_LinkTypeKind.replaces]: null,
[Patient_LinkTypeKind.refer]: null,
[Patient_LinkTypeKind.seealso]: null
            });


        const mandatory = t.type({
           other: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: Patient_LinkTypeKindKeys,
_type: RTTI_Element
        });
        

        export var RTTI_Patient_Link:any = t.intersection([mandatory, partial]);
        

export type IPatient_Link = t.TypeOf<typeof RTTI_Patient_Link>;
        
        