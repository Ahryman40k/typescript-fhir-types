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
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';

export interface IParameters_Parameter {
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
   * The name of the parameter (reference to the operation definition).
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueBase64Binary?: string;

  /**
   * Extensions for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueCanonical?: string;

  /**
   * Extensions for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueCode?: string;

  /**
   * Extensions for valueCode
   */
  _valueCode?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueDate?: string;

  /**
   * Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueDateTime?: string;

  /**
   * Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueDecimal?: number;

  /**
   * Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueId?: string;

  /**
   * Extensions for valueId
   */
  _valueId?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueInstant?: string;

  /**
   * Extensions for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueInteger?: number;

  /**
   * Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueMarkdown?: string;

  /**
   * Extensions for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueOid?: string;

  /**
   * Extensions for valueOid
   */
  _valueOid?: IElement;

  /**
   * If the parameter is a data type.
   */
  valuePositiveInt?: number;

  /**
   * Extensions for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueTime?: string;

  /**
   * Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueUnsignedInt?: number;

  /**
   * Extensions for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueUri?: string;

  /**
   * Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueUrl?: string;

  /**
   * Extensions for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueUuid?: string;

  /**
   * Extensions for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * If the parameter is a data type.
   */
  valueAddress?: IAddress;

  /**
   * If the parameter is a data type.
   */
  valueAge?: IAge;

  /**
   * If the parameter is a data type.
   */
  valueAnnotation?: IAnnotation;

  /**
   * If the parameter is a data type.
   */
  valueAttachment?: IAttachment;

  /**
   * If the parameter is a data type.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * If the parameter is a data type.
   */
  valueCoding?: ICoding;

  /**
   * If the parameter is a data type.
   */
  valueContactPoint?: IContactPoint;

  /**
   * If the parameter is a data type.
   */
  valueCount?: ICount;

  /**
   * If the parameter is a data type.
   */
  valueDistance?: IDistance;

  /**
   * If the parameter is a data type.
   */
  valueDuration?: IDuration;

  /**
   * If the parameter is a data type.
   */
  valueHumanName?: IHumanName;

  /**
   * If the parameter is a data type.
   */
  valueIdentifier?: IIdentifier;

  /**
   * If the parameter is a data type.
   */
  valueMoney?: IMoney;

  /**
   * If the parameter is a data type.
   */
  valuePeriod?: IPeriod;

  /**
   * If the parameter is a data type.
   */
  valueQuantity?: IQuantity;

  /**
   * If the parameter is a data type.
   */
  valueRange?: IRange;

  /**
   * If the parameter is a data type.
   */
  valueRatio?: IRatio;

  /**
   * If the parameter is a data type.
   */
  valueReference?: IReference;

  /**
   * If the parameter is a data type.
   */
  valueSampledData?: ISampledData;

  /**
   * If the parameter is a data type.
   */
  valueSignature?: ISignature;

  /**
   * If the parameter is a data type.
   */
  valueTiming?: ITiming;

  /**
   * If the parameter is a data type.
   */
  valueContactDetail?: IContactDetail;

  /**
   * If the parameter is a data type.
   */
  valueContributor?: IContributor;

  /**
   * If the parameter is a data type.
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * If the parameter is a data type.
   */
  valueExpression?: IExpression;

  /**
   * If the parameter is a data type.
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * If the parameter is a data type.
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * If the parameter is a data type.
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * If the parameter is a data type.
   */
  valueUsageContext?: IUsageContext;

  /**
   * If the parameter is a data type.
   */
  valueDosage?: IDosage;

  /**
   * If the parameter is a whole resource.
   */
  resource?: IResourceList;

  /**
   * A named part of a multi-part parameter.
   */
  part?: IParameters_Parameter[];
}

export const RTTI_Parameters_Parameter: t.Type<IParameters_Parameter> =
  t.recursion('IParameters_Parameter', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      name: t.string,
      _name: RTTI_Element,
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
      resource: RTTI_ResourceList,
      part: t.array(RTTI_Parameters_Parameter),
    }),
  );
