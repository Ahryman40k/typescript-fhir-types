
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: RTTI_Identifier,
datePeriod: RTTI_Period,
dateDateTime: t.string,
_dateDateTime: RTTI_Element,
application: t.array(RTTI_MedicinalProductAuthorization_Procedure)
        });
        

        export var RTTI_MedicinalProductAuthorization_Procedure:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductAuthorization_Procedure = t.TypeOf<typeof RTTI_MedicinalProductAuthorization_Procedure>;
        
        