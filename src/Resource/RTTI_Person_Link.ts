
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';

export enum Person_LinkAssuranceKind {
                level1 = 'level1',
level2 = 'level2',
level3 = 'level3',
level4 = 'level4'
            }
const Person_LinkAssuranceKindKeys = t.keyof({
                [Person_LinkAssuranceKind.level1]: null,
[Person_LinkAssuranceKind.level2]: null,
[Person_LinkAssuranceKind.level3]: null,
[Person_LinkAssuranceKind.level4]: null
            });


        const mandatory = t.type({
           target: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
assurance: Person_LinkAssuranceKindKeys,
_assurance: RTTI_Element
        });
        

        export var RTTI_Person_Link:any = t.intersection([mandatory, partial]);
        

export type IPerson_Link = t.TypeOf<typeof RTTI_Person_Link>;
        
        