
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Address} from './RTTI_Address';
import {RTTI_Age} from './RTTI_Age';
import {RTTI_Annotation} from './RTTI_Annotation';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
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

export enum StructureMap_SourceListModeKind {
                first = 'first',
notFirst = 'notFirst',
last = 'last',
notLast = 'notLast',
onlyOne = 'onlyOne'
            }
const StructureMap_SourceListModeKindKeys = t.keyof({
                [StructureMap_SourceListModeKind.first]: null,
[StructureMap_SourceListModeKind.notFirst]: null,
[StructureMap_SourceListModeKind.last]: null,
[StructureMap_SourceListModeKind.notLast]: null,
[StructureMap_SourceListModeKind.onlyOne]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
context: t.string,
_context: RTTI_Element,
min: t.number,
_min: RTTI_Element,
max: t.string,
_max: RTTI_Element,
type: t.string,
_type: RTTI_Element,
defaultValueBase64Binary: t.string,
_defaultValueBase64Binary: RTTI_Element,
defaultValueBoolean: t.boolean,
_defaultValueBoolean: RTTI_Element,
defaultValueCanonical: t.string,
_defaultValueCanonical: RTTI_Element,
defaultValueCode: t.string,
_defaultValueCode: RTTI_Element,
defaultValueDate: t.string,
_defaultValueDate: RTTI_Element,
defaultValueDateTime: t.string,
_defaultValueDateTime: RTTI_Element,
defaultValueDecimal: t.number,
_defaultValueDecimal: RTTI_Element,
defaultValueId: t.string,
_defaultValueId: RTTI_Element,
defaultValueInstant: t.string,
_defaultValueInstant: RTTI_Element,
defaultValueInteger: t.number,
_defaultValueInteger: RTTI_Element,
defaultValueMarkdown: t.string,
_defaultValueMarkdown: RTTI_Element,
defaultValueOid: t.string,
_defaultValueOid: RTTI_Element,
defaultValuePositiveInt: t.number,
_defaultValuePositiveInt: RTTI_Element,
defaultValueString: t.string,
_defaultValueString: RTTI_Element,
defaultValueTime: t.string,
_defaultValueTime: RTTI_Element,
defaultValueUnsignedInt: t.number,
_defaultValueUnsignedInt: RTTI_Element,
defaultValueUri: t.string,
_defaultValueUri: RTTI_Element,
defaultValueUrl: t.string,
_defaultValueUrl: RTTI_Element,
defaultValueUuid: t.string,
_defaultValueUuid: RTTI_Element,
defaultValueAddress: RTTI_Address,
defaultValueAge: RTTI_Age,
defaultValueAnnotation: RTTI_Annotation,
defaultValueAttachment: RTTI_Attachment,
defaultValueCodeableConcept: RTTI_CodeableConcept,
defaultValueCoding: RTTI_Coding,
defaultValueContactPoint: RTTI_ContactPoint,
defaultValueCount: RTTI_Count,
defaultValueDistance: RTTI_Distance,
defaultValueDuration: RTTI_Duration,
defaultValueHumanName: RTTI_HumanName,
defaultValueIdentifier: RTTI_Identifier,
defaultValueMoney: RTTI_Money,
defaultValuePeriod: RTTI_Period,
defaultValueQuantity: RTTI_Quantity,
defaultValueRange: RTTI_Range,
defaultValueRatio: RTTI_Ratio,
defaultValueReference: RTTI_Reference,
defaultValueSampledData: RTTI_SampledData,
defaultValueSignature: RTTI_Signature,
defaultValueTiming: RTTI_Timing,
defaultValueParameterDefinition: RTTI_ParameterDefinition,
defaultValueDataRequirement: RTTI_DataRequirement,
defaultValueRelatedArtifact: RTTI_RelatedArtifact,
defaultValueContactDetail: RTTI_ContactDetail,
defaultValueContributor: RTTI_Contributor,
defaultValueTriggerDefinition: RTTI_TriggerDefinition,
defaultValueExpression: RTTI_Expression,
defaultValueUsageContext: RTTI_UsageContext,
defaultValueDosage: RTTI_Dosage,
element: t.string,
_element: RTTI_Element,
listMode: StructureMap_SourceListModeKindKeys,
_listMode: RTTI_Element,
variable: t.string,
_variable: RTTI_Element,
condition: t.string,
_condition: RTTI_Element,
check: t.string,
_check: RTTI_Element,
logMessage: t.string,
_logMessage: RTTI_Element
        });
        

        export var RTTI_StructureMap_Source:any = t.intersection([mandatory, partial]);
        

export type IStructureMap_Source = t.TypeOf<typeof RTTI_StructureMap_Source>;
        
        