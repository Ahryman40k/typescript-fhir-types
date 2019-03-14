
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           country: RTTI_CodeableConcept,
language: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
jurisdiction: RTTI_CodeableConcept
        });
        

        export var RTTI_MedicinalProduct_CountryLanguage:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProduct_CountryLanguage = t.TypeOf<typeof RTTI_MedicinalProduct_CountryLanguage>;
        
        