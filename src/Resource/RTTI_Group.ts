
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Group_Characteristic} from './RTTI_Group_Characteristic';
import {RTTI_Group_Member} from './RTTI_Group_Member';

export enum GroupTypeKind {
                person = 'person',
animal = 'animal',
practitioner = 'practitioner',
device = 'device',
medication = 'medication',
substance = 'substance'
            }
const GroupTypeKindKeys = t.keyof({
                [GroupTypeKind.person]: null,
[GroupTypeKind.animal]: null,
[GroupTypeKind.practitioner]: null,
[GroupTypeKind.device]: null,
[GroupTypeKind.medication]: null,
[GroupTypeKind.substance]: null
            });


        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
active: t.boolean,
_active: RTTI_Element,
type: GroupTypeKindKeys,
_type: RTTI_Element,
actual: t.boolean,
_actual: RTTI_Element,
code: RTTI_CodeableConcept,
name: t.string,
_name: RTTI_Element,
quantity: t.number,
_quantity: RTTI_Element,
characteristic: t.array(RTTI_Group_Characteristic),
member: t.array(RTTI_Group_Member)
        });
        

        export var RTTI_Group:any = t.intersection([mandatory, partial]);
        

export type IGroup = t.TypeOf<typeof RTTI_Group>;
        
        