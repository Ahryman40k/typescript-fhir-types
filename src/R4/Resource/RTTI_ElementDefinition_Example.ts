import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Address, IAddress} from './RTTI_Address';
import {RTTI_Age, IAge} from './RTTI_Age';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
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
import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_Contributor, IContributor} from './RTTI_Contributor';
import {RTTI_DataRequirement, IDataRequirement} from './RTTI_DataRequirement';
import {RTTI_Expression, IExpression} from './RTTI_Expression';
import {
  RTTI_ParameterDefinition,
  IParameterDefinition,
} from './RTTI_ParameterDefinition';
import {RTTI_RelatedArtifact, IRelatedArtifact} from './RTTI_RelatedArtifact';
import {
  RTTI_TriggerDefinition,
  ITriggerDefinition,
} from './RTTI_TriggerDefinition';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_Dosage, IDosage} from './RTTI_Dosage';

export interface IElementDefinition_Example {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * Describes the purpose of this example amoung the set of examples.
   */
  label?: string;

  /**
   * Extensions for label
   */
  _label?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueBase64Binary?: string;

  /**
   * Extensions for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCanonical?: string;

  /**
   * Extensions for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCode?: string;

  /**
   * Extensions for valueCode
   */
  _valueCode?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDate?: string;

  /**
   * Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDateTime?: string;

  /**
   * Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDecimal?: number;

  /**
   * Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueId?: string;

  /**
   * Extensions for valueId
   */
  _valueId?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueInstant?: string;

  /**
   * Extensions for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueInteger?: number;

  /**
   * Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueMarkdown?: string;

  /**
   * Extensions for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueOid?: string;

  /**
   * Extensions for valueOid
   */
  _valueOid?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valuePositiveInt?: number;

  /**
   * Extensions for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueTime?: string;

  /**
   * Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUnsignedInt?: number;

  /**
   * Extensions for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUri?: string;

  /**
   * Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUrl?: string;

  /**
   * Extensions for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUuid?: string;

  /**
   * Extensions for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAddress?: IAddress;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAge?: IAge;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAnnotation?: IAnnotation;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAttachment?: IAttachment;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCoding?: ICoding;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueContactPoint?: IContactPoint;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCount?: ICount;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDistance?: IDistance;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDuration?: IDuration;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueHumanName?: IHumanName;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueIdentifier?: IIdentifier;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueMoney?: IMoney;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valuePeriod?: IPeriod;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueQuantity?: IQuantity;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueRange?: IRange;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueRatio?: IRatio;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueReference?: IReference;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueSampledData?: ISampledData;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueSignature?: ISignature;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueTiming?: ITiming;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueContactDetail?: IContactDetail;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueContributor?: IContributor;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueExpression?: IExpression;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUsageContext?: IUsageContext;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDosage?: IDosage;
}

export const RTTI_ElementDefinition_Example: t.Type<IElementDefinition_Example> =
  t.recursion('IElementDefinition_Example', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      label: t.string,
      _label: RTTI_Element,
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
      valueContactDetail: RTTI_ContactDetail,
      valueContributor: RTTI_Contributor,
      valueDataRequirement: RTTI_DataRequirement,
      valueExpression: RTTI_Expression,
      valueParameterDefinition: RTTI_ParameterDefinition,
      valueRelatedArtifact: RTTI_RelatedArtifact,
      valueTriggerDefinition: RTTI_TriggerDefinition,
      valueUsageContext: RTTI_UsageContext,
      valueDosage: RTTI_Dosage,
    }),
  );
