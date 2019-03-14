
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_SubstanceAmount} from './RTTI_SubstanceAmount';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
degree: RTTI_CodeableConcept,
amount: RTTI_SubstanceAmount
        });
        

        export var RTTI_SubstancePolymer_DegreeOfPolymerisation:any = t.intersection([mandatory, partial]);
        

export type ISubstancePolymer_DegreeOfPolymerisation = t.TypeOf<typeof RTTI_SubstancePolymer_DegreeOfPolymerisation>;
        
        