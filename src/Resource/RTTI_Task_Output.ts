
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Address, IAddress} from './RTTI_Address';
import {RTTI_Age, IAge} from './RTTI_Age';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_ContactPoint, IContactPoint} from './RTTI_ContactPoint';
import {RTTI_Count, ICount} from './RTTI_Count';
import {RTTI_Distance, IDistance} from './RTTI_Distance';
import {RTTI_Duration, IDuration} from './RTTI_Duration';
import {RTTI_HumanName, IHumanName} from './RTTI_HumanName';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Ratio, IRatio} from './RTTI_Ratio';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_SampledData, ISampledData} from './RTTI_SampledData';
import {RTTI_Signature, ISignature} from './RTTI_Signature';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
import {RTTI_ParameterDefinition, IParameterDefinition} from './RTTI_ParameterDefinition';
import {RTTI_DataRequirement, IDataRequirement} from './RTTI_DataRequirement';
import {RTTI_RelatedArtifact, IRelatedArtifact} from './RTTI_RelatedArtifact';
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_Contributor, IContributor} from './RTTI_Contributor';
import {RTTI_TriggerDefinition, ITriggerDefinition} from './RTTI_TriggerDefinition';
import {RTTI_Expression, IExpression} from './RTTI_Expression';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_Dosage, IDosage} from './RTTI_Dosage';




            export interface ITask_Output {
                
                    /**
                     * The name of the Output parameter.
                     */
                    type : ICodeableConcept;
                    
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueBase64Binary? : string;
                    

                    /**
                     * Extensions for valueBase64Binary
                     */
                    _valueBase64Binary? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueBoolean? : boolean;
                    

                    /**
                     * Extensions for valueBoolean
                     */
                    _valueBoolean? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueCanonical? : string;
                    

                    /**
                     * Extensions for valueCanonical
                     */
                    _valueCanonical? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueCode? : string;
                    

                    /**
                     * Extensions for valueCode
                     */
                    _valueCode? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueDate? : string;
                    

                    /**
                     * Extensions for valueDate
                     */
                    _valueDate? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueDateTime? : string;
                    

                    /**
                     * Extensions for valueDateTime
                     */
                    _valueDateTime? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueDecimal? : number;
                    

                    /**
                     * Extensions for valueDecimal
                     */
                    _valueDecimal? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueId? : string;
                    

                    /**
                     * Extensions for valueId
                     */
                    _valueId? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueInstant? : string;
                    

                    /**
                     * Extensions for valueInstant
                     */
                    _valueInstant? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueInteger? : number;
                    

                    /**
                     * Extensions for valueInteger
                     */
                    _valueInteger? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueMarkdown? : string;
                    

                    /**
                     * Extensions for valueMarkdown
                     */
                    _valueMarkdown? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueOid? : string;
                    

                    /**
                     * Extensions for valueOid
                     */
                    _valueOid? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valuePositiveInt? : number;
                    

                    /**
                     * Extensions for valuePositiveInt
                     */
                    _valuePositiveInt? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueString? : string;
                    

                    /**
                     * Extensions for valueString
                     */
                    _valueString? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueTime? : string;
                    

                    /**
                     * Extensions for valueTime
                     */
                    _valueTime? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueUnsignedInt? : number;
                    

                    /**
                     * Extensions for valueUnsignedInt
                     */
                    _valueUnsignedInt? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueUri? : string;
                    

                    /**
                     * Extensions for valueUri
                     */
                    _valueUri? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueUrl? : string;
                    

                    /**
                     * Extensions for valueUrl
                     */
                    _valueUrl? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueUuid? : string;
                    

                    /**
                     * Extensions for valueUuid
                     */
                    _valueUuid? : IElement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueAddress? : IAddress;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueAge? : IAge;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueAnnotation? : IAnnotation;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueAttachment? : IAttachment;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueCodeableConcept? : ICodeableConcept;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueCoding? : ICoding;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueContactPoint? : IContactPoint;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueCount? : ICount;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueDistance? : IDistance;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueDuration? : IDuration;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueHumanName? : IHumanName;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueIdentifier? : IIdentifier;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueMoney? : IMoney;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valuePeriod? : IPeriod;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueQuantity? : IQuantity;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueRange? : IRange;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueRatio? : IRatio;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueReference? : IReference;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueSampledData? : ISampledData;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueSignature? : ISignature;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueTiming? : ITiming;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueParameterDefinition? : IParameterDefinition;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueDataRequirement? : IDataRequirement;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueRelatedArtifact? : IRelatedArtifact;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueContactDetail? : IContactDetail;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueContributor? : IContributor;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueTriggerDefinition? : ITriggerDefinition;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueExpression? : IExpression;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueUsageContext? : IUsageContext;
                    

                    /**
                     * The value of the Output parameter as a basic type.
                     */
                    valueDosage? : IDosage;
                    
            }
        


        export const RTTI_Task_Output: t.Type<ITask_Output> = t.recursion( 'ITask_Output', () =>
            t.intersection([
                
        t.type({
           type: RTTI_CodeableConcept
        })
        ,
                
        t.partial({
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
        })
        
            ])
        );
        

        