
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Address} from './RTTI_Address';
import {RTTI_Age} from './RTTI_Age';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Count} from './RTTI_Count';
import {RTTI_Distance} from './RTTI_Distance';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_HumanName} from './RTTI_HumanName';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Money} from './RTTI_Money';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Ratio} from './RTTI_Ratio';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_SampledData} from './RTTI_SampledData';
import {RTTI_Signature} from './RTTI_Signature';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_ParameterDefinition} from './RTTI_ParameterDefinition';
import {RTTI_DataRequirement} from './RTTI_DataRequirement';
import {RTTI_RelatedArtifact} from './RTTI_RelatedArtifact';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_Contributor} from './RTTI_Contributor';
import {RTTI_TriggerDefinition} from './RTTI_TriggerDefinition';
import {RTTI_Expression} from './RTTI_Expression';
import {RTTI_UsageContext} from './RTTI_UsageContext';
import {RTTI_Dosage} from './RTTI_Dosage';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
valueBase64Binary: t.string,
_valueBase64Binary: RTTI_Element,
valueBoolean: t.boolean,
_valueBoolean: RTTI_Element,
valueCanonical: t.string,
_valueCanonical: RTTI_Element,
valueCode: t.string,
_valueCode: RTTI_Element,
valueDate: t.string,
_valueDate: RTTI_Element,
valueDateTime: t.string,
_valueDateTime: RTTI_Element,
valueDecimal: t.number,
_valueDecimal: RTTI_Element,
valueId: t.string,
_valueId: RTTI_Element,
valueInstant: t.string,
_valueInstant: RTTI_Element,
valueInteger: t.number,
_valueInteger: RTTI_Element,
valueMarkdown: t.string,
_valueMarkdown: RTTI_Element,
valueOid: t.string,
_valueOid: RTTI_Element,
valuePositiveInt: t.number,
_valuePositiveInt: RTTI_Element,
valueString: t.string,
_valueString: RTTI_Element,
valueTime: t.string,
_valueTime: RTTI_Element,
valueUnsignedInt: t.number,
_valueUnsignedInt: RTTI_Element,
valueUri: t.string,
_valueUri: RTTI_Element,
valueUrl: t.string,
_valueUrl: RTTI_Element,
valueUuid: t.string,
_valueUuid: RTTI_Element,
valueAddress: RTTI_Address,
valueAge: RTTI_Age,
valueAnnotation: RTTI_Annotation,
valueAttachment: RTTI_Attachment,
valueCodeableConcept: RTTI_CodeableConcept,
valueCoding: RTTI_Coding,
valueContactPoint: RTTI_ContactPoint,
valueCount: RTTI_Count,
valueDistance: RTTI_Distance,
valueDuration: RTTI_Duration,
valueHumanName: RTTI_HumanName,
valueIdentifier: RTTI_Identifier,
valueMoney: RTTI_Money,
valuePeriod: RTTI_Period,
valueQuantity: RTTI_Quantity,
valueRange: RTTI_Range,
valueRatio: RTTI_Ratio,
valueReference: RTTI_Reference,
valueSampledData: RTTI_SampledData,
valueSignature: RTTI_Signature,
valueTiming: RTTI_Timing,
valueParameterDefinition: RTTI_ParameterDefinition,
valueDataRequirement: RTTI_DataRequirement,
valueRelatedArtifact: RTTI_RelatedArtifact,
valueContactDetail: RTTI_ContactDetail,
valueContributor: RTTI_Contributor,
valueTriggerDefinition: RTTI_TriggerDefinition,
valueExpression: RTTI_Expression,
valueUsageContext: RTTI_UsageContext,
valueDosage: RTTI_Dosage
        });
        

        export var RTTI_Task_Output:any = t.intersection([mandatory, partial]);
        

export type ITask_Output = t.TypeOf<typeof RTTI_Task_Output>;
        
        