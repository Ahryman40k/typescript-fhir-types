import * as t from 'io-ts';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {
  RTTI_SupplyRequest_Parameter,
  ISupplyRequest_Parameter,
} from './RTTI_SupplyRequest_Parameter';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
export enum SupplyRequestStatusKind {
  _draft = 'draft',
  _active = 'active',
  _suspended = 'suspended',
  _cancelled = 'cancelled',
  _completed = 'completed',
  _enteredInError = 'entered-in-error',
  _unknown = 'unknown',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface ISupplyRequest extends IDomainResource {
  /**
   * This is a SupplyRequest resource
   */
  resourceType: 'SupplyRequest';

  /**
   * The amount that is being ordered of the indicated item.
   */
  quantity: IQuantity;

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
   * Business identifiers assigned to this SupplyRequest by the author and/or other systems. These identifiers remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * Status of the supply request.
   */
  status?: SupplyRequestStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
   */
  category?: ICodeableConcept;

  /**
   * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
   */
  priority?: string;

  /**
   * Extensions for priority
   */
  _priority?: IElement;

  /**
   * The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemReference?: IReference;

  /**
   * Specific parameters for the ordered item.  For example, the size of the indicated item.
   */
  parameter?: ISupplyRequest_Parameter[];

  /**
   * When the request should be fulfilled.
   */
  occurrenceDateTime?: string;

  /**
   * Extensions for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * When the request should be fulfilled.
   */
  occurrencePeriod?: IPeriod;

  /**
   * When the request should be fulfilled.
   */
  occurrenceTiming?: ITiming;

  /**
   * When the request was made.
   */
  authoredOn?: string;

  /**
   * Extensions for authoredOn
   */
  _authoredOn?: IElement;

  /**
   * The device, practitioner, etc. who initiated the request.
   */
  requester?: IReference;

  /**
   * Who is intended to fulfill the request.
   */
  supplier?: IReference[];

  /**
   * The reason why the supply item was requested.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * The reason why the supply item was requested.
   */
  reasonReference?: IReference[];

  /**
   * Where the supply is expected to come from.
   */
  deliverFrom?: IReference;

  /**
   * Where the supply is destined to go.
   */
  deliverTo?: IReference;
}

export const RTTI_SupplyRequest: t.Type<ISupplyRequest> = t.recursion(
  'ISupplyRequest',
  () =>
    t.intersection([
      t.type({
        resourceType: t.literal('SupplyRequest'),
        quantity: RTTI_Quantity,
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
        identifier: t.array(RTTI_Identifier),
        status: createEnumType<SupplyRequestStatusKind>(
          SupplyRequestStatusKind,
          'SupplyRequestStatusKind',
        ),
        _status: RTTI_Element,
        category: RTTI_CodeableConcept,
        priority: RTTI_code,
        _priority: RTTI_Element,
        itemCodeableConcept: RTTI_CodeableConcept,
        itemReference: RTTI_Reference,
        parameter: t.array(RTTI_SupplyRequest_Parameter),
        occurrenceDateTime: t.string,
        _occurrenceDateTime: RTTI_Element,
        occurrencePeriod: RTTI_Period,
        occurrenceTiming: RTTI_Timing,
        authoredOn: RTTI_dateTime,
        _authoredOn: RTTI_Element,
        requester: RTTI_Reference,
        supplier: t.array(RTTI_Reference),
        reasonCode: t.array(RTTI_CodeableConcept),
        reasonReference: t.array(RTTI_Reference),
        deliverFrom: RTTI_Reference,
        deliverTo: RTTI_Reference,
      }),
    ]),
);
