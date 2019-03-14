
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
intendedUse: RTTI_CodeableConcept,
indication: RTTI_CodeableConcept,
status: RTTI_CodeableConcept,
date: t.string,
_date: RTTI_Element,
species: RTTI_CodeableConcept
        });
        

        export var RTTI_MedicinalProduct_SpecialDesignation:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProduct_SpecialDesignation = t.TypeOf<typeof RTTI_MedicinalProduct_SpecialDesignation>;
        
        