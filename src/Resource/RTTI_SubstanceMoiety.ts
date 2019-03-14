
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_SubstanceAmount} from './RTTI_SubstanceAmount';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
role: RTTI_CodeableConcept,
identifier: RTTI_Identifier,
name: t.string,
_name: RTTI_Element,
stereochemistry: RTTI_CodeableConcept,
opticalActivity: RTTI_CodeableConcept,
molecularFormula: t.string,
_molecularFormula: RTTI_Element,
amount: RTTI_SubstanceAmount
        });
        

        export var RTTI_SubstanceMoiety:any = t.intersection([mandatory, partial]);
        

export type ISubstanceMoiety = t.TypeOf<typeof RTTI_SubstanceMoiety>;
        
        