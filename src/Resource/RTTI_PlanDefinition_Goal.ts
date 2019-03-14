
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_RelatedArtifact} from './RTTI_RelatedArtifact';
import {RTTI_PlanDefinition_Target} from './RTTI_PlanDefinition_Target';




        const mandatory = t.type({
           description: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
category: RTTI_CodeableConcept,
priority: RTTI_CodeableConcept,
start: RTTI_CodeableConcept,
addresses: t.array(RTTI_CodeableConcept),
documentation: t.array(RTTI_RelatedArtifact),
target: t.array(RTTI_PlanDefinition_Target)
        });
        

        export var RTTI_PlanDefinition_Goal:any = t.intersection([mandatory, partial]);
        

export type IPlanDefinition_Goal = t.TypeOf<typeof RTTI_PlanDefinition_Goal>;
        
        