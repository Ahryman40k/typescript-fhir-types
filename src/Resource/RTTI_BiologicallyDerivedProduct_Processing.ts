
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
description: t.string,
_description: RTTI_Element,
procedure: RTTI_CodeableConcept,
additive: RTTI_Reference,
timeDateTime: t.string,
_timeDateTime: RTTI_Element,
timePeriod: RTTI_Period
        });
        

        export var RTTI_BiologicallyDerivedProduct_Processing:any = t.intersection([mandatory, partial]);
        

export type IBiologicallyDerivedProduct_Processing = t.TypeOf<typeof RTTI_BiologicallyDerivedProduct_Processing>;
        
        