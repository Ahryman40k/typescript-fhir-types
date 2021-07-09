import * as t from 'io-ts';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {
  RTTI_ObservationDefinition_QuantitativeDetails,
  IObservationDefinition_QuantitativeDetails,
} from './RTTI_ObservationDefinition_QuantitativeDetails';
import {
  RTTI_ObservationDefinition_QualifiedInterval,
  IObservationDefinition_QualifiedInterval,
} from './RTTI_ObservationDefinition_QualifiedInterval';
import {RTTI_Reference, IReference} from './RTTI_Reference';
export enum ObservationDefinitionPermittedDataTypeKind {
  _quantity = 'Quantity',
  _codeableConcept = 'CodeableConcept',
  _string = 'string',
  _boolean = 'boolean',
  _integer = 'integer',
  _range = 'Range',
  _ratio = 'Ratio',
  _sampledData = 'SampledData',
  _time = 'time',
  _dateTime = 'dateTime',
  _period = 'Period',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface IObservationDefinition extends IDomainResource {
  /**
   * This is a ObservationDefinition resource
   */
  resourceType: 'ObservationDefinition';

  /**
   * Describes what will be observed. Sometimes this is called the observation "name".
   */
  code: ICodeableConcept;

  /**
   * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
   */
  meta?: IMeta;

  /**
   * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * Extensions for implicitRules
   */
  _implicitRules?: IElement;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * Extensions for language
   */
  _language?: IElement;

  /**
   * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: INarrative;

  /**
   * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
   */
  contained?: IResourceList[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * A code that classifies the general type of observation.
   */
  category?: ICodeableConcept[];

  /**
   * A unique identifier assigned to this ObservationDefinition artifact.
   */
  identifier?: IIdentifier[];

  /**
   * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
   */
  permittedDataType?: ObservationDefinitionPermittedDataTypeKind[];

  /**
   * Extensions for permittedDataType
   */
  _permittedDataType?: IElement[];

  /**
   * Multiple results allowed for observations conforming to this ObservationDefinition.
   */
  multipleResultsAllowed?: boolean;

  /**
   * Extensions for multipleResultsAllowed
   */
  _multipleResultsAllowed?: IElement;

  /**
   * The method or technique used to perform the observation.
   */
  method?: ICodeableConcept;

  /**
   * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
   */
  preferredReportName?: string;

  /**
   * Extensions for preferredReportName
   */
  _preferredReportName?: IElement;

  /**
   * Characteristics for quantitative results of this observation.
   */
  quantitativeDetails?: IObservationDefinition_QuantitativeDetails;

  /**
   * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
   */
  qualifiedInterval?: IObservationDefinition_QualifiedInterval[];

  /**
   * The set of valid coded results for the observations  conforming to this ObservationDefinition.
   */
  validCodedValueSet?: IReference;

  /**
   * The set of normal coded results for the observations conforming to this ObservationDefinition.
   */
  normalCodedValueSet?: IReference;

  /**
   * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
   */
  abnormalCodedValueSet?: IReference;

  /**
   * The set of critical coded results for the observation conforming to this ObservationDefinition.
   */
  criticalCodedValueSet?: IReference;
}

export const RTTI_ObservationDefinition: t.Type<IObservationDefinition> =
  t.recursion('IObservationDefinition', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('ObservationDefinition'),
        code: RTTI_CodeableConcept,
      }),
      t.partial({
        id: RTTI_id,
        meta: RTTI_Meta,
        implicitRules: RTTI_uri,
        _implicitRules: RTTI_Element,
        language: RTTI_code,
        _language: RTTI_Element,
        text: RTTI_Narrative,
        contained: t.array(RTTI_ResourceList),
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        category: t.array(RTTI_CodeableConcept),
        identifier: t.array(RTTI_Identifier),
        permittedDataType: t.array(
          createEnumType<ObservationDefinitionPermittedDataTypeKind>(
            ObservationDefinitionPermittedDataTypeKind,
            'ObservationDefinitionPermittedDataTypeKind',
          ),
        ),
        _permittedDataType: t.array(RTTI_Element),
        multipleResultsAllowed: t.boolean,
        _multipleResultsAllowed: RTTI_Element,
        method: RTTI_CodeableConcept,
        preferredReportName: t.string,
        _preferredReportName: RTTI_Element,
        quantitativeDetails: RTTI_ObservationDefinition_QuantitativeDetails,
        qualifiedInterval: t.array(
          RTTI_ObservationDefinition_QualifiedInterval,
        ),
        validCodedValueSet: RTTI_Reference,
        normalCodedValueSet: RTTI_Reference,
        abnormalCodedValueSet: RTTI_Reference,
        criticalCodedValueSet: RTTI_Reference,
      }),
    ]),
  );
