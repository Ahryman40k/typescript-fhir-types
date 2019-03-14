
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_OperationOutcome_Issue} from './RTTI_OperationOutcome_Issue';




        const mandatory = t.type({
           resourceType: t.string,
issue: t.array(RTTI_OperationOutcome_Issue)
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
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_OperationOutcome:any = t.intersection([mandatory, partial]);
        

export type IOperationOutcome = t.TypeOf<typeof RTTI_OperationOutcome>;
        
        