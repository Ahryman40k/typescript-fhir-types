
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
operationType: RTTI_CodeableConcept,
authorisationReferenceNumber: RTTI_Identifier,
effectiveDate: t.string,
_effectiveDate: RTTI_Element,
confidentialityIndicator: RTTI_CodeableConcept,
manufacturer: t.array(RTTI_Reference),
regulator: RTTI_Reference
        });
        

        export var RTTI_MedicinalProduct_ManufacturingBusinessOperation:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProduct_ManufacturingBusinessOperation = t.TypeOf<typeof RTTI_MedicinalProduct_ManufacturingBusinessOperation>;
        
        