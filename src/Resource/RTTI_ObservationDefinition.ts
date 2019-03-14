
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_ObservationDefinition_QuantitativeDetails} from './RTTI_ObservationDefinition_QuantitativeDetails';
import {RTTI_ObservationDefinition_QualifiedInterval} from './RTTI_ObservationDefinition_QualifiedInterval';




        const mandatory = t.type({
           resourceType: t.string,
code: RTTI_Coding
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
modifierExtension: t.array(RTTI_Extension),
category: RTTI_Coding,
permittedDataType: t.array(RTTI_Coding),
multipleResultsAllowed: t.boolean,
_multipleResultsAllowed: RTTI_Element,
method: RTTI_CodeableConcept,
preferredReportName: t.string,
_preferredReportName: RTTI_Element,
quantitativeDetails: RTTI_ObservationDefinition_QuantitativeDetails,
qualifiedInterval: t.array(RTTI_ObservationDefinition_QualifiedInterval),
validCodedValueSet: t.string,
_validCodedValueSet: RTTI_Element,
normalCodedValueSet: t.string,
_normalCodedValueSet: RTTI_Element,
abnormalCodedValueSet: t.string,
_abnormalCodedValueSet: RTTI_Element,
criticalCodedValueSet: t.string,
_criticalCodedValueSet: RTTI_Element
        });
        

        export var RTTI_ObservationDefinition:any = t.intersection([mandatory, partial]);
        

export type IObservationDefinition = t.TypeOf<typeof RTTI_ObservationDefinition>;
        
        