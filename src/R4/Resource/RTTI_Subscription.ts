import * as t from 'io-ts';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_ContactPoint, IContactPoint} from './RTTI_ContactPoint';
import {RTTI_instant} from '../Scalar/RTTI_instant';
import {
  RTTI_Subscription_Channel,
  ISubscription_Channel,
} from './RTTI_Subscription_Channel';
export enum SubscriptionStatusKind {
  _requested = 'requested',
  _active = 'active',
  _error = 'error',
  _off = 'off',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface ISubscription extends IDomainResource {
  /**
   * This is a Subscription resource
   */
  resourceType: 'Subscription';

  /**
   * The status of the subscription, which marks the server state for managing the subscription.
   */
  status: SubscriptionStatusKind;

  /**
   * A description of why this subscription is defined.
   */
  reason: string;

  /**
   * The rules that the server should use to determine when to generate notifications for this subscription.
   */
  criteria: string;

  /**
   * Details where to send notifications when resources are received that meet the criteria.
   */
  channel: ISubscription_Channel;

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
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  contact?: IContactPoint[];

  /**
   * The time for the server to turn the subscription off.
   */
  end?: string;

  /**
   * Extensions for end
   */
  _end?: IElement;

  /**
   * Extensions for reason
   */
  _reason?: IElement;

  /**
   * Extensions for criteria
   */
  _criteria?: IElement;

  /**
   * A record of the last error that occurred when the server processed a notification.
   */
  error?: string;

  /**
   * Extensions for error
   */
  _error?: IElement;
}

export const RTTI_Subscription: t.Type<ISubscription> = t.recursion(
  'ISubscription',
  () =>
    t.intersection([
      t.type({
        resourceType: t.literal('Subscription'),
        status: createEnumType<SubscriptionStatusKind>(
          SubscriptionStatusKind,
          'SubscriptionStatusKind',
        ),
        reason: t.string,
        criteria: t.string,
        channel: RTTI_Subscription_Channel,
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
        _status: RTTI_Element,
        contact: t.array(RTTI_ContactPoint),
        end: RTTI_instant,
        _end: RTTI_Element,
        _reason: RTTI_Element,
        _criteria: RTTI_Element,
        error: t.string,
        _error: RTTI_Element,
      }),
    ]),
);
