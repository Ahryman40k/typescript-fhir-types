
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_SubstancePolymer_StartingMaterial} from './RTTI_SubstancePolymer_StartingMaterial';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
ratioType: RTTI_CodeableConcept,
startingMaterial: t.array(RTTI_SubstancePolymer_StartingMaterial)
        });
        

        export var RTTI_SubstancePolymer_MonomerSet:any = t.intersection([mandatory, partial]);
        

export type ISubstancePolymer_MonomerSet = t.TypeOf<typeof RTTI_SubstancePolymer_MonomerSet>;
        
        